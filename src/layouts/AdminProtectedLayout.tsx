import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const AdminProtectedLayout = () => {
  const { user, logout } = useAuth();

  if (user === null) {
    console.log('No user');
    return <Navigate to="/" />;
  }
  if (user && user.role !== 'admin') {
    // do we need to create a separate page for unauthorized access?
    console.log('Unauthorized access');
    return <Navigate to="/" />;
  }

  return (
    <div>
      <nav>
        <Link to="/admin/">Admin Home</Link>
        <Link to="/admin/settings">Settings</Link>
        <Link to="/admin/profile">Profile</Link>
        <Link to="#" onClick={logout}>Logout</Link>
      </nav>
      <Outlet />
    </div>
  )
};
