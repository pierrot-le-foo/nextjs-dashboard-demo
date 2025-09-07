"use client"

import { motion } from "motion/react"
import { CalendarDays, BarChart3, Users, TrendingUp } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export function DashboardHeader() {
  return (
    <div className="space-y-4">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground">Real-time insights and performance metrics</p>
          </div>
        </div>
        <ModeToggle />
      </motion.div>

      <motion.div
        className="flex items-center space-x-6 text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center space-x-2">
          <CalendarDays className="w-4 h-4" />
          <span>Last updated: {new Date().toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4" />
          <span>2,847 active users</span>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4" />
          <span>94% uptime</span>
        </div>
      </motion.div>

      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-border to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </div>
  )
}
