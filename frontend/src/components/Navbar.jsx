import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Movie App</h1>
      <div className="space-x-4">
        <Link to="/app" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/login" className="hover:text-gray-300">
          Logout
        </Link>
      </div>
    </nav>
  );
}
