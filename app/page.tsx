"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsCards } from "@/components/metrics-cards"
import { DataTable } from "@/components/data-table"
import { ChartsSection } from "@/components/charts-section"
import { FiltersForm } from "@/components/filters-form"
import { generateSampleData } from "@/data/sample-data"
import type { DashboardData, FilterValues } from "@/types"

export default function DemoDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [filters, setFilters] = useState<FilterValues>({
    dateRange: "30d",
    category: "all",
    status: "all"
  })

  useEffect(() => {
    // Simulate loading data
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setData(generateSampleData(filters))
    }
    loadData()
  }, [filters])

  const handleFiltersChange = (newFilters: FilterValues) => {
    setFilters(newFilters)
    setData(null) // Show loading state
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      <div className="container mx-auto p-6 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DashboardHeader />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FiltersForm filters={filters} onFiltersChange={handleFiltersChange} />
        </motion.div>

        {data ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MetricsCards metrics={data.metrics} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ChartsSection chartData={data.charts} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <DataTable data={data.tableData} />
            </motion.div>
          </>
        ) : (
          <div className="space-y-8">
            {/* Loading skeletons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-32 bg-muted rounded-lg animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                className="h-80 bg-muted rounded-lg animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="h-80 bg-muted rounded-lg animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
            </div>
            <motion.div
              className="h-96 bg-muted rounded-lg animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
