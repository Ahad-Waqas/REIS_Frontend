"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Activity, AlertTriangle, Droplets, Flame } from "lucide-react"

interface AnalyticsSummaryProps {
  data: any
}

export default function AnalyticsSummary({ data }: AnalyticsSummaryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Disasters</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalDisasters}</div>
          <p className="text-xs text-muted-foreground">
            {data.disasterTrend > 0 ? (
              <span className="text-green-600 flex items-center">
                <ArrowUp className="mr-1 h-4 w-4" />
                {data.disasterTrend}% from previous period
              </span>
            ) : (
              <span className="text-red-600 flex items-center">
                <ArrowDown className="mr-1 h-4 w-4" />
                {Math.abs(data.disasterTrend)}% from previous period
              </span>
            )}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Earthquakes</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.earthquakes}</div>
          <p className="text-xs text-muted-foreground">
            {data.earthquakeTrend > 0 ? (
              <span className="text-green-600 flex items-center">
                <ArrowUp className="mr-1 h-4 w-4" />
                {data.earthquakeTrend}% from previous period
              </span>
            ) : (
              <span className="text-red-600 flex items-center">
                <ArrowDown className="mr-1 h-4 w-4" />
                {Math.abs(data.earthquakeTrend)}% from previous period
              </span>
            )}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Floods</CardTitle>
          <Droplets className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.floods}</div>
          <p className="text-xs text-muted-foreground">
            {data.floodTrend > 0 ? (
              <span className="text-green-600 flex items-center">
                <ArrowUp className="mr-1 h-4 w-4" />
                {data.floodTrend}% from previous period
              </span>
            ) : (
              <span className="text-red-600 flex items-center">
                <ArrowDown className="mr-1 h-4 w-4" />
                {Math.abs(data.floodTrend)}% from previous period
              </span>
            )}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Wildfires</CardTitle>
          <Flame className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.wildfires}</div>
          <p className="text-xs text-muted-foreground">
            {data.wildfireTrend > 0 ? (
              <span className="text-green-600 flex items-center">
                <ArrowUp className="mr-1 h-4 w-4" />
                {data.wildfireTrend}% from previous period
              </span>
            ) : (
              <span className="text-red-600 flex items-center">
                <ArrowDown className="mr-1 h-4 w-4" />
                {Math.abs(data.wildfireTrend)}% from previous period
              </span>
            )}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
