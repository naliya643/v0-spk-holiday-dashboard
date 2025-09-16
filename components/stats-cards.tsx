import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Star, TrendingUp } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "Total Destinasi",
      value: "1,247",
      change: "+12%",
      icon: MapPin,
      color: "text-primary",
    },
    {
      title: "Pengguna Aktif",
      value: "8,432",
      change: "+23%",
      icon: Users,
      color: "text-secondary",
    },
    {
      title: "Rating Rata-rata",
      value: "4.8",
      change: "+0.2",
      icon: Star,
      color: "text-accent",
    },
    {
      title: "Rekomendasi Dibuat",
      value: "2,156",
      change: "+18%",
      icon: TrendingUp,
      color: "text-primary",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary font-medium">{stat.change}</span> dari bulan lalu
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
