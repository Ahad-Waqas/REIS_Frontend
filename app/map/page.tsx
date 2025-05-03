"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DisasterMap from "@/components/disaster-map"
import DisasterFilters from "@/components/disaster-filters"
import { useDisasters } from "@/hooks/use-disasters"

export default function MapPage() {
  const { disasters, isLoading } = useDisasters()
  const [disasterType, setDisasterType] = useState("all")
  const [mapType, setMapType] = useState("heatmap")
  const [mapView, setMapView] = useState("streets")

  const filteredDisasters = disasters.filter((disaster) => {
    if (disasterType === "all") return true
    return disaster.type === disasterType
  })

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="text-xl font-bold">
            DisasterTrack
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/map" className="text-sm font-medium">
              Map
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold">Disaster Map</h1>
            <div className="flex flex-wrap gap-4">
              <Select value={disasterType} onValueChange={setDisasterType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Disaster Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Disasters</SelectItem>
                  <SelectItem value="earthquake">Earthquakes</SelectItem>
                  <SelectItem value="flood">Floods</SelectItem>
                  <SelectItem value="wildfire">Wildfires</SelectItem>
                </SelectContent>
              </Select>

              <Select value={mapType} onValueChange={setMapType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Map Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="heatmap">Heatmap</SelectItem>
                  <SelectItem value="markers">Markers</SelectItem>
                  <SelectItem value="clusters">Clusters</SelectItem>
                </SelectContent>
              </Select>

              <Select value={mapView} onValueChange={setMapView}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Map View" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="streets">Streets</SelectItem>
                  <SelectItem value="satellite">Satellite</SelectItem>
                  <SelectItem value="terrain">Terrain</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="map" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="map">Map View</TabsTrigger>
              <TabsTrigger value="location">Location Search</TabsTrigger>
            </TabsList>
            <TabsContent value="map" className="w-full">
              <div className="h-[700px] rounded-lg overflow-hidden border">
                {isLoading ? (
                  <div className="h-full flex items-center justify-center">
                    <p>Loading map data...</p>
                  </div>
                ) : (
                  <DisasterMap disasters={filteredDisasters} mapType={mapType} mapView={mapView} interactive={true} />
                )}
              </div>
            </TabsContent>
            <TabsContent value="location" className="w-full">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Search by Location</h2>
                    <p className="text-sm text-muted-foreground">
                      Enter coordinates or search for a location to view disasters in that area.
                    </p>
                  </div>
                  <DisasterFilters />
                </div>
                <div className="h-[400px] rounded-lg overflow-hidden border">
                  <DisasterMap
                    disasters={[]}
                    mapType="markers"
                    mapView={mapView}
                    interactive={true}
                    searchMode={true}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-muted-foreground">© 2024 DisasterTrack. All rights reserved.</p>
            <nav className="flex items-center gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
