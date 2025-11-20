import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ActiveConnections() {
  const connections = [
    {
      id: "1",
      tunnel: "US-East-1",
      user: "user@example.com",
      ip: "192.168.1.100",
      bandwidth: "125 MB/s",
      status: "active",
      duration: "2h 34m",
    },
    {
      id: "2",
      tunnel: "EU-West-1",
      user: "admin@company.com",
      ip: "10.0.1.45",
      bandwidth: "89 MB/s",
      status: "active",
      duration: "5h 12m",
    },
    {
      id: "3",
      tunnel: "AP-South-1",
      user: "dev@startup.io",
      ip: "172.16.0.20",
      bandwidth: "234 MB/s",
      status: "active",
      duration: "1h 05m",
    },
    {
      id: "4",
      tunnel: "US-West-2",
      user: "support@service.com",
      ip: "192.168.2.150",
      bandwidth: "67 MB/s",
      status: "warning",
      duration: "45m",
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle>Active Connections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Tunnel</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">User</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">IP Address</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Bandwidth</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Duration</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {connections.map((connection) => (
                <tr key={connection.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                  <td className="py-3 px-4 font-medium">{connection.tunnel}</td>
                  <td className="py-3 px-4 text-muted-foreground">{connection.user}</td>
                  <td className="py-3 px-4 text-muted-foreground font-mono text-xs">{connection.ip}</td>
                  <td className="py-3 px-4">{connection.bandwidth}</td>
                  <td className="py-3 px-4 text-muted-foreground">{connection.duration}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant={connection.status === "active" ? "default" : "secondary"}
                      className={
                        connection.status === "active"
                          ? "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20"
                          : ""
                      }
                    >
                      {connection.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
