import Link from "next/link"
import { Button } from "@/components/ui/button"
import DisasterMap from "@/components/disaster-map"
import RecentDisasters from "@/components/recent-disasters"
import { getRecentDisasters } from "@/lib/api"

export default async function Home() {
  const disasters = await getRecentDisasters()

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
            <Link href="/analytics" className="text-sm font-medium">
              Analytics
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
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Global Disaster Monitoring System
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Track and monitor disasters worldwide with real-time data from GDACS.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/map">
                  <Button>Explore Map</Button>
                </Link>
                <Link href="/signup">
                  <Button variant="outline">Create Account</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Recent Disasters</h2>
            <div className="h-[500px] mb-8 rounded-lg overflow-hidden border">
              <DisasterMap disasters={disasters} interactive={false} />
            </div>
            <RecentDisasters disasters={disasters} />
          </div>
        </section>
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
