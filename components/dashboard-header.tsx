import { MapPin, Bell, User, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Go aja!</h1>
              <p className="text-sm text-muted-foreground">Sistem Pendukung Keputusan Memilih Wisata</p>
            </div>
          </div>

          {/* Navigation and User Actions */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Dashboard
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Destinasi
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Rekomendasi
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Analisis
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>

              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
