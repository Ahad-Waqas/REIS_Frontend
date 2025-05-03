"use client"

import { Bar, BarChart, Scatter, ScatterChart, ZAxis, XAxis, YAxis, Legend, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface SeverityCorrelationChartProps {
  data: any[]
  type?: "bar" | "scatter"
}

export default function SeverityCorrelationChart({ data, type = "bar" }: SeverityCorrelationChartProps) {
  // Define chart configuration based on the data structure
  const config: Record<string, any> = {}

  if (data && data.length > 0) {
    if (type === "scatter") {
      config.severity = {
        label: "Severity",
        color: "hsl(var(--chart-1))",
      }
    } else {
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
  }

  return (
    <ChartContainer config={config} className="w-full h-full">
      {type === "scatter" ? (
        <ScatterChart>
          <XAxis dataKey="x" name="Factor" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <YAxis dataKey="y" name="Severity" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <ZAxis dataKey="z" range={[50, 400]} name="Value" />
          <CartesianGrid strokeDasharray="3 3" />
          <ChartTooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />

          <Scatter name="Severity Correlation" data={data} fill="var(--color-severity)" />
        </ScatterChart>
      ) : (
        <BarChart data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />

          {Object.keys(config).map((key) => (
            <Bar key={key} dataKey={key} fill={`var(--color-${key})`} radius={[4, 4, 0, 0]} />
          ))}
        </BarChart>
      )}
    </ChartContainer>
  )
}
