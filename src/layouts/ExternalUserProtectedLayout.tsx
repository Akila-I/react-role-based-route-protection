import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const ExternalUserProtectedLayout = () => {
  const { user, logout } = useAuth();

  if (user === null) {
    console.log('No user');
    return <Navigate to="/" />;
  }
  if (user && user.role !== 'external-user') {
    // do we need to create a separate page for unauthorized access?
    console.log('Unauthorized access');
    return <Navigate to="/" />;
  }

  return (
    <div>
      <nav>
        <Link to="/external-user/">External User Home</Link>
        <Link to="/external-user/settings">Settings</Link>
        <Link to="/external-user/profile">Profile</Link>
        <Link to="#" onClick={logout}>Logout</Link>
      </nav>
      <Outlet />
    </div>
  )
};
