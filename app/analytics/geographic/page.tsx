import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnalyticsHeader from "@/components/analytics/analytics-header"
import AnalyticsFilters from "@/components/analytics/analytics-filters"
import RegionalDistributionMap from "@/components/analytics/regional-distribution-map"
import RegionalComparisonChart from "@/components/analytics/regional-comparison-chart"
import RegionalSeverityChart from "@/components/analytics/regional-severity-chart"
import RegionalTimelineChart from "@/components/analytics/regional-timeline-chart"
import { getAnalyticsData } from "@/lib/analytics"

export const metadata: Metadata = {
  title: "Geographic Analysis | DisasterTrack Analytics",
  description: "Geographic distribution and regional analysis of global disasters",
}

export default async function GeographicPage() {
  const analyticsData = await getAnalyticsData()

  return (
    <div className="flex min-h-screen flex-col">
      <AnalyticsHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Geographic Analysis</h1>
            <p className="text-muted-foreground">Analyze disaster distribution and patterns across different regions</p>
          </div>
          <AnalyticsFilters />
        </div>

        <Tabs defaultValue="distribution" className="space-y-4">
          <TabsList>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="comparison">Regional Comparison</TabsTrigger>
            <TabsTrigger value="severity">Regional Severity</TabsTrigger>
            <TabsTrigger value="timeline">Regional Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="distribution" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Global Disaster Distribution</CardTitle>
                <CardDescription>Geographic distribution of disasters worldwide</CardDescription>
              </CardHeader>
              <CardContent className="h-[600px]">
                <RegionalDistributionMap data={analyticsData.regionalDistribution} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Distribution by Continent</CardTitle>
                  <CardDescription>Disaster distribution across continents</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <RegionalComparisonChart data={analyticsData.continentalDistribution} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top 10 Countries</CardTitle>
                  <CardDescription>Countries with highest disaster occurrences</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <RegionalComparisonChart data={analyticsData.topCountries} horizontal={true} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Regional Disaster Comparison</CardTitle>
                <CardDescription>Compare disaster types across different regions</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <RegionalComparisonChart data={analyticsData.regionalTypeComparison} stacked={true} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Urban vs. Rural Distribution</CardTitle>
                  <CardDescription>Disaster distribution in urban and rural areas</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <RegionalComparisonChart data={analyticsData.urbanRuralComparison} grouped={true} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Coastal vs. Inland Distribution</CardTitle>
                  <CardDescription>Disaster distribution in coastal and inland regions</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <RegionalComparisonChart data={analyticsData.coastalInlandComparison} grouped={true} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="severity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Regional Severity Analysis</CardTitle>
                <CardDescription>Disaster severity across different regions</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <RegionalSeverityChart data={analyticsData.regionalSeverity} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Severity by Continent</CardTitle>
                  <CardDescription>Average disaster severity by continent</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <RegionalSeverityChart data={analyticsData.continentalSeverity} type="radar" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Severity Trends by Region</CardTitle>
                  <CardDescription>How severity has changed over time in different regions</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <RegionalSeverityChart data={analyticsData.regionalSeverityTrends} type="line" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Regional Disaster Timeline</CardTitle>
                <CardDescription>Disaster occurrences over time by region</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <RegionalTimelineChart data={analyticsData.regionalTimeline} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>North America Timeline</CardTitle>
                  <CardDescription>Disaster timeline for North America</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <RegionalTimelineChart data={analyticsData.northAmericaTimeline} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Europe Timeline</CardTitle>
                  <CardDescription>Disaster timeline for Europe</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <RegionalTimelineChart data={analyticsData.europeTimeline} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Asia Timeline</CardTitle>
                  <CardDescription>Disaster timeline for Asia</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <RegionalTimelineChart data={analyticsData.asiaTimeline} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
