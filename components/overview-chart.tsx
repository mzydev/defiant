"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Jan", value: 4500 },
  { name: "Feb", value: 5000 },
  { name: "Mar", value: 3800 },
  { name: "Apr", value: 2100 },
  { name: "May", value: 4400 },
  { name: "Jun", value: 2400 },
  { name: "Jul", value: 5500 },
  { name: "Aug", value: 1800 },
  { name: "Sep", value: 3100 },
  { name: "Oct", value: 1500 },
  { name: "Nov", value: 1600 },
  { name: "Dec", value: 1600 },
]

export function OverviewChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="value" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
