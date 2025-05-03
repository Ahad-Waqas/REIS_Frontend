import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"
import type { Disaster } from "@/types/disaster"

interface RecentDisastersProps {
  disasters: Disaster[]
}

export default function RecentDisasters({ disasters }: RecentDisastersProps) {
  // Take only the most recent 6 disasters
  const recentDisasters = disasters.slice(0, 6)

  const getTypeColor = (type: string) => {
    switch (type) {
      case "earthquake":
        return "bg-red-100 text-red-800 hover:bg-red-100/80"
      case "flood":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100/80"
      case "wildfire":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100/80"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100/80"
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recentDisasters.map((disaster) => (
        <Card key={disaster.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{disaster.title}</CardTitle>
              <Badge variant="outline" className={getTypeColor(disaster.type)}>
                {disaster.type.charAt(0).toUpperCase() + disaster.type.slice(1)}
              </Badge>
            </div>
            <CardDescription>{formatDistanceToNow(new Date(disaster.date), { addSuffix: true })}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2">{disaster.description}</p>
            <p className="text-sm mt-2">
              <span className="font-medium">Location:</span> {disaster.location}
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={`/map?lat=${disaster.latitude}&lng=${disaster.longitude}&zoom=8`}
              className="text-sm text-primary hover:underline"
            >
              View on map
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
