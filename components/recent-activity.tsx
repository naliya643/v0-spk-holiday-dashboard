import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, MapPin, Star } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "review",
      user: "Andi Pratama",
      action: "memberikan ulasan",
      target: "Pantai Parangtritis",
      rating: 5,
      time: "2 jam lalu",
      avatar: "/indonesian-man-profile-photo.jpg",
    },
    {
      type: "recommendation",
      user: "Sari Dewi",
      action: "mendapat rekomendasi",
      target: "Wisata Healing Ubud",
      time: "4 jam lalu",
      avatar: "/indonesian-woman-profile-photo.jpg",
    },
    {
      type: "visit",
      user: "Budi Santoso",
      action: "mengunjungi",
      target: "Candi Borobudur",
      time: "6 jam lalu",
      avatar: "/indonesian-man-profile-photo.jpg",
    },
    {
      type: "review",
      user: "Maya Sari",
      action: "memberikan ulasan",
      target: "Gunung Rinjani",
      rating: 4,
      time: "8 jam lalu",
      avatar: "/indonesian-woman-profile-photo.jpg",
    },
    {
      type: "recommendation",
      user: "Rizki Ahmad",
      action: "mendapat rekomendasi",
      target: "Wisata Kuliner Malang",
      time: "12 jam lalu",
      avatar: "/indonesian-man-profile-photo.jpg",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "review":
        return <Star className="h-4 w-4 text-primary" />
      case "recommendation":
        return <MapPin className="h-4 w-4 text-secondary" />
      case "visit":
        return <User className="h-4 w-4 text-accent" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "review":
        return "bg-primary/10 text-primary"
      case "recommendation":
        return "bg-secondary/10 text-secondary"
      case "visit":
        return "bg-accent/10 text-accent"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Aktivitas Terbaru
        </CardTitle>
        <p className="text-muted-foreground">Aktivitas pengguna dalam sistem</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <img
              src={activity.avatar || "/placeholder.svg"}
              alt={activity.user}
              className="w-8 h-8 rounded-full object-cover"
            />

            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground text-sm">{activity.user}</span>
                <Badge className={`text-xs ${getActivityColor(activity.type)}`}>{getActivityIcon(activity.type)}</Badge>
              </div>

              <p className="text-sm text-muted-foreground">
                {activity.action} <span className="font-medium text-foreground">{activity.target}</span>
                {activity.rating && (
                  <span className="ml-2 inline-flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-primary font-medium">{activity.rating}</span>
                  </span>
                )}
              </p>

              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {activity.time}
              </p>
            </div>
          </div>
        ))}

        <div className="text-center pt-2">
          <button className="text-sm text-primary hover:text-primary/80 transition-colors">
            Lihat semua aktivitas
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
