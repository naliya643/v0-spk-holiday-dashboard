import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, DollarSign } from "lucide-react"

export function DestinationRecommendations() {
  const recommendations = [
    {
      id: 1,
      name: "Pantai Kuta, Bali",
      image: "/beautiful-beach-sunset-in-bali.jpg",
      rating: 4.8,
      reviews: 1234,
      category: "Pantai",
      price: "Rp 150K - 300K",
      duration: "2-3 hari",
      description: "Pantai eksotis dengan sunset yang menakjubkan, cocok untuk healing dan refreshing.",
      tags: ["Healing", "Sunset", "Surfing"],
    },
    {
      id: 2,
      name: "Bromo Tengger Semeru",
      image: "/mount-bromo-sunrise-view-indonesia.jpg",
      rating: 4.9,
      reviews: 987,
      category: "Gunung",
      price: "Rp 200K - 400K",
      duration: "2-4 hari",
      description: "Pemandangan sunrise yang spektakuler di kawah gunung berapi aktif.",
      tags: ["Adventure", "Sunrise", "Hiking"],
    },
    {
      id: 3,
      name: "Yogyakarta Heritage",
      image: "/yogyakarta-traditional-palace-and-culture.jpg",
      rating: 4.7,
      reviews: 756,
      category: "Budaya",
      price: "Rp 100K - 250K",
      duration: "3-5 hari",
      description: "Jelajahi kekayaan budaya dan sejarah Jogja dengan wisata heritage yang lengkap.",
      tags: ["Budaya", "Sejarah", "Kuliner"],
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">Rekomendasi Untuk Anda</CardTitle>
        <p className="text-muted-foreground">Berdasarkan preferensi dan riwayat pencarian Anda</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {recommendations.map((dest) => (
          <div
            key={dest.id}
            className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <img
              src={dest.image || "/placeholder.svg"}
              alt={dest.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
            />

            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{dest.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>{dest.rating}</span>
                      <span>({dest.reviews} ulasan)</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary">{dest.category}</Badge>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">{dest.description}</p>

              <div className="flex flex-wrap gap-1">
                {dest.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    <span>{dest.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{dest.duration}</span>
                  </div>
                </div>

                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Lihat Detail
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center pt-4">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Lihat Semua Rekomendasi
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
