// Mock data for analytics
// In a real application, this would fetch data from an API or database

export async function getAnalyticsData() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    // Summary statistics
    totalDisasters: 248,
    disasterTrend: 12.5,
    earthquakes: 87,
    earthquakeTrend: 8.2,
    floods: 103,
    floodTrend: 15.7,
    wildfires: 58,
    wildfireTrend: -5.3,

    // Distribution by type
    byType: [
      { name: "Earthquakes", value: 87, id: "earthquake" },
      { name: "Floods", value: 103, id: "flood" },
      { name: "Wildfires", value: 58, id: "wildfire" },
    ],

    // Top affected regions
    topRegions: [
      { name: "Southeast Asia", value: 42 },
      { name: "Western North America", value: 38 },
      { name: "Central America", value: 31 },
      { name: "South Pacific", value: 27 },
      { name: "Mediterranean", value: 24 },
      { name: "East Africa", value: 19 },
      { name: "Caribbean", value: 17 },
    ],

    // Severity matrix (heatmap data)
    severityMatrix: [
      {
        type: "Earthquake",
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        values: [5.2, 4.8, 6.1, 7.3, 5.9, 4.5, 3.8, 4.2, 6.7, 5.5, 4.9, 5.3],
      },
      {
        type: "Flood",
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        values: [3.1, 3.5, 4.2, 5.8, 7.2, 8.1, 7.9, 8.3, 6.5, 5.2, 4.1, 3.3],
      },
      {
        type: "Wildfire",
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        values: [2.1, 2.5, 3.2, 4.7, 6.3, 7.8, 8.9, 9.2, 7.5, 5.1, 3.2, 2.4],
      },
    ],

    // Trend data
    trends: [
      { name: "Jan", disasters: 18 },
      { name: "Feb", disasters: 15 },
      { name: "Mar", disasters: 19 },
      { name: "Apr", disasters: 23 },
      { name: "May", disasters: 28 },
      { name: "Jun", disasters: 32 },
      { name: "Jul", disasters: 35 },
      { name: "Aug", disasters: 37 },
      { name: "Sep", disasters: 30 },
      { name: "Oct", disasters: 25 },
      { name: "Nov", disasters: 20 },
      { name: "Dec", disasters: 17 },
    ],

    // Trend data by type
    trendsByType: [
      { name: "Jan", earthquake: 7, flood: 8, wildfire: 3 },
      { name: "Feb", earthquake: 6, flood: 7, wildfire: 2 },
      { name: "Mar", earthquake: 8, flood: 8, wildfire: 3 },
      { name: "Apr", earthquake: 9, flood: 10, wildfire: 4 },
      { name: "May", earthquake: 8, flood: 12, wildfire: 8 },
      { name: "Jun", earthquake: 7, flood: 14, wildfire: 11 },
      { name: "Jul", earthquake: 6, flood: 15, wildfire: 14 },
      { name: "Aug", earthquake: 7, flood: 16, wildfire: 14 },
      { name: "Sep", earthquake: 9, flood: 13, wildfire: 8 },
      { name: "Oct", earthquake: 8, flood: 11, wildfire: 6 },
      { name: "Nov", earthquake: 7, flood: 9, wildfire: 4 },
      { name: "Dec", earthquake: 8, flood: 7, wildfire: 2 },
    ],

    // Severity trends
    severityTrends: [
      { name: "Jan", severity: 5.2 },
      { name: "Feb", severity: 4.9 },
      { name: "Mar", severity: 5.3 },
      { name: "Apr", severity: 5.8 },
      { name: "May", severity: 6.2 },
      { name: "Jun", severity: 6.5 },
      { name: "Jul", severity: 6.8 },
      { name: "Aug", severity: 7.1 },
      { name: "Sep", severity: 6.7 },
      { name: "Oct", severity: 6.1 },
      { name: "Nov", severity: 5.6 },
      { name: "Dec", severity: 5.3 },
    ],

    // Forecast data
    forecast: [
      { name: "Jan", disasters: 18, forecast: false },
      { name: "Feb", disasters: 15, forecast: false },
      { name: "Mar", disasters: 19, forecast: false },
      { name: "Apr", disasters: 23, forecast: false },
      { name: "May", disasters: 28, forecast: false },
      { name: "Jun", disasters: 32, forecast: false },
      { name: "Jul", disasters: 35, forecast: false },
      { name: "Aug", disasters: 37, forecast: false },
      { name: "Sep", disasters: 30, forecast: false },
      { name: "Oct", disasters: 25, forecast: false },
      { name: "Nov", disasters: 20, forecast: false },
      { name: "Dec", disasters: 17, forecast: false },
      { name: "Jan", disasters: 19, forecast: true },
      { name: "Feb", disasters: 16, forecast: true },
      { name: "Mar", disasters: 20, forecast: true },
      { name: "Apr", disasters: 25, forecast: true },
      { name: "May", disasters: 30, forecast: true },
      { name: "Jun", disasters: 34, forecast: true },
    ],

    // Forecast by type
    forecastByType: [
      { name: "Jan", earthquake: 7, flood: 8, wildfire: 3, forecast: false },
      { name: "Feb", earthquake: 6, flood: 7, wildfire: 2, forecast: false },
      { name: "Mar", earthquake: 8, flood: 8, wildfire: 3, forecast: false },
      { name: "Apr", earthquake: 9, flood: 10, wildfire: 4, forecast: false },
      { name: "May", earthquake: 8, flood: 12, wildfire: 8, forecast: false },
      { name: "Jun", earthquake: 7, flood: 14, wildfire: 11, forecast: false },
      { name: "Jul", earthquake: 6, flood: 15, wildfire: 14, forecast: true },
      { name: "Aug", earthquake: 7, flood: 16, wildfire: 14, forecast: true },
      { name: "Sep", earthquake: 9, flood: 13, wildfire: 8, forecast: true },
      { name: "Oct", earthquake: 8, flood: 11, wildfire: 6, forecast: true },
      { name: "Nov", earthquake: 7, flood: 9, wildfire: 4, forecast: true },
      { name: "Dec", earthquake: 8, flood: 7, wildfire: 2, forecast: true },
    ],

    // Forecast with confidence intervals
    forecastConfidence: [
      { name: "Jan", disasters: 18, disasters_lower: 18, disasters_upper: 18, forecast: false },
      { name: "Feb", disasters: 15, disasters_lower: 15, disasters_upper: 15, forecast: false },
      { name: "Mar", disasters: 19, disasters_lower: 19, disasters_upper: 19, forecast: false },
      { name: "Apr", disasters: 23, disasters_lower: 23, disasters_upper: 23, forecast: false },
      { name: "May", disasters: 28, disasters_lower: 28, disasters_upper: 28, forecast: false },
      { name: "Jun", disasters: 32, disasters_lower: 32, disasters_upper: 32, forecast: false },
      { name: "Jul", disasters: 35, disasters_lower: 33, disasters_upper: 37, forecast: true },
      { name: "Aug", disasters: 37, disasters_lower: 34, disasters_upper: 40, forecast: true },
      { name: "Sep", disasters: 30, disasters_lower: 27, disasters_upper: 33, forecast: true },
      { name: "Oct", disasters: 25, disasters_lower: 22, disasters_upper: 28, forecast: true },
      { name: "Nov", disasters: 20, disasters_lower: 17, disasters_upper: 23, forecast: true },
      { name: "Dec", disasters: 17, disasters_lower: 14, disasters_upper: 20, forecast: true },
    ],

    // Seasonality data
    seasonality: [
      { name: "Jan", value: 18 },
      { name: "Feb", value: 15 },
      { name: "Mar", value: 19 },
      { name: "Apr", value: 23 },
      { name: "May", value: 28 },
      { name: "Jun", value: 32 },
      { name: "Jul", value: 35 },
      { name: "Aug", value: 37 },
      { name: "Sep", value: 30 },
      { name: "Oct", value: 25 },
      { name: "Nov", value: 20 },
      { name: "Dec", value: 17 },
    ],

    // Earthquake seasonality
    earthquakeSeasonality: [
      { name: "Jan", value: 7 },
      { name: "Feb", value: 6 },
      { name: "Mar", value: 8 },
      { name: "Apr", value: 9 },
      { name: "May", value: 8 },
      { name: "Jun", value: 7 },
      { name: "Jul", value: 6 },
      { name: "Aug", value: 7 },
      { name: "Sep", value: 9 },
      { name: "Oct", value: 8 },
      { name: "Nov", value: 7 },
      { name: "Dec", value: 8 },
    ],

    // Flood seasonality
    floodSeasonality: [
      { name: "Jan", value: 8 },
      { name: "Feb", value: 7 },
      { name: "Mar", value: 8 },
      { name: "Apr", value: 10 },
      { name: "May", value: 12 },
      { name: "Jun", value: 14 },
      { name: "Jul", value: 15 },
      { name: "Aug", value: 16 },
      { name: "Sep", value: 13 },
      { name: "Oct", value: 11 },
      { name: "Nov", value: 9 },
      { name: "Dec", value: 7 },
    ],

    // Wildfire seasonality
    wildfireSeasonality: [
      { name: "Jan", value: 3 },
      { name: "Feb", value: 2 },
      { name: "Mar", value: 3 },
      { name: "Apr", value: 4 },
      { name: "May", value: 8 },
      { name: "Jun", value: 11 },
      { name: "Jul", value: 14 },
      { name: "Aug", value: 14 },
      { name: "Sep", value: 8 },
      { name: "Oct", value: 6 },
      { name: "Nov", value: 4 },
      { name: "Dec", value: 2 },
    ],

    // Year-over-year comparison
    yearlyComparison: [
      { name: "Jan", "2022": 15, "2023": 17, "2024": 18 },
      { name: "Feb", "2022": 13, "2023": 14, "2024": 15 },
      { name: "Mar", "2022": 16, "2023": 18, "2024": 19 },
      { name: "Apr", "2022": 19, "2023": 21, "2024": 23 },
      { name: "May", "2022": 24, "2023": 26, "2024": 28 },
      { name: "Jun", "2022": 28, "2023": 30, "2024": 32 },
      { name: "Jul", "2022": 31, "2023": 33, "2024": 35 },
      { name: "Aug", "2022": 33, "2023": 35, "2024": 37 },
      { name: "Sep", "2022": 27, "2023": 28, "2024": 30 },
      { name: "Oct", "2022": 22, "2023": 24, "2024": 25 },
      { name: "Nov", "2022": 18, "2023": 19, "2024": 20 },
      { name: "Dec", "2022": 15, "2023": 16, "2024": 17 },
    ],

    // Severity year-over-year comparison
    severityYearlyComparison: [
      { name: "Jan", "2022": 4.8, "2023": 5.0, "2024": 5.2 },
      { name: "Feb", "2022": 4.5, "2023": 4.7, "2024": 4.9 },
      { name: "Mar", "2022": 4.9, "2023": 5.1, "2024": 5.3 },
      { name: "Apr", "2022": 5.4, "2023": 5.6, "2024": 5.8 },
      { name: "May", "2022": 5.8, "2023": 6.0, "2024": 6.2 },
      { name: "Jun", "2022": 6.1, "2023": 6.3, "2024": 6.5 },
      { name: "Jul", "2022": 6.4, "2023": 6.6, "2024": 6.8 },
      { name: "Aug", "2022": 6.7, "2023": 6.9, "2024": 7.1 },
      { name: "Sep", "2022": 6.3, "2023": 6.5, "2024": 6.7 },
      { name: "Oct", "2022": 5.7, "2023": 5.9, "2024": 6.1 },
      { name: "Nov", "2022": 5.2, "2023": 5.4, "2024": 5.6 },
      { name: "Dec", "2022": 4.9, "2023": 5.1, "2024": 5.3 },
    ],

    // Regional year-over-year comparison
    regionalYearlyComparison: [
      { name: "North America", "2022": 45, "2023": 48, "2024": 52 },
      { name: "South America", "2022": 32, "2023": 35, "2024": 38 },
      { name: "Europe", "2022": 28, "2023": 30, "2024": 33 },
      { name: "Asia", "2022": 65, "2023": 70, "2024": 75 },
      { name: "Africa", "2022": 40, "2023": 42, "2024": 45 },
      { name: "Oceania", "2022": 25, "2023": 27, "2024": 30 },
    ],

    // Regional distribution data for map
    regionalDistribution: [
      { name: "North America", latitude: 40, longitude: -100, count: 52, dominantType: "wildfire", avgSeverity: 6.2 },
      {
        name: "Central America",
        latitude: 15,
        longitude: -90,
        count: 31,
        dominantType: "earthquake",
        avgSeverity: 5.8,
      },
      { name: "South America", latitude: -15, longitude: -60, count: 38, dominantType: "flood", avgSeverity: 5.5 },
      { name: "Western Europe", latitude: 50, longitude: 10, count: 33, dominantType: "flood", avgSeverity: 4.9 },
      { name: "Eastern Europe", latitude: 55, longitude: 30, count: 28, dominantType: "flood", avgSeverity: 5.1 },
      { name: "North Africa", latitude: 25, longitude: 10, count: 22, dominantType: "earthquake", avgSeverity: 5.3 },
      { name: "East Africa", latitude: 5, longitude: 35, count: 19, dominantType: "flood", avgSeverity: 6.1 },
      { name: "Middle East", latitude: 30, longitude: 45, count: 27, dominantType: "earthquake", avgSeverity: 6.5 },
      { name: "South Asia", latitude: 20, longitude: 75, count: 42, dominantType: "flood", avgSeverity: 7.2 },
      { name: "East Asia", latitude: 35, longitude: 105, count: 38, dominantType: "earthquake", avgSeverity: 6.8 },
      { name: "Southeast Asia", latitude: 10, longitude: 115, count: 45, dominantType: "flood", avgSeverity: 6.9 },
      { name: "Australia", latitude: -25, longitude: 135, count: 30, dominantType: "wildfire", avgSeverity: 7.5 },
      {
        name: "Pacific Islands",
        latitude: -10,
        longitude: 160,
        count: 27,
        dominantType: "earthquake",
        avgSeverity: 5.7,
      },
    ],

    // Continental distribution
    continentalDistribution: [
      { name: "North America", value: 83 },
      { name: "South America", value: 38 },
      { name: "Europe", value: 61 },
      { name: "Asia", value: 125 },
      { name: "Africa", value: 41 },
      { name: "Oceania", value: 30 },
    ],

    // Top countries
    topCountries: [
      { name: "United States", value: 45 },
      { name: "China", value: 38 },
      { name: "India", value: 35 },
      { name: "Indonesia", value: 32 },
      { name: "Japan", value: 28 },
      { name: "Philippines", value: 25 },
      { name: "Mexico", value: 22 },
      { name: "Italy", value: 18 },
      { name: "Turkey", value: 17 },
      { name: "Australia", value: 15 },
    ],

    // Regional type comparison
    regionalTypeComparison: [
      { name: "North America", earthquake: 15, flood: 20, wildfire: 17 },
      { name: "South America", earthquake: 12, flood: 18, wildfire: 8 },
      { name: "Europe", earthquake: 10, flood: 15, wildfire: 8 },
      { name: "Asia", earthquake: 35, flood: 40, wildfire: 15 },
      { name: "Africa", earthquake: 12, flood: 22, wildfire: 7 },
      { name: "Oceania", earthquake: 8, flood: 12, wildfire: 10 },
    ],

    // Urban vs. rural comparison
    urbanRuralComparison: [
      { name: "Earthquake", urban: 45, rural: 42 },
      { name: "Flood", urban: 38, rural: 65 },
      { name: "Wildfire", urban: 15, rural: 43 },
    ],

    // Coastal vs. inland comparison
    coastalInlandComparison: [
      { name: "Earthquake", coastal: 52, inland: 35 },
      { name: "Flood", coastal: 60, inland: 43 },
      { name: "Wildfire", coastal: 22, inland: 36 },
    ],

    // Regional severity
    regionalSeverity: [
      { name: "North America", severity: 6.2 },
      { name: "South America", severity: 5.5 },
      { name: "Europe", severity: 5.0 },
      { name: "Asia", severity: 6.8 },
      { name: "Africa", severity: 5.7 },
      { name: "Oceania", severity: 7.1 },
    ],

    // Continental severity
    continentalSeverity: [
      { name: "North America", earthquake: 6.5, flood: 5.8, wildfire: 7.2 },
      { name: "South America", earthquake: 6.2, flood: 5.9, wildfire: 4.8 },
      { name: "Europe", earthquake: 5.5, flood: 5.2, wildfire: 4.5 },
      { name: "Asia", earthquake: 7.1, flood: 6.8, wildfire: 5.9 },
      { name: "Africa", earthquake: 6.0, flood: 5.7, wildfire: 5.3 },
      { name: "Oceania", earthquake: 6.8, flood: 6.2, wildfire: 8.0 },
    ],

    // Regional severity trends
    regionalSeverityTrends: [
      { name: "2020", "North America": 5.8, Asia: 6.5, Europe: 4.7 },
      { name: "2021", "North America": 5.9, Asia: 6.6, Europe: 4.8 },
      { name: "2022", "North America": 6.0, Asia: 6.7, Europe: 4.9 },
      { name: "2023", "North America": 6.1, Asia: 6.8, Europe: 5.0 },
      { name: "2024", "North America": 6.2, Asia: 6.9, Europe: 5.1 },
    ],

    // Regional timeline
    regionalTimeline: [
      { name: "Jan", "North America": 8, Europe: 5, Asia: 12 },
      { name: "Feb", "North America": 7, Europe: 4, Asia: 10 },
      { name: "Mar", "North America": 8, Europe: 5, Asia: 12 },
      { name: "Apr", "North America": 9, Europe: 6, Asia: 14 },
      { name: "May", "North America": 10, Europe: 7, Asia: 16 },
      { name: "Jun", "North America": 12, Europe: 8, Asia: 18 },
      { name: "Jul", "North America": 14, Europe: 9, Asia: 20 },
      { name: "Aug", "North America": 15, Europe: 8, Asia: 22 },
      { name: "Sep", "North America": 12, Europe: 7, Asia: 18 },
      { name: "Oct", "North America": 10, Europe: 6, Asia: 15 },
      { name: "Nov", "North America": 8, Europe: 5, Asia: 12 },
      { name: "Dec", "North America": 7, Europe: 4, Asia: 10 },
    ],

    // North America timeline
    northAmericaTimeline: [
      { name: "Jan", earthquake: 3, flood: 2, wildfire: 3 },
      { name: "Feb", earthquake: 2, flood: 2, wildfire: 3 },
      { name: "Mar", earthquake: 3, flood: 2, wildfire: 3 },
      { name: "Apr", earthquake: 3, flood: 3, wildfire: 3 },
      { name: "May", earthquake: 3, flood: 3, wildfire: 4 },
      { name: "Jun", earthquake: 3, flood: 4, wildfire: 5 },
      { name: "Jul", earthquake: 3, flood: 4, wildfire: 7 },
      { name: "Aug", earthquake: 3, flood: 5, wildfire: 7 },
      { name: "Sep", earthquake: 3, flood: 4, wildfire: 5 },
      { name: "Oct", earthquake: 3, flood: 3, wildfire: 4 },
      { name: "Nov", earthquake: 3, flood: 2, wildfire: 3 },
      { name: "Dec", earthquake: 3, flood: 2, wildfire: 2 },
    ],

    // Europe timeline
    europeTimeline: [
      { name: "Jan", earthquake: 1, flood: 3, wildfire: 1 },
      { name: "Feb", earthquake: 1, flood: 2, wildfire: 1 },
      { name: "Mar", earthquake: 1, flood: 3, wildfire: 1 },
      { name: "Apr", earthquake: 2, flood: 3, wildfire: 1 },
      { name: "May", earthquake: 2, flood: 4, wildfire: 1 },
      { name: "Jun", earthquake: 2, flood: 4, wildfire: 2 },
      { name: "Jul", earthquake: 2, flood: 4, wildfire: 3 },
      { name: "Aug", earthquake: 2, flood: 3, wildfire: 3 },
      { name: "Sep", earthquake: 2, flood: 3, wildfire: 2 },
      { name: "Oct", earthquake: 1, flood: 3, wildfire: 2 },
      { name: "Nov", earthquake: 1, flood: 3, wildfire: 1 },
      { name: "Dec", earthquake: 1, flood: 2, wildfire: 1 },
    ],

    // Asia timeline
    asiaTimeline: [
      { name: "Jan", earthquake: 5, flood: 5, wildfire: 2 },
      { name: "Feb", earthquake: 4, flood: 4, wildfire: 2 },
      { name: "Mar", earthquake: 5, flood: 5, wildfire: 2 },
      { name: "Apr", earthquake: 6, flood: 6, wildfire: 2 },
      { name: "May", earthquake: 6, flood: 7, wildfire: 3 },
      { name: "Jun", earthquake: 6, flood: 8, wildfire: 4 },
      { name: "Jul", earthquake: 7, flood: 9, wildfire: 4 },
      { name: "Aug", earthquake: 8, flood: 10, wildfire: 4 },
      { name: "Sep", earthquake: 7, flood: 8, wildfire: 3 },
      { name: "Oct", earthquake: 6, flood: 7, wildfire: 2 },
      { name: "Nov", earthquake: 5, flood: 5, wildfire: 2 },
      { name: "Dec", earthquake: 4, flood: 4, wildfire: 2 },
    ],

    // Severity distribution
    severityDistribution: [
      { name: "1-2", count: 15 },
      { name: "2-3", count: 22 },
      { name: "3-4", count: 35 },
      { name: "4-5", count: 48 },
      { name: "5-6", count: 52 },
      { name: "6-7", count: 38 },
      { name: "7-8", count: 25 },
      { name: "8-9", count: 10 },
      { name: "9-10", count: 3 },
    ],

    // Earthquake severity
    earthquakeSeverity: [
      { name: "1-2", count: 5 },
      { name: "2-3", count: 8 },
      { name: "3-4", count: 12 },
      { name: "4-5", count: 18 },
      { name: "5-6", count: 22 },
      { name: "6-7", count: 15 },
      { name: "7-8", count: 5 },
      { name: "8-9", count: 2 },
      { name: "9-10", count: 0 },
    ],

    // Flood severity
    floodSeverity: [
      { name: "1-2", count: 6 },
      { name: "2-3", count: 10 },
      { name: "3-4", count: 15 },
      { name: "4-5", count: 20 },
      { name: "5-6", count: 25 },
      { name: "6-7", count: 18 },
      { name: "7-8", count: 7 },
      { name: "8-9", count: 2 },
      { name: "9-10", count: 0 },
    ],

    // Wildfire severity
    wildfireSeverity: [
      { name: "1-2", count: 4 },
      { name: "2-3", count: 6 },
      { name: "3-4", count: 8 },
      { name: "4-5", count: 10 },
      { name: "5-6", count: 12 },
      { name: "6-7", count: 8 },
      { name: "7-8", count: 6 },
      { name: "8-9", count: 3 },
      { name: "9-10", count: 1 },
    ],

    // Yearly severity
    yearlySeverity: [
      { name: "2015", severity: 5.2 },
      { name: "2016", severity: 5.3 },
      { name: "2017", severity: 5.5 },
      { name: "2018", severity: 5.7 },
      { name: "2019", severity: 5.8 },
      { name: "2020", severity: 6.0 },
      { name: "2021", severity: 6.1 },
      { name: "2022", severity: 6.3 },
      { name: "2023", severity: 6.4 },
      { name: "2024", severity: 6.5 },
    ],

    // Yearly max severity
    yearlyMaxSeverity: [
      { name: "2015", severity: 8.2 },
      { name: "2016", severity: 8.4 },
      { name: "2017", severity: 8.5 },
      { name: "2018", severity: 8.7 },
      { name: "2019", severity: 8.8 },
      { name: "2020", severity: 9.0 },
      { name: "2021", severity: 9.1 },
      { name: "2022", severity: 9.2 },
      { name: "2023", severity: 9.3 },
      { name: "2024", severity: 9.4 },
    ],

    // Severity by type
    severityByType: [
      { name: "Earthquake", average: 6.2, maximum: 8.9 },
      { name: "Flood", average: 5.8, maximum: 8.5 },
      { name: "Wildfire", average: 6.5, maximum: 9.2 },
    ],

    // Severity by region
    severityByRegion: [
      { name: "North America", average: 6.2 },
      { name: "South America", average: 5.5 },
      { name: "Europe", average: 5.0 },
      { name: "Asia", average: 6.8 },
      { name: "Africa", average: 5.7 },
      { name: "Oceania", average: 7.1 },
    ],

    // Severity by season
    severityBySeason: [
      { name: "Winter", earthquake: 5.2, flood: 4.1, wildfire: 2.8 },
      { name: "Spring", earthquake: 5.8, flood: 5.7, wildfire: 4.9 },
      { name: "Summer", earthquake: 5.5, flood: 7.8, wildfire: 8.2 },
      { name: "Fall", earthquake: 5.7, flood: 6.2, wildfire: 5.8 },
    ],

    // Severity correlations
    severityCorrelations: [
      { name: "Population Density", correlation: 0.65 },
      { name: "Infrastructure Age", correlation: 0.58 },
      { name: "GDP per Capita", correlation: -0.42 },
      { name: "Disaster Preparedness", correlation: -0.75 },
      { name: "Climate Vulnerability", correlation: 0.82 },
    ],

    // Severity vs. population
    severityVsPopulation: [
      { x: 50, y: 4.2, z: 10, name: "Rural Area A" },
      { x: 120, y: 4.8, z: 15, name: "Rural Area B" },
      { x: 350, y: 5.5, z: 25, name: "Suburban Area A" },
      { x: 580, y: 6.2, z: 35, name: "Suburban Area B" },
      { x: 1200, y: 6.8, z: 45, name: "Urban Area A" },
      { x: 2500, y: 7.5, z: 60, name: "Urban Area B" },
      { x: 5000, y: 8.2, z: 80, name: "Metropolitan A" },
      { x: 8000, y: 8.8, z: 100, name: "Metropolitan B" },
    ],

    // Severity vs. economic factors
    severityVsEconomic: [
      { x: 5000, y: 7.8, z: 80, name: "Low Income A" },
      { x: 8000, y: 7.5, z: 75, name: "Low Income B" },
      { x: 15000, y: 6.9, z: 70, name: "Lower Middle Income A" },
      { x: 25000, y: 6.2, z: 65, name: "Upper Middle Income A" },
      { x: 35000, y: 5.8, z: 60, name: "Upper Middle Income B" },
      { x: 45000, y: 5.2, z: 55, name: "High Income A" },
      { x: 60000, y: 4.5, z: 50, name: "High Income B" },
      { x: 80000, y: 4.0, z: 45, name: "Very High Income" },
    ],

    // Type comparison
    typeComparison: [
      { name: "Frequency", earthquake: 87, flood: 103, wildfire: 58 },
      { name: "Avg. Severity", earthquake: 6.2, flood: 5.8, wildfire: 6.5 },
      { name: "Max Severity", earthquake: 8.9, flood: 8.5, wildfire: 9.2 },
      { name: "Avg. Duration (days)", earthquake: 1, flood: 12, wildfire: 8 },
      { name: "Economic Impact ($M)", earthquake: 450, flood: 380, wildfire: 320 },
    ],

    // Type frequency comparison
    typeFrequencyComparison: [
      { name: "2020", earthquake: 78, flood: 92, wildfire: 52 },
      { name: "2021", earthquake: 82, flood: 95, wildfire: 54 },
      { name: "2022", earthquake: 84, flood: 98, wildfire: 55 },
      { name: "2023", earthquake: 85, flood: 100, wildfire: 57 },
      { name: "2024", earthquake: 87, flood: 103, wildfire: 58 },
    ],

    // Type severity comparison
    typeSeverityComparison: [
      { name: "Immediate Impact", earthquake: 8.5, flood: 6.2, wildfire: 7.1 },
      { name: "Long-term Impact", earthquake: 5.8, flood: 7.5, wildfire: 6.8 },
      { name: "Infrastructure Damage", earthquake: 8.2, flood: 7.8, wildfire: 6.5 },
      { name: "Environmental Impact", earthquake: 4.5, flood: 6.2, wildfire: 8.5 },
      { name: "Recovery Time", earthquake: 7.2, flood: 6.8, wildfire: 7.5 },
    ],

    // Regional comparison
    regionalComparison: [
      { name: "North America", earthquake: 15, flood: 20, wildfire: 17 },
      { name: "South America", earthquake: 12, flood: 18, wildfire: 8 },
      { name: "Europe", earthquake: 10, flood: 15, wildfire: 8 },
      { name: "Asia", earthquake: 35, flood: 40, wildfire: 15 },
      { name: "Africa", earthquake: 12, flood: 22, wildfire: 7 },
      { name: "Oceania", earthquake: 8, flood: 12, wildfire: 10 },
    ],

    // Continental comparison
    continentalComparison: [
      { name: "Frequency", "North America": 52, Europe: 33, Asia: 75, Oceania: 30 },
      { name: "Severity", "North America": 6.2, Europe: 5.0, Asia: 6.8, Oceania: 7.1 },
      { name: "Economic Impact", "North America": 420, Europe: 280, Asia: 520, Oceania: 180 },
      { name: "Recovery Rate", "North America": 7.5, Europe: 8.2, Asia: 6.1, Oceania: 7.8 },
      { name: "Preparedness", "North America": 8.2, Europe: 7.8, Asia: 6.5, Oceania: 7.2 },
    ],

    // Time comparison
    timeComparison: [
      { name: "2015", disasters: 210, severity: 5.2 },
      { name: "2016", disasters: 215, severity: 5.3 },
      { name: "2017", disasters: 220, severity: 5.5 },
      { name: "2018", disasters: 225, severity: 5.7 },
      { name: "2019", disasters: 230, severity: 5.8 },
      { name: "2020", disasters: 235, severity: 6.0 },
      { name: "2021", disasters: 240, severity: 6.1 },
      { name: "2022", disasters: 242, severity: 6.3 },
      { name: "2023", disasters: 245, severity: 6.4 },
      { name: "2024", disasters: 248, severity: 6.5 },
    ],

    // Seasonal comparison
    seasonalComparison: [
      { name: "Frequency", winter: 50, spring: 62, summer: 85, fall: 51 },
      { name: "Severity", winter: 5.2, spring: 5.8, summer: 7.2, fall: 6.1 },
      { name: "Economic Impact", winter: 280, spring: 320, summer: 450, fall: 310 },
      { name: "Recovery Time", winter: 45, spring: 38, summer: 42, fall: 40 },
      { name: "Preparedness Level", winter: 7.8, spring: 7.2, summer: 6.5, fall: 7.0 },
    ],
  }
}
