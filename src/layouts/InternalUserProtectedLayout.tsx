import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const InternalUserProtectedLayout = () => {
  const { user, logout } = useAuth();

  if (user === null) {
    console.log('No user');
    return <Navigate to="/" />;
  }
  if (user && user.role !== 'internal-user') {
    // do we need to create a separate page for unauthorized access?
    console.log('Unauthorized access');
    return <Navigate to="/" />;
  }

  return (
    <div>
      <nav>
        <span>Protected Routes App</span>
        <div className="nav-links">
          <Link to="/internal-user/">Internal User Home</Link>
          <Link to="/internal-user/settings">Settings</Link>
          <Link to="/internal-user/profile">Profile</Link>
          <Link to="#" onClick={logout}>Logout</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  )
};
