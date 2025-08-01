import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen font-sans bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;