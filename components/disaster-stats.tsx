import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Disaster } from "@/types/disaster"

interface DisasterStatsProps {
  disasters: Disaster[]
}

export default function DisasterStats({ disasters }: DisasterStatsProps) {
  // Calculate stats
  const totalDisasters = disasters.length

  const earthquakes = disasters.filter((d) => d.type === "earthquake").length
  const floods = disasters.filter((d) => d.type === "flood").length
  const wildfires = disasters.filter((d) => d.type === "wildfire").length

  // Calculate average severity
  const avgSeverity = disasters.reduce((acc, curr) => acc + curr.severity, 0) / totalDisasters

  // Get most recent disaster
  const mostRecent = disasters.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Disasters</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalDisasters}</div>
          <p className="text-xs text-muted-foreground">Tracked in the last 30 days</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">By Type</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground grid grid-cols-3 gap-1">
            <div>
              <div className="text-lg font-bold text-red-500">{earthquakes}</div>
              <p>Earthquakes</p>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-500">{floods}</div>
              <p>Floods</p>
            </div>
            <div>
              <div className="text-lg font-bold text-orange-500">{wildfires}</div>
              <p>Wildfires</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Severity</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{avgSeverity.toFixed(1)}</div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
            <div
              className={`h-full ${
                avgSeverity >= 8
                  ? "bg-red-500"
                  : avgSeverity >= 6
                    ? "bg-orange-500"
                    : avgSeverity >= 4
                      ? "bg-yellow-500"
                      : "bg-green-500"
              }`}
              style={{ width: `${avgSeverity * 10}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Most Recent</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-md font-medium line-clamp-1">{mostRecent?.title}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {mostRecent?.location} • {new Date(mostRecent?.date).toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
