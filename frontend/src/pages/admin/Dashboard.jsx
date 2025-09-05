import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const viewsData = [
  { day: "Mon", views: 20 },
  { day: "Tue", views: 40 },
  { day: "Wed", views: 35 },
  { day: "Thu", views: 50 },
  { day: "Fri", views: 80 },
  { day: "Sat", views: 100 },
  { day: "Sun", views: 60 },
];

const ratingsData = [
  { name: "5 Stars", value: 50 },
  { name: "4 Stars", value: 30 },
  { name: "3 Stars", value: 15 },
  { name: "2 Stars", value: 4 },
  { name: "1 Star", value: 1 },
];

const COLORS = ["#2563eb", "#16a34a", "#facc15", "#f97316", "#dc2626"];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Views Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Views This Week</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={viewsData}>
              <Line type="monotone" dataKey="views" stroke="#2563eb" strokeWidth={3} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Ratings Pie Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Ratings Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ratingsData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {ratingsData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6">
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
