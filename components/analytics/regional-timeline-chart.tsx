"use client"

import { Line, LineChart, XAxis, YAxis, Legend, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface RegionalTimelineChartProps {
  data: any[]
}

export default function RegionalTimelineChart({ data }: RegionalTimelineChartProps) {
  // Define chart configuration based on the data structure
  const config: Record<string, any> = {}

  if (data && data.length > 0) {
    // Extract keys from the first data item, excluding 'name' or 'date'
    const keys = Object.keys(data[0]).filter((key) => key !== "name" && key !== "date")

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
      <LineChart data={data}>
        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />

        {Object.keys(config).map((key) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={`var(--color-${key})`}
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        ))}
      </LineChart>
    </ChartContainer>
  )
}
