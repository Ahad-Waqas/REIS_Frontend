import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileDown, FileSpreadsheet, FileIcon as FilePdf, FileJson } from "lucide-react"
import AnalyticsHeader from "@/components/analytics/analytics-header"

export const metadata = {
  title: "Export Data | DisasterTrack Analytics",
  description: "Export disaster analytics data in various formats",
}

export default function ExportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnalyticsHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/analytics">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold tracking-tight">Export Analytics Data</h1>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Data</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="geographic">Geographic</TabsTrigger>
            <TabsTrigger value="severity">Severity</TabsTrigger>
            <TabsTrigger value="custom">Custom Export</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Export Complete Dataset</CardTitle>
                <CardDescription>Download all disaster analytics data in your preferred format</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button className="flex items-center gap-2 h-auto py-4 flex-col">
                    <FileSpreadsheet className="h-12 w-12" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Excel Format</h3>
                      <p className="text-xs text-muted-foreground">Download as .xlsx</p>
                    </div>
                  </Button>
                  <Button className="flex items-center gap-2 h-auto py-4 flex-col">
                    <FileSpreadsheet className="h-12 w-12" />
                    <div className="space-y-1">
                      <h3 className="font-medium">CSV Format</h3>
                      <p className="text-xs text-muted-foreground">Download as .csv</p>
                    </div>
                  </Button>
                  <Button className="flex items-center gap-2 h-auto py-4 flex-col">
                    <FilePdf className="h-12 w-12" />
                    <div className="space-y-1">
                      <h3 className="font-medium">PDF Report</h3>
                      <p className="text-xs text-muted-foreground">Download as .pdf</p>
                    </div>
                  </Button>
                  <Button className="flex items-center gap-2 h-auto py-4 flex-col">
                    <FileJson className="h-12 w-12" />
                    <div className="space-y-1">
                      <h3 className="font-medium">JSON Format</h3>
                      <p className="text-xs text-muted-foreground">Download as .json</p>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Export Trend Analysis Data</CardTitle>
                <CardDescription>Download trend-specific analytics data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Historical Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Monthly disaster occurrences over the past 5 years
                      </p>
                      <Button className="w-full flex items-center gap-2">
                        <FileDown className="h-4 w-4" />
                        Download Data
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Forecast Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Predicted disaster occurrences for the next 12 months
                      </p>
                      <Button className="w-full flex items-center gap-2">
                        <FileDown className="h-4 w-4" />
                        Download Data
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Seasonality Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">Monthly patterns and seasonal variations</p>
                      <Button className="w-full flex items-center gap-2">
                        <FileDown className="h-4 w-4" />
                        Download Data
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geographic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Export Geographic Data</CardTitle>
                <CardDescription>Download region-specific analytics data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Regional Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Geographic distribution of disasters worldwide
                      </p>
                      <div className="flex gap-2">
                        <Button className="flex-1 flex items-center gap-2">
                          <FileDown className="h-4 w-4" />
                          CSV
                        </Button>
                        <Button className="flex-1 flex items-center gap-2">
                          <FileDown className="h-4 w-4" />
                          GeoJSON
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Regional Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Compare disaster types across different regions
                      </p>
                      <Button className="w-full flex items-center gap-2">
                        <FileDown className="h-4 w-4" />
                        Download Data
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="severity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Export Severity Data</CardTitle>
                <CardDescription>Download severity-specific analytics data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Severity Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">Distribution of disaster severity levels</p>
                      <Button className="w-full flex items-center gap-2">
                        <FileDown className="h-4 w-4" />
                        Download Data
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Severity Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">How disaster severity has changed over time</p>
                      <Button className="w-full flex items-center gap-2">
                        <FileDown className="h-4 w-4" />
                        Download Data
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Severity Correlations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">Factors correlated with disaster severity</p>
                      <Button className="w-full flex items-center gap-2">
                        <FileDown className="h-4 w-4" />
                        Download Data
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Data Export</CardTitle>
                <CardDescription>Create a customized export with specific data points</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col h-full">
                  <p className="text-sm text-muted-foreground mb-4">
                    Select parameters to create a custom data export. Choose disaster types, regions, time periods, and
                    metrics to include.
                  </p>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-muted-foreground">Custom export tool will be available soon.</p>
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
