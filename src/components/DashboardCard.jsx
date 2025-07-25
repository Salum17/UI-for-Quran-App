const DashboardCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
    <div>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    <span className="text-3xl">{icon}</span>
  </div>
);

export default DashboardCard;