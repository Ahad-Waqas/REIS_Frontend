"use client"

import { Bar, BarChart, XAxis, YAxis, Legend, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface RegionalComparisonChartProps {
  data: any[]
  stacked?: boolean
  grouped?: boolean
  horizontal?: boolean
}

export default function RegionalComparisonChart({
  data,
  stacked = false,
  grouped = false,
  horizontal = false,
}: RegionalComparisonChartProps) {
  // Define chart configuration based on the data structure
  const config: Record<string, any> = {}

  if (data && data.length > 0) {
    // Extract keys from the first data item, excluding 'name' or 'region'
    const keys = Object.keys(data[0]).filter((key) => key !== "name" && key !== "region")

    // Generate configuration for each key
    keys.forEach((key, index) => {
      config[key] = {
        label: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
        color: `hsl(var(--chart-${(index % 9) + 1}))`,
      }
    })
  }

  return (
    <ChartContainer config={config} className="w-full h-full">
      <BarChart data={data} layout={horizontal ? "vertical" : "horizontal"}>
        {horizontal ? (
          <>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={100} tickLine={false} axisLine={false} />
          </>
        ) : (
          <>
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          </>
        )}

        <CartesianGrid strokeDasharray="3 3" vertical={!horizontal} horizontal={horizontal} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />

        {Object.keys(config).map((key) => (
          <Bar
            key={key}
            dataKey={key}
            fill={`var(--color-${key})`}
            stackId={stacked ? "stack" : grouped ? key : undefined}
            radius={horizontal ? [0, 4, 4, 0] : [4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ChartContainer>
  )
}
