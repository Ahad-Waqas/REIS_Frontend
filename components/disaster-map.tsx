"use client"

import { useEffect, useRef, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet.heat"
import "leaflet.markercluster"
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"
import { DisasterModal } from "@/components/disaster-modal"
import type { Disaster } from "@/types/disaster"

// Fix Leaflet icon issues
if (typeof window !== "undefined") {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  })
}

interface DisasterMapProps {
  disasters: Disaster[]
  mapType?: "heatmap" | "markers" | "clusters"
  mapView?: "streets" | "satellite" | "terrain"
  interactive?: boolean
  searchMode?: boolean
}

export default function DisasterMap({
  disasters,
  mapType = "heatmap",
  mapView = "streets",
  interactive = true,
  searchMode = false,
}: DisasterMapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const heatLayerRef = useRef<any>(null)
  const [selectedDisaster, setSelectedDisaster] = useState<Disaster | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [clickedPoint, setClickedPoint] = useState<[number, number] | null>(null)

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current) return

    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([37.8, -96], 4)

      // Add attribution
      L.control
        .attribution({
          prefix: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(mapRef.current)
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  // Update map tiles based on selected view
  useEffect(() => {
    if (!mapRef.current) return

    // Store existing non-tile layers
    const existingLayers: L.Layer[] = []
    mapRef.current.eachLayer((layer) => {
      if (!(layer instanceof L.TileLayer)) {
        existingLayers.push(layer)
        mapRef.current?.removeLayer(layer)
      }
    })

    // Remove existing tile layers
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        mapRef.current?.removeLayer(layer)
      }
    })

    // Add new tile layer based on selected view
    let tileLayer

    switch (mapView) {
      case "satellite":
        tileLayer = L.tileLayer(
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          {
            attribution:
              "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
          },
        )
        break
      case "terrain":
        tileLayer = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        })
        break
      default:
        tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
    }

    tileLayer.addTo(mapRef.current)

    // Re-add the existing non-tile layers to preserve them
    existingLayers.forEach((layer) => {
      mapRef.current?.addLayer(layer)
    })
  }, [mapView])

  // Find the nearest disaster to a clicked point
  const findNearestDisaster = (lat: number, lng: number) => {
    if (!disasters.length) return null

    let nearestDisaster = null
    let minDistance = Number.POSITIVE_INFINITY

    disasters.forEach((disaster) => {
      const distance = calculateDistance(lat, lng, disaster.latitude, disaster.longitude)
      if (distance < minDistance) {
        minDistance = distance
        nearestDisaster = disaster
      }
    })

    // Only return if within a reasonable distance (50km)
    return minDistance < 50 ? nearestDisaster : null
  }

  // Calculate distance between two points in km
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371 // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180
    const dLon = ((lon2 - lon1) * Math.PI) / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  // Generate a comprehensive heatmap
  const generateComprehensiveHeatmap = () => {
    if (!mapRef.current || !disasters.length) return

    // Remove existing heatmap layer if it exists
    if (heatLayerRef.current) {
      mapRef.current.removeLayer(heatLayerRef.current)
      heatLayerRef.current = null
    }

    // Create a dense grid of points to cover the entire map area
    const points = []
    const bounds = mapRef.current.getBounds()
    const north = bounds.getNorth()
    const south = bounds.getSouth()
    const east = bounds.getEast()
    const west = bounds.getWest()

    // Create a grid of points with intensity based on proximity to disasters
    const latStep = (north - south) / 50
    const lngStep = (east - west) / 50

    for (let lat = south; lat <= north; lat += latStep) {
      for (let lng = west; lng <= east; lng += lngStep) {
        // Calculate intensity based on proximity to disasters
        let intensity = 0
        disasters.forEach((disaster) => {
          const distance = calculateDistance(lat, lng, disaster.latitude, disaster.longitude)
          // Inverse square law for intensity falloff
          const distanceEffect = 1 / Math.max(1, Math.pow(distance / 50, 2))
          intensity += disaster.severity * distanceEffect
        })

        // Normalize intensity
        intensity = Math.min(10, intensity)

        if (intensity > 0.1) {
          points.push([lat, lng, intensity])
        }
      }
    }

    // Create the heatmap with a comprehensive color gradient
    // @ts-ignore - Leaflet.heat types are not included
    heatLayerRef.current = L.heatLayer(points, {
      radius: 25,
      blur: 15,
      maxZoom: 10,
      max: 10,
      gradient: {
        0.0: "rgb(0, 128, 0)", // Green for low intensity
        0.2: "rgb(173, 255, 47)", // GreenYellow
        0.4: "rgb(255, 255, 0)", // Yellow
        0.6: "rgb(255, 165, 0)", // Orange
        0.8: "rgb(255, 69, 0)", // OrangeRed
        1.0: "rgb(255, 0, 0)", // Red for high intensity
      },
      minOpacity: 0.5,
    }).addTo(mapRef.current)

    // Make the heatmap clickable
    if (interactive) {
      mapRef.current.on("click", (e) => {
        const { lat, lng } = e.latlng
        setClickedPoint([lat, lng])

        // Find the nearest disaster to the clicked point
        const nearestDisaster = findNearestDisaster(lat, lng)
        if (nearestDisaster) {
          setSelectedDisaster(nearestDisaster)
          setModalOpen(true)
        }
      })
    }
  }

  // Update map visualization based on selected type and disasters data
  useEffect(() => {
    if (!mapRef.current || !disasters.length) return

    // Remove existing data layers
    mapRef.current.eachLayer((layer) => {
      if (!(layer instanceof L.TileLayer)) {
        mapRef.current?.removeLayer(layer)
      }
    })

    // Add new data layer based on selected type
    switch (mapType) {
      case "heatmap":
        generateComprehensiveHeatmap()
        break

      case "clusters":
        const markerClusterGroup = L.markerClusterGroup()

        disasters.forEach((disaster) => {
          const marker = L.marker([disaster.latitude, disaster.longitude])

          marker.bindTooltip(`${disaster.title} (${disaster.type})`)

          if (interactive) {
            marker.on("click", () => {
              setSelectedDisaster(disaster)
              setModalOpen(true)
            })
          }

          markerClusterGroup.addLayer(marker)
        })

        mapRef.current.addLayer(markerClusterGroup)
        break

      case "markers":
      default:
        disasters.forEach((disaster) => {
          const marker = L.marker([disaster.latitude, disaster.longitude])

          // Color-code markers based on disaster type
          const icon = L.divIcon({
            className: `disaster-marker ${disaster.type}`,
            html: `<div class="marker-inner ${getMarkerColorClass(disaster.type)}"></div>`,
            iconSize: [20, 20],
          })

          marker.setIcon(icon)
          marker.bindTooltip(`${disaster.title} (${disaster.type})`)

          if (interactive) {
            marker.on("click", () => {
              setSelectedDisaster(disaster)
              setModalOpen(true)
            })
          }

          marker.addTo(mapRef.current)
        })
    }
  }, [disasters, mapType, interactive])

  // Regenerate heatmap when map bounds change
  useEffect(() => {
    if (!mapRef.current || mapType !== "heatmap") return

    const handleMoveEnd = () => {
      if (mapType === "heatmap") {
        generateComprehensiveHeatmap()
      }
    }

    mapRef.current.on("moveend", handleMoveEnd)

    return () => {
      mapRef.current?.off("moveend", handleMoveEnd)
    }
  }, [mapType, disasters])

  // Add search functionality for search mode
  useEffect(() => {
    if (!mapRef.current || !searchMode) return

    // Add click handler for getting coordinates
    const onMapClick = (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng

      // Create a temporary marker
      const marker = L.marker([lat, lng]).addTo(mapRef.current!)
      marker.bindPopup(`Latitude: ${lat.toFixed(6)}<br>Longitude: ${lng.toFixed(6)}`).openPopup()

      // Remove previous markers
      mapRef.current!.eachLayer((layer) => {
        if (layer instanceof L.Marker && layer !== marker) {
          mapRef.current!.removeLayer(layer)
        }
      })
    }

    mapRef.current.on("click", onMapClick)

    return () => {
      mapRef.current?.off("click", onMapClick)
    }
  }, [searchMode])

  function getMarkerColorClass(type: string): string {
    switch (type) {
      case "earthquake":
        return "bg-red-500"
      case "flood":
        return "bg-blue-500"
      case "wildfire":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <>
      <div ref={mapContainerRef} className="w-full h-full" style={{ zIndex: 0 }} />
      <style jsx global>{`
        .disaster-marker {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .marker-inner {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
        }
        /* Custom heatmap styles */
        .leaflet-heatmap-layer {
          opacity: 0.85 !important;
          z-index: 400 !important; /* Ensure heatmap appears above tile layers */
        }
        /* Ensure map container has proper z-index handling */
        .leaflet-container {
          z-index: 1;
          cursor: pointer;
        }
      `}</style>

      <DisasterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} disaster={selectedDisaster} />
    </>
  )
}
