"use client"

import { useState, useEffect } from "react"
import type { Disaster } from "@/types/disaster"
import { getRecentDisasters } from "@/lib/api"

export function useDisasters() {
  const [disasters, setDisasters] = useState<Disaster[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchDisasters() {
      try {
        setIsLoading(true)
        const data = await getRecentDisasters()
        setDisasters(data)
        setError(null)
      } catch (err) {
        setError("Failed to fetch disaster data")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDisasters()
  }, [])

  return { disasters, isLoading, error }
}
