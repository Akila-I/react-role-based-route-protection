import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const LandingLayout = () => {
  const { user, loggedIn } = useAuth();

  if (user) {
    loggedIn();
  }

  return (
    <div>
      <nav>
        <span>Protected Routes App</span>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Register</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  )
};
