"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Filter } from "lucide-react"
import { format } from "date-fns"

export default function AnalyticsFilters() {
  const [date, setDate] = useState<Date>()
  const [disasterType, setDisasterType] = useState<string>("all")
  const [region, setRegion] = useState<string>("global")
  const [timeRange, setTimeRange] = useState<string>("1y")

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select value={disasterType} onValueChange={setDisasterType}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Disaster Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="earthquake">Earthquakes</SelectItem>
          <SelectItem value="flood">Floods</SelectItem>
          <SelectItem value="wildfire">Wildfires</SelectItem>
        </SelectContent>
      </Select>

      <Select value={region} onValueChange={setRegion}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="global">Global</SelectItem>
          <SelectItem value="north_america">North America</SelectItem>
          <SelectItem value="europe">Europe</SelectItem>
          <SelectItem value="asia">Asia</SelectItem>
          <SelectItem value="africa">Africa</SelectItem>
          <SelectItem value="south_america">South America</SelectItem>
          <SelectItem value="oceania">Oceania</SelectItem>
        </SelectContent>
      </Select>

      <Select value={timeRange} onValueChange={setTimeRange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Time Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1m">Last Month</SelectItem>
          <SelectItem value="3m">Last 3 Months</SelectItem>
          <SelectItem value="6m">Last 6 Months</SelectItem>
          <SelectItem value="1y">Last Year</SelectItem>
          <SelectItem value="5y">Last 5 Years</SelectItem>
          <SelectItem value="all">All Time</SelectItem>
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className="w-[140px] justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>

      <Button size="sm">
        <Filter className="mr-2 h-4 w-4" />
        Apply Filters
      </Button>
    </div>
  )
}
