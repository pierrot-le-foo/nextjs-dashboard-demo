"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Users, TrendingUp, ShoppingCart, ArrowUpIcon, ArrowDownIcon } from "lucide-react"
import type { MetricCard } from "../types"

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  ShoppingCart
}

interface MetricsCardsProps {
  metrics: MetricCard[]
}

export function MetricsCards({ metrics }: MetricsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = iconMap[metric.icon as keyof typeof iconMap] || TrendingUp
        const isPositive = metric.changeType === "increase"
        
        return (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
          >
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-lg">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <motion.div
                  className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-4 w-4 text-primary" />
                </motion.div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <motion.div
                  className="text-2xl font-bold"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  {metric.value}
                </motion.div>
                
                <motion.div
                  className="flex items-center space-x-1 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  <Badge
                    variant={isPositive ? "default" : "destructive"}
                    className="flex items-center space-x-1 text-xs"
                  >
                    {isPositive ? (
                      <ArrowUpIcon className="h-3 w-3" />
                    ) : (
                      <ArrowDownIcon className="h-3 w-3" />
                    )}
                    <span>{Math.abs(metric.change).toFixed(1)}%</span>
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    vs last period
                  </span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
