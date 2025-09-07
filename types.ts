export interface MetricCard {
  title: string
  value: string
  change: number
  changeType: "increase" | "decrease"
  icon: string
}

export interface ChartDataPoint {
  name: string
  value: number
  date?: string
  category?: string
}

export interface CustomerRow {
  id: string
  name: string
  email: string
  status: "active" | "inactive" | "pending"
  revenue: number
  date: string
  category: string
}

export interface DashboardData {
  metrics: MetricCard[]
  charts: {
    revenue: ChartDataPoint[]
    users: ChartDataPoint[]
    categories: ChartDataPoint[]
    timeline: ChartDataPoint[]
  }
  tableData: CustomerRow[]
}

export interface FilterValues {
  dateRange: "7d" | "30d" | "90d" | "1y"
  category: "all" | "premium" | "basic" | "enterprise"
  status: "all" | "active" | "inactive" | "pending"
}
