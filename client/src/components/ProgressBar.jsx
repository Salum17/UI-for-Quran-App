const ProgressBar = ({ percent }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div
      className="bg-green-500 h-2 rounded-full transition-all"
      style={{ width: `${percent}%` }}
    />
  </div>
);

export default ProgressBar;