import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";



const Lessons = () => {
  return (
    <MainLayout>
      <h2 className="text-3xl font-bold mb-4">📚 Lessons</h2>
      <p className="text-gray-700">Manage your surahs and ayat to study.</p>
      <div>
        <DashboardCard/>
        </div>
    </MainLayout>
  );
};

export default Lessons;