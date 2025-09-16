import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp } from "lucide-react"

export function PopularDestinations() {
  const destinations = [
    {
      name: "Raja Ampat",
      image: "/raja-ampat-underwater-coral-reef-diving.jpg",
      rating: 4.9,
      category: "Diving",
      trending: true,
    },
    {
      name: "Labuan Bajo",
      image: "/labuan-bajo-komodo-island-sunset.jpg",
      rating: 4.8,
      category: "Adventure",
      trending: true,
    },
    {
      name: "Danau Toba",
      image: "/lake-toba-samosir-island-peaceful-view.jpg",
      rating: 4.7,
      category: "Healing",
      trending: false,
    },
    {
      name: "Taman Nasional Komodo",
      image: "/komodo-national-park-dragon-wildlife.jpg",
      rating: 4.9,
      category: "Wildlife",
      trending: true,
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Destinasi Populer
        </CardTitle>
        <p className="text-muted-foreground">Destinasi yang sedang trending minggu ini</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {destinations.map((dest, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {dest.trending && (
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">Trending</Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="font-semibold text-white text-sm">{dest.name}</h4>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {dest.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-white text-xs">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span>{dest.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
