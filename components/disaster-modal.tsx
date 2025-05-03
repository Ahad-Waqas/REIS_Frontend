"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, AlertTriangleIcon, InfoIcon } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import type { Disaster } from "@/types/disaster"

interface DisasterModalProps {
  isOpen: boolean
  onClose: () => void
  disaster: Disaster | null
}

export function DisasterModal({ isOpen, onClose, disaster }: DisasterModalProps) {
  if (!disaster) return null

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

  const getSeverityLabel = (severity: number) => {
    if (severity >= 8) return "Extreme"
    if (severity >= 6) return "Severe"
    if (severity >= 4) return "Moderate"
    return "Minor"
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{disaster.title}</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className={getTypeColor(disaster.type)}>
                {disaster.type.charAt(0).toUpperCase() + disaster.type.slice(1)}
              </Badge>
              <span className="text-xs text-muted-foreground">
                <CalendarIcon className="inline-block w-3 h-3 mr-1" />
                {formatDistanceToNow(new Date(disaster.date), { addSuffix: true })}
              </span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-[20px_1fr] items-start gap-2">
            <MapPinIcon className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-muted-foreground">
                {disaster.location}
                <br />
                Lat: {disaster.latitude.toFixed(4)}, Lon: {disaster.longitude.toFixed(4)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[20px_1fr] items-start gap-2">
            <AlertTriangleIcon className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Severity</p>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      disaster.severity >= 8
                        ? "bg-red-500"
                        : disaster.severity >= 6
                          ? "bg-orange-500"
                          : disaster.severity >= 4
                            ? "bg-yellow-500"
                            : "bg-green-500"
                    }`}
                    style={{ width: `${disaster.severity * 10}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{getSeverityLabel(disaster.severity)}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[20px_1fr] items-start gap-2">
            <InfoIcon className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Description</p>
              <p className="text-sm text-muted-foreground">{disaster.description}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
