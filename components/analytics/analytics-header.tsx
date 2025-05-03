import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function AnalyticsHeader() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold">
            DisasterTrack
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/analytics" className="text-sm font-medium">
              Overview
            </Link>
            <Link href="/analytics/trends" className="text-sm font-medium">
              Trends
            </Link>
            <Link href="/analytics/geographic" className="text-sm font-medium">
              Geographic
            </Link>
            <Link href="/analytics/severity" className="text-sm font-medium">
              Severity
            </Link>
            <Link href="/analytics/comparison" className="text-sm font-medium">
              Comparison
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              Dashboard
            </Button>
          </Link>
          <Link href="/map">
            <Button size="sm">Map</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
