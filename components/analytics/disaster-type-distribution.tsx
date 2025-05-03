"use client"

import { Cell, Pie, PieChart, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DisasterTypeDistributionProps {
  data: any[]
}

export default function DisasterTypeDistribution({ data }: DisasterTypeDistributionProps) {
  // Define chart configuration
  const config: Record<string, any> = {
    earthquake: {
      label: "Earthquakes",
      color: "hsl(var(--chart-1))",
    },
    flood: {
      label: "Floods",
      color: "hsl(var(--chart-2))",
    },
    wildfire: {
      label: "Wildfires",
      color: "hsl(var(--chart-3))",
    },
  }

  return (
    <ChartContainer config={config} className="w-full h-full">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={40}
          paddingAngle={2}
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`var(--color-${entry.id})`} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
      </PieChart>
    </ChartContainer>
  )
}
