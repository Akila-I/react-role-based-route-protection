import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedNavBar = (props:any) => {
  const { logout } = useAuth();
  
  return (
    <nav>
      <span>Protected Routes App</span>
      <div className="nav-links">
        <Link to={`/${props.role}/`}>Home</Link>
        <Link to={`/${props.role}/settings`}>Settings</Link>
        <Link to={`/${props.role}/profile`}>Profile</Link>
        <Link to="#" onClick={logout}>Logout</Link>
      </div>
      </nav>
  );
}
