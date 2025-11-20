import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentActivity() {
  const activities = [
    {
      name: "Tunnel US-East",
      email: "us-east-1.smite.local",
      amount: "+$1,999.00",
      initials: "UE",
    },
    {
      name: "Tunnel EU-West",
      email: "eu-west-1.smite.local",
      amount: "+$39.00",
      initials: "EW",
    },
    {
      name: "Tunnel Asia-Pacific",
      email: "ap-south-1.smite.local",
      amount: "+$299.00",
      initials: "AP",
    },
    {
      name: "Tunnel US-West",
      email: "us-west-2.smite.local",
      amount: "+$99.00",
      initials: "UW",
    },
    {
      name: "Tunnel EU-Central",
      email: "eu-central-1.smite.local",
      amount: "+$39.00",
      initials: "EC",
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>You have 265 active connections this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-4">
              <Avatar className="h-10 w-10 bg-muted">
                <AvatarFallback className="bg-accent text-xs font-medium">{activity.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.name}</p>
                <p className="text-sm text-muted-foreground">{activity.email}</p>
              </div>
              <div className="font-medium">{activity.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
