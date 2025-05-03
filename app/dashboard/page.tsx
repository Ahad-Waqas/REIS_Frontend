import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import DashboardHeader from "@/components/dashboard-header"
import DashboardSidebar from "@/components/dashboard-sidebar"
import DisasterStats from "@/components/disaster-stats"
import RecentDisasters from "@/components/recent-disasters"
import { getRecentDisasters } from "@/lib/api"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const disasters = await getRecentDisasters()

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader user={user} />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <DisasterStats disasters={disasters} />
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Recent Disasters</h2>
            <RecentDisasters disasters={disasters} />
          </div>
        </main>
      </div>
    </div>
  )
}
