import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnalyticsHeader from "@/components/analytics/analytics-header"
import AnalyticsFilters from "@/components/analytics/analytics-filters"
import SeverityDistributionChart from "@/components/analytics/severity-distribution-chart"
import SeverityTrendChart from "@/components/analytics/severity-trend-chart"
import SeverityComparisonChart from "@/components/analytics/severity-comparison-chart"
import SeverityCorrelationChart from "@/components/analytics/severity-correlation-chart"
import { getAnalyticsData } from "@/lib/analytics"

export const metadata: Metadata = {
  title: "Severity Analysis | DisasterTrack Analytics",
  description: "Detailed analysis of disaster severity patterns and trends",
}

export default async function SeverityPage() {
  const analyticsData = await getAnalyticsData()

  return (
    <div className="flex min-h-screen flex-col">
      <AnalyticsHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Severity Analysis</h1>
            <p className="text-muted-foreground">Analyze disaster severity patterns, trends, and correlations</p>
          </div>
          <AnalyticsFilters />
        </div>

        <Tabs defaultValue="distribution" className="space-y-4">
          <TabsList>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
            <TabsTrigger value="correlation">Correlation</TabsTrigger>
          </TabsList>

          <TabsContent value="distribution" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Severity Distribution</CardTitle>
                <CardDescription>Distribution of disaster severity levels</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <SeverityDistributionChart data={analyticsData.severityDistribution} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Earthquake Severity</CardTitle>
                  <CardDescription>Severity distribution for earthquakes</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <SeverityDistributionChart data={analyticsData.earthquakeSeverity} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Flood Severity</CardTitle>
                  <CardDescription>Severity distribution for floods</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <SeverityDistributionChart data={analyticsData.floodSeverity} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Wildfire Severity</CardTitle>
                  <CardDescription>Severity distribution for wildfires</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <SeverityDistributionChart data={analyticsData.wildfireSeverity} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Severity Trends</CardTitle>
                <CardDescription>How disaster severity has changed over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <SeverityTrendChart data={analyticsData.severityTrends} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Average Severity by Year</CardTitle>
                  <CardDescription>Yearly average severity trends</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <SeverityTrendChart data={analyticsData.yearlySeverity} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Maximum Severity by Year</CardTitle>
                  <CardDescription>Yearly maximum severity trends</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <SeverityTrendChart data={analyticsData.yearlyMaxSeverity} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Severity Comparison by Type</CardTitle>
                <CardDescription>Compare severity across different disaster types</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <SeverityComparisonChart data={analyticsData.severityByType} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Severity by Region</CardTitle>
                  <CardDescription>Compare severity across different regions</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <SeverityComparisonChart data={analyticsData.severityByRegion} horizontal={true} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Severity by Season</CardTitle>
                  <CardDescription>Compare severity across different seasons</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <SeverityComparisonChart data={analyticsData.severityBySeason} type="radar" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="correlation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Severity Correlations</CardTitle>
                <CardDescription>Factors correlated with disaster severity</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <SeverityCorrelationChart data={analyticsData.severityCorrelations} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Severity vs. Population Density</CardTitle>
                  <CardDescription>Correlation between severity and population density</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <SeverityCorrelationChart data={analyticsData.severityVsPopulation} type="scatter" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Severity vs. Economic Factors</CardTitle>
                  <CardDescription>Correlation between severity and economic indicators</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <SeverityCorrelationChart data={analyticsData.severityVsEconomic} type="scatter" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
