// src/pages/Dashboard.jsx
import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";
import ProgressBar from "../components/ProgressBar";
import Quote from "../components/Quote";
import QuickNav from "../components/QuickNav";

const Dashboard = () => {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-6">📖 Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <DashboardCard title="Read Quran" value="" icon="📖" />
        <DashboardCard title="Memorized" value="45%" icon="💯" />
        <DashboardCard title="Today's Goal" value="Ayah 5 of Baqarah" icon="🎯" />
        <DashboardCard title="Surahs Completed" value="6" icon="✅" />
        <DashboardCard title="Daily Streak" value="3" icon="🔥" />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧠 Progress</h2>
        <ProgressBar percent={75} />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🚀 Quick Navigation</h2>
        <QuickNav />
      </div>

      <div className="mt-10">
        <Quote />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
