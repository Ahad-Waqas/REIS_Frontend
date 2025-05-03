"use client"

import { Area, AreaChart, Line, LineChart, XAxis, YAxis, Legend, CartesianGrid, ReferenceLine } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DisasterForecastChartProps {
  data: any[]
  stacked?: boolean
  showConfidence?: boolean
}

export default function DisasterForecastChart({
  data,
  stacked = false,
  showConfidence = false,
}: DisasterForecastChartProps) {
  // Define chart configuration based on the data structure
  const config: Record<string, any> = {}

  if (data && data.length > 0) {
    // Extract keys from the first data item, excluding 'name' or 'date'
    const keys = Object.keys(data[0]).filter(
      (key) => key !== "name" && key !== "date" && !key.includes("_lower") && !key.includes("_upper"),
    )

    // Generate configuration for each key
    keys.forEach((key, index) => {
      config[key] = {
        label: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
        color: `hsl(var(--chart-${(index % 9) + 1}))`,
      }

      if (showConfidence) {
        config[`${key}_lower`] = {
          label: `${key} (Lower Bound)`,
          color: `hsl(var(--chart-${(index % 9) + 1}), 0.3)`,
        }

        config[`${key}_upper`] = {
          label: `${key} (Upper Bound)`,
          color: `hsl(var(--chart-${(index % 9) + 1}), 0.3)`,
        }
      }
    })
  }

  // Find the index where forecast begins
  const forecastStartIndex = data.findIndex((item) => item.forecast === true)

  return (
    <ChartContainer config={config} className="w-full h-full">
      {showConfidence ? (
        <AreaChart data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />

          {forecastStartIndex > 0 && (
            <ReferenceLine
              x={data[forecastStartIndex].name}
              stroke="#888"
              strokeDasharray="3 3"
              label={{ value: "Forecast Start", position: "top", fill: "#888" }}
            />
          )}

          {Object.keys(config)
            .filter((key) => !key.includes("_lower") && !key.includes("_upper"))
            .map((key) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stroke={`var(--color-${key})`}
                fill={`var(--color-${key})`}
                fillOpacity={0.5}
                stackId={stacked ? "stack" : undefined}
              />
            ))}

          {Object.keys(config)
            .filter((key) => key.includes("_lower"))
            .map((key) => {
              const mainKey = key.replace("_lower", "")
              return (
                <Area
                  key={`${mainKey}-confidence`}
                  type="monotone"
                  dataKey={mainKey}
                  stroke={`var(--color-${mainKey})`}
                  strokeWidth={2}
                  fill={`var(--color-${mainKey})`}
                  fillOpacity={0.3}
                  activeDot={{ r: 6 }}
                />
              )
            })}

          {Object.keys(config)
            .filter((key) => key.includes("_lower"))
            .map((key) => {
              const mainKey = key.replace("_lower", "")
              return (
                <Area
                  key={`${mainKey}-range`}
                  type="monotone"
                  dataKey={`${mainKey}_upper`}
                  stroke="transparent"
                  fill={`var(--color-${mainKey})`}
                  fillOpacity={0.1}
                  activeDot={false}
                />
              )
            })}
        </AreaChart>
      ) : (
        <LineChart data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickMargin={8} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />

          {forecastStartIndex > 0 && (
            <ReferenceLine
              x={data[forecastStartIndex].name}
              stroke="#888"
              strokeDasharray="3 3"
              label={{ value: "Forecast Start", position: "top", fill: "#888" }}
            />
          )}

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
    </ChartContainer>
  )
}
