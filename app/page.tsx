import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { DestinationRecommendations } from "@/components/destination-recommendations"
import { SearchFilters } from "@/components/search-filters"
import { PopularDestinations } from "@/components/popular-destinations"
import { RecentActivity } from "@/components/recent-activity"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Overview */}
        <StatsCards />

        {/* Search and Filters */}
        <SearchFilters />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recommendations */}
          <div className="lg:col-span-2 space-y-8">
            <DestinationRecommendations />
            <PopularDestinations />
          </div>

          {/* Right Column - Activity */}
          <div className="space-y-8">
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  )
}
