import DashboardHeader from "@/components/admin/dashboard/DashboardHeader";
import StatsCards from "@/components/admin/dashboard/StatsCards";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import ProjectStatusChart from "@/components/admin/dashboard/ProjectStatusChart";
import RecentLeads from "@/components/admin/dashboard/RecentLeads";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      <DashboardHeader />

      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <RevenueChart />
        </div>

        <ProjectStatusChart />

      </div>

      <RecentLeads />

    </div>
  );
}