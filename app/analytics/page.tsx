import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnalyticsHeader from "@/components/analytics/analytics-header"
import AnalyticsSummary from "@/components/analytics/analytics-summary"
import DisasterTrendChart from "@/components/analytics/disaster-trend-chart"
import DisasterTypeDistribution from "@/components/analytics/disaster-type-distribution"
import SeverityHeatmap from "@/components/analytics/severity-heatmap"
import TopAffectedRegions from "@/components/analytics/top-affected-regions"
import { getAnalyticsData } from "@/lib/analytics"

export const metadata: Metadata = {
  title: "Analytics | DisasterTrack",
  description: "Comprehensive analytics and insights for global disaster monitoring",
}

export default async function AnalyticsPage() {
  const analyticsData = await getAnalyticsData()

  return (
    <div className="flex min-h-screen flex-col">
      <AnalyticsHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <div className="flex items-center gap-2">
            <Link href="/analytics/export" className="text-sm text-muted-foreground underline">
              Export Data
            </Link>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="geographic">Geographic</TabsTrigger>
            <TabsTrigger value="severity">Severity</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <AnalyticsSummary data={analyticsData} />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Disaster Trends</CardTitle>
                  <CardDescription>Disaster occurrences over the past 12 months</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <DisasterTrendChart data={analyticsData.trends} />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Distribution by Type</CardTitle>
                  <CardDescription>Breakdown of disasters by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <DisasterTypeDistribution data={analyticsData.byType} />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Top Affected Regions</CardTitle>
                  <CardDescription>Regions with highest disaster impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <TopAffectedRegions data={analyticsData.topRegions} />
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Severity Heatmap</CardTitle>
                  <CardDescription>Disaster severity distribution by month and type</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <SeverityHeatmap data={analyticsData.severityMatrix} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Long-term Disaster Trends</CardTitle>
                    <CardDescription>View detailed trend analysis and forecasts</CardDescription>
                  </div>
                  <Link href="/analytics/trends" className="text-sm text-primary underline">
                    View Detailed Trends
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Explore comprehensive trend analysis with forecasting, seasonal patterns, and historical
                    comparisons.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="geographic" className="space-y-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Geographic Distribution Analysis</CardTitle>
                    <CardDescription>Explore disaster patterns by region</CardDescription>
                  </div>
                  <Link href="/analytics/geographic" className="text-sm text-primary underline">
                    View Geographic Analysis
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Analyze disaster distribution across different regions, countries, and geographic features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="severity" className="space-y-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Severity Analysis</CardTitle>
                    <CardDescription>Detailed breakdown of disaster severity metrics</CardDescription>
                  </div>
                  <Link href="/analytics/severity" className="text-sm text-primary underline">
                    View Severity Analysis
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Examine disaster severity patterns, impact assessments, and risk modeling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Comparative Analysis</CardTitle>
                    <CardDescription>Compare different disaster types and regions</CardDescription>
                  </div>
                  <Link href="/analytics/comparison" className="text-sm text-primary underline">
                    View Comparison Tools
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Compare disaster types, regions, and time periods with interactive visualization tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
