import type { DashboardData, FilterValues } from "../types"

const categories = ["premium", "basic", "enterprise"]
const statuses = ["active", "inactive", "pending"] as const

// Generate random data based on filters
export function generateSampleData(filters: FilterValues): DashboardData {
  const baseMultiplier = getMultiplierForDateRange(filters.dateRange)
  
  // Generate metrics
  const metrics = [
    {
      title: "Total Revenue",
      value: `$${(125000 * baseMultiplier).toLocaleString()}`,
      change: Math.random() * 20 - 5, // -5% to +15%
      changeType: (Math.random() > 0.3 ? "increase" : "decrease") as "increase" | "decrease",
      icon: "DollarSign"
    },
    {
      title: "Active Users",
      value: (2847 * baseMultiplier).toLocaleString(),
      change: Math.random() * 15 + 2, // +2% to +17%
      changeType: "increase" as "increase" | "decrease",
      icon: "Users"
    },
    {
      title: "Conversion Rate",
      value: `${(3.4 + Math.random() * 2).toFixed(1)}%`,
      change: Math.random() * 1.5 - 0.3, // -0.3% to +1.2%
      changeType: (Math.random() > 0.4 ? "increase" : "decrease") as "increase" | "decrease",
      icon: "TrendingUp"
    },
    {
      title: "Avg. Order Value",
      value: `$${(89 + Math.random() * 30).toFixed(0)}`,
      change: Math.random() * 10 - 2, // -2% to +8%
      changeType: (Math.random() > 0.3 ? "increase" : "decrease") as "increase" | "decrease",
      icon: "ShoppingCart"
    }
  ]

  // Generate chart data
  const days = getDaysForRange(filters.dateRange)
  const revenue = Array.from({ length: days }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 5000) + 2000,
    date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  }))

  const users = Array.from({ length: days }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 200) + 50,
    date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  }))

  const categoryData = categories.map(cat => ({
    name: cat.charAt(0).toUpperCase() + cat.slice(1),
    value: Math.floor(Math.random() * 1000) + 200,
    category: cat
  }))

  // Generate table data
  const tableData = Array.from({ length: 50 }, (_, i) => ({
    id: `user-${i + 1}`,
    name: generateRandomName(),
    email: generateRandomEmail(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    revenue: Math.floor(Math.random() * 5000) + 100,
    date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    category: categories[Math.floor(Math.random() * categories.length)]
  })).filter(row => {
    if (filters.category !== "all" && row.category !== filters.category) return false
    if (filters.status !== "all" && row.status !== filters.status) return false
    return true
  })

  return {
    metrics,
    charts: {
      revenue,
      users,
      categories: categoryData,
      timeline: revenue.map((item, i) => ({
        name: item.date,
        value: item.value + users[i].value * 20,
        date: item.date
      }))
    },
    tableData
  }
}

function getMultiplierForDateRange(range: string): number {
  switch (range) {
    case "7d": return 0.25
    case "30d": return 1
    case "90d": return 3
    case "1y": return 12
    default: return 1
  }
}

function getDaysForRange(range: string): number {
  switch (range) {
    case "7d": return 7
    case "30d": return 30
    case "90d": return 30 // Show monthly data for 90d
    case "1y": return 12 // Show monthly data for 1y
    default: return 30
  }
}

const firstNames = ["Alex", "Sam", "Jordan", "Taylor", "Casey", "Morgan", "Riley", "Avery", "Quinn", "Sage", "Rowan", "Emery", "Parker", "Blake", "Cameron"]
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson"]

function generateRandomName(): string {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  return `${firstName} ${lastName}`
}

function generateRandomEmail(): string {
  const name = generateRandomName().toLowerCase().replace(" ", ".")
  const domains = ["gmail.com", "outlook.com", "company.com", "email.com", "test.com"]
  const domain = domains[Math.floor(Math.random() * domains.length)]
  return `${name}@${domain}`
}
