"use client"

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface ComparisonChartProps {
  data: any[]
  type?: "bar" | "line" | "radar"
  stacked?: boolean
  grouped?: boolean
}

export default function ComparisonChart({
  data,
  type = "bar",
  stacked = false,
  grouped = false,
}: ComparisonChartProps) {
  // Define chart configuration based on the data structure
  const config: Record<string, any> = {}

  if (data && data.length > 0) {
    // Extract keys from the first data item, excluding 'name'
    const keys = Object.keys(data[0]).filter((key) => key !== "name")

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
      {type === "bar" && (
        <BarChart data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />

          {Object.keys(config).map((key) => (
            <Bar
              key={key}
              dataKey={key}
              fill={`var(--color-${key})`}
              stackId={stacked ? "stack" : grouped ? key : undefined}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      )}

      {type === "line" && (
        <LineChart data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <CartesianGrid strokeDasharray="3 3" />
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
      )}

      {type === "radar" && (
        <RadarChart data={data} outerRadius="80%">
          <PolarGrid />
          <PolarAngleAxis dataKey="name" tick={{ fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, "auto"]} />
          <ChartTooltip content={<ChartTooltipContent />} />

          {Object.keys(config).map((key) => (
            <Radar
              key={key}
              name={config[key].label}
              dataKey={key}
              stroke={`var(--color-${key})`}
              fill={`var(--color-${key})`}
              fillOpacity={0.6}
            />
          ))}

          <Legend />
        </RadarChart>
      )}
    </ChartContainer>
  )
}
