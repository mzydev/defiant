import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/stats-cards"
import { OverviewChart } from "@/components/overview-chart"
import { RecentActivity } from "@/components/recent-activity"
import { ActiveConnections } from "@/components/active-connections"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Monitor your VPN infrastructure</p>
          </div>
        </div>

        <div className="flex items-center gap-2 border-b border-border">
          <button className="px-4 py-2 text-sm font-medium border-b-2 border-primary text-foreground">Overview</button>
          <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            Analytics
          </button>
          <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Reports</button>
          <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            Notifications
          </button>
        </div>

        <StatsCards />

        <div className="grid gap-6 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <OverviewChart />
          </div>
          <div className="lg:col-span-3">
            <RecentActivity />
          </div>
        </div>

        <ActiveConnections />
      </div>
    </DashboardLayout>
  )
}
