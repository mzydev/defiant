import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, DollarSign, Users, Activity, TrendingUp } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "Total Bandwidth",
      value: "1.2 TB",
      change: "+20.1% from last month",
      icon: DollarSign,
    },
    {
      title: "Active Tunnels",
      value: "+2,350",
      change: "+180.1% from last month",
      icon: Activity,
    },
    {
      title: "Connected Users",
      value: "+12,234",
      change: "+19% from last month",
      icon: Users,
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+201 since last hour",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowUp className="h-3 w-3 text-emerald-500" />
                {stat.change}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
