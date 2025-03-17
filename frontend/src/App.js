import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/SignUp";
import AdminDashboard from "./Pages/Dashboard";
import UserHome from "./Pages/Home";
import StoreOwnerDashboard from "./Pages/StoreOwnerDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProtectedRouteForAuth from "./Components/ProtectedRouteForAuth";
import Dashboard from "./Pages/Dashboard";
import TotalUsersTable from "./Pages/TotalUsersTable";
import TotalStoresTable from "./Pages/TotalStoresTable";
import TotalRatingsTable from "./Pages/TotalRatingsTable";
// import HomePage from "./Pages/Home";
import StoreDetails from "./Pages/StoreDetails";
import CreateUserPage from "./Pages/CreateUser";
import CreateStorePage from "./Pages/CreateStore";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route element={<ProtectedRouteForAuth />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={["admin"]}><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute allowedRoles={["admin"]}><TotalUsersTable /></ProtectedRoute>} />
        <Route path="/admin/stores" element={<ProtectedRoute allowedRoles={["admin"]}><TotalStoresTable /></ProtectedRoute>} />
        <Route path="/admin/ratings" element={<ProtectedRoute allowedRoles={["admin"]}><TotalRatingsTable /></ProtectedRoute>} />
        <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={["admin"]}><AdminDashboard /></ProtectedRoute>} />
        <Route path="/normal/dashboard" element={<ProtectedRoute allowedRoles={["normal"]}><UserHome /></ProtectedRoute>} />
        <Route path="/store_owner/dashboard" element={<ProtectedRoute allowedRoles={["store_owner"]}><StoreOwnerDashboard /></ProtectedRoute>} />
        <Route path="/store/:storeId" element={<ProtectedRoute allowedRoles={["normal"]}><StoreDetails /></ProtectedRoute>} />
        <Route path="/admin/create-user" element={<ProtectedRoute allowedRoles={['admin']}><CreateUserPage /></ProtectedRoute>} />
        <Route path="/admin/create-store" element={<ProtectedRoute allowedRoles={['admin']}><CreateStorePage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
