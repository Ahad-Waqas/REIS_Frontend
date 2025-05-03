"use client"

import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface TopAffectedRegionsProps {
  data: any[]
}

export default function TopAffectedRegions({ data }: TopAffectedRegionsProps) {
  // Define chart configuration
  const config: Record<string, any> = {
    value: {
      label: "Disasters",
      color: "hsl(var(--chart-1))",
    },
  }

  return (
    <ChartContainer config={config} className="w-full h-full">
      <BarChart data={data} layout="vertical">
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" width={100} tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`hsl(${220 - index * 25}, 70%, 60%)`} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
