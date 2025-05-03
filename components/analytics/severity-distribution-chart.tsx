"use client"

import { Bar, BarChart, XAxis, YAxis, Legend, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface SeverityDistributionChartProps {
  data: any[]
}

export default function SeverityDistributionChart({ data }: SeverityDistributionChartProps) {
  // Define chart configuration
  const config: Record<string, any> = {
    count: {
      label: "Count",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <ChartContainer config={config} className="w-full h-full">
      <BarChart data={data}>
        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />

        <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
