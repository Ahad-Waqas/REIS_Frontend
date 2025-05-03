import type { Disaster } from "@/types/disaster"
import { sampleDisasters } from "@/data/sample-disasters"

// In a real app, this would fetch data from the GDACS API
export async function getRecentDisasters(): Promise<Disaster[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Return sample data
  return sampleDisasters
}

// Function to fetch disaster details by ID
export async function getDisasterById(id: string): Promise<Disaster | null> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Find disaster in sample data
  const disaster = sampleDisasters.find((d) => d.id === id)

  return disaster || null
}

// Function to search disasters by location
export async function searchDisastersByLocation(
  latitude: number,
  longitude: number,
  radius = 100,
  type?: string,
): Promise<Disaster[]> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 700))

  // In a real app, this would use geospatial queries
  // For demo, we'll just return filtered sample data
  let results = sampleDisasters

  if (type && type !== "all") {
    results = results.filter((d) => d.type === type)
  }

  // Simple distance calculation (not accurate for large distances)
  const filteredResults = results.filter((disaster) => {
    const distance = calculateDistance(latitude, longitude, disaster.latitude, disaster.longitude)

    return distance <= radius
  })

  return filteredResults
}

// Helper function to calculate distance between coordinates (in km)
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c

  return distance
}
