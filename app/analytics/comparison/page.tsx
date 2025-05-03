import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnalyticsHeader from "@/components/analytics/analytics-header"
import AnalyticsFilters from "@/components/analytics/analytics-filters"
import ComparisonChart from "@/components/analytics/comparison-chart"
import { getAnalyticsData } from "@/lib/analytics"

export const metadata: Metadata = {
  title: "Comparative Analysis | DisasterTrack Analytics",
  description: "Compare different disaster types, regions, and time periods",
}

export default async function ComparisonPage() {
  const analyticsData = await getAnalyticsData()

  return (
    <div className="flex min-h-screen flex-col">
      <AnalyticsHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Comparative Analysis</h1>
            <p className="text-muted-foreground">Compare different disaster types, regions, and time periods</p>
          </div>
          <AnalyticsFilters />
        </div>

        <Tabs defaultValue="types" className="space-y-4">
          <TabsList>
            <TabsTrigger value="types">Disaster Types</TabsTrigger>
            <TabsTrigger value="regions">Regions</TabsTrigger>
            <TabsTrigger value="time">Time Periods</TabsTrigger>
            <TabsTrigger value="custom">Custom Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="types" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Disaster Type Comparison</CardTitle>
                <CardDescription>Compare frequency, severity, and impact across disaster types</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <ComparisonChart data={analyticsData.typeComparison} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Frequency Comparison</CardTitle>
                  <CardDescription>Compare occurrence frequency by disaster type</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ComparisonChart data={analyticsData.typeFrequencyComparison} type="bar" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Severity Comparison</CardTitle>
                  <CardDescription>Compare average severity by disaster type</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ComparisonChart data={analyticsData.typeSeverityComparison} type="radar" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="regions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Regional Comparison</CardTitle>
                <CardDescription>Compare disaster patterns across different regions</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <ComparisonChart data={analyticsData.regionalComparison} type="bar" stacked={true} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Continental Comparison</CardTitle>
                  <CardDescription>Compare disaster patterns across continents</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ComparisonChart data={analyticsData.continentalComparison} type="radar" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Urban vs. Rural</CardTitle>
                  <CardDescription>Compare disaster patterns in urban and rural areas</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ComparisonChart data={analyticsData.urbanRuralComparison} type="bar" grouped={true} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="time" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Time Period Comparison</CardTitle>
                <CardDescription>Compare disaster patterns across different time periods</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <ComparisonChart data={analyticsData.timeComparison} type="line" />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Yearly Comparison</CardTitle>
                  <CardDescription>Compare disaster patterns year by year</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ComparisonChart data={analyticsData.yearlyComparison} type="bar" grouped={true} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Seasonal Comparison</CardTitle>
                  <CardDescription>Compare disaster patterns across seasons</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ComparisonChart data={analyticsData.seasonalComparison} type="radar" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Comparison Tool</CardTitle>
                <CardDescription>Build your own custom comparison analysis</CardDescription>
              </CardHeader>
              <CardContent className="h-[600px]">
                <div className="flex flex-col h-full">
                  <p className="text-sm text-muted-foreground mb-4">
                    Select parameters to create a custom comparison analysis. Choose disaster types, regions, time
                    periods, and metrics to compare.
                  </p>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-muted-foreground">Custom comparison tool will be available soon.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
