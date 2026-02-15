import { RevenueChart } from "@/components/ui/revenue-chart";
import { UsersTable } from "@/components/ui/users-table";
import { QuickActions } from "@/components/ui/quick-actions";
import { SystemStatus } from "@/components/ui/system-status";
import ChatBox from "../components/organisms/ChatBox/ChatBox";

export default function AdminDashboard() {
  const handleAddUser = () => {
    console.log("Adding new user...");
  };

  const handleExport = () => {
    console.log("Exporting data...");
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-6 w-full">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Email Contents</h1>
          <p className="text-muted-foreground">Here's the emails for today.</p>
        </div>

        <UsersTable onAddUser={handleAddUser} />
      </div>
    </div>
  );
}
