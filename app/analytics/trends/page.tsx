import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnalyticsHeader from "@/components/analytics/analytics-header"
import AnalyticsFilters from "@/components/analytics/analytics-filters"
import DisasterTrendChart from "@/components/analytics/disaster-trend-chart"
import DisasterForecastChart from "@/components/analytics/disaster-forecast-chart"
import DisasterSeasonalityChart from "@/components/analytics/disaster-seasonality-chart"
import DisasterYearlyComparisonChart from "@/components/analytics/disaster-yearly-comparison-chart"
import { getAnalyticsData } from "@/lib/analytics"

export const metadata: Metadata = {
  title: "Trend Analysis | DisasterTrack Analytics",
  description: "Detailed trend analysis and forecasting for global disasters",
}

export default async function TrendsPage() {
  const analyticsData = await getAnalyticsData()

  return (
    <div className="flex min-h-screen flex-col">
      <AnalyticsHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Trend Analysis</h1>
            <p className="text-muted-foreground">Analyze disaster trends, patterns, and forecasts over time</p>
          </div>
          <AnalyticsFilters />
        </div>

        <Tabs defaultValue="historical" className="space-y-4">
          <TabsList>
            <TabsTrigger value="historical">Historical Trends</TabsTrigger>
            <TabsTrigger value="forecast">Forecasting</TabsTrigger>
            <TabsTrigger value="seasonality">Seasonality</TabsTrigger>
            <TabsTrigger value="comparison">Year-over-Year</TabsTrigger>
          </TabsList>

          <TabsContent value="historical" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Historical Disaster Trends</CardTitle>
                <CardDescription>Monthly disaster occurrences over the past 5 years</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <DisasterTrendChart data={analyticsData.trends} extended={true} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Trend Analysis by Disaster Type</CardTitle>
                  <CardDescription>Comparing trends across different disaster categories</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <DisasterTrendChart data={analyticsData.trendsByType} stacked={true} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Severity Trends</CardTitle>
                  <CardDescription>Average disaster severity over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <DisasterTrendChart data={analyticsData.severityTrends} type="line" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="forecast" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Disaster Forecast</CardTitle>
                <CardDescription>Predicted disaster occurrences for the next 12 months</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <DisasterForecastChart data={analyticsData.forecast} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Forecast by Disaster Type</CardTitle>
                  <CardDescription>Type-specific disaster predictions</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <DisasterForecastChart data={analyticsData.forecastByType} stacked={true} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Confidence Intervals</CardTitle>
                  <CardDescription>Forecast reliability and confidence ranges</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <DisasterForecastChart data={analyticsData.forecastConfidence} showConfidence={true} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="seasonality" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Disaster Seasonality</CardTitle>
                <CardDescription>Monthly patterns and seasonal variations</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <DisasterSeasonalityChart data={analyticsData.seasonality} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Earthquake Seasonality</CardTitle>
                  <CardDescription>Monthly earthquake patterns</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <DisasterSeasonalityChart data={analyticsData.earthquakeSeasonality} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Flood Seasonality</CardTitle>
                  <CardDescription>Monthly flood patterns</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <DisasterSeasonalityChart data={analyticsData.floodSeasonality} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Wildfire Seasonality</CardTitle>
                  <CardDescription>Monthly wildfire patterns</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <DisasterSeasonalityChart data={analyticsData.wildfireSeasonality} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Year-over-Year Comparison</CardTitle>
                <CardDescription>Compare disaster patterns across different years</CardDescription>
              </CardHeader>
              <CardContent className="h-[500px]">
                <DisasterYearlyComparisonChart data={analyticsData.yearlyComparison} />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Severity Comparison</CardTitle>
                  <CardDescription>Year-over-year severity comparison</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <DisasterYearlyComparisonChart data={analyticsData.severityYearlyComparison} type="line" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Regional Comparison</CardTitle>
                  <CardDescription>Year-over-year comparison by region</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <DisasterYearlyComparisonChart data={analyticsData.regionalYearlyComparison} stacked={true} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
