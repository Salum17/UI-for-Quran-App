const DashboardCard = ({ title, value, icon , link}) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
    <div>
      <h2 className="text-gray-600 text-sm">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    <span className="text-3xl">{icon}</span>
  </div>
);

export default DashboardCard;