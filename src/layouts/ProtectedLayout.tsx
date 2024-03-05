import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ProtectedNavBar } from "../components/ProtectedNavBar";

export const ProtectedLayout = (props:any) => {
  const { user } = useAuth();

  if (user === null) {
    console.log('No user');
    return <Navigate to="/login" />;
  }
  
  if (user && props.role!=user.role) {
    console.log("Unauthorized access");
    return <Navigate to="/" />;
  }

  return (
    <div>
      <ProtectedNavBar role={props.role} />
      <Outlet />
    </div>
  )
};
