import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import ClientLogin from "./pages/client/ClientLogin";
import Signup from "./pages/client/Signup";
import Application from "./pages/client/Application";

function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />

      {/* Client Routes */}
      <Route path="/login" element={<ClientLogin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/app" element={<Application />} />

      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
