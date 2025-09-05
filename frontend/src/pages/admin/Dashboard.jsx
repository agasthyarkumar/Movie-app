import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded shadow">Total Views: 120</div>
        <div className="bg-green-100 p-6 rounded shadow">Likes: 45</div>
        <div className="bg-yellow-100 p-6 rounded shadow">Comments: 12</div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Manage Movies</h2>
        <button
          onClick={() => navigate("/app")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Client Side
        </button>
      </div>
    </div>
  );
}
