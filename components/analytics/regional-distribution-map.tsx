"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface RegionalDistributionMapProps {
  data: any[]
}

export default function RegionalDistributionMap({ data }: RegionalDistributionMapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current) return

    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([20, 0], 2)

      // Add base map layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current)

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

  // Add data to map
  useEffect(() => {
    if (!mapRef.current || !data || !data.length) return

    // Clear existing markers
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Circle) {
        mapRef.current?.removeLayer(layer)
      }
    })

    // Add markers for each region
    data.forEach((region) => {
      // Create circle with size based on disaster count
      const circle = L.circle([region.latitude, region.longitude], {
        color: getColorByType(region.dominantType),
        fillColor: getColorByType(region.dominantType),
        fillOpacity: 0.6,
        radius: Math.sqrt(region.count) * 20000, // Scale circle size based on count
      }).addTo(mapRef.current!)

      // Add popup with region info
      circle.bindPopup(`
        <strong>${region.name}</strong><br>
        Total disasters: ${region.count}<br>
        Dominant type: ${region.dominantType}<br>
        Average severity: ${region.avgSeverity.toFixed(1)}
      `)
    })
  }, [data])

  // Helper function to get color based on disaster type
  function getColorByType(type: string): string {
    switch (type.toLowerCase()) {
      case "earthquake":
        return "#e53935" // Red
      case "flood":
        return "#1e88e5" // Blue
      case "wildfire":
        return "#ff9800" // Orange
      default:
        return "#757575" // Gray
    }
  }

  return <div ref={mapContainerRef} className="w-full h-full rounded-md overflow-hidden" />
}
