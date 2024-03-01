import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const LandingLayout = () => {
  const {user, loggedIn } = useAuth();

  if (user) {
    loggedIn();
  }

  return (
    <div>
      <nav>
        <span>Protected Routes App</span>
        <button> <Link to="/login">Login</Link> </button>
        <button> <Link to="/signup">Register</Link> </button>
      </nav>
      <Outlet />
    </div>
  )
};
