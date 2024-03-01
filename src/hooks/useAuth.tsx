import { createContext, useContext, useMemo, ReactNode } from "react";
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

type AuthObject = {
  user: { userID: string; token: string; role: string } | null;
  login: (user: { userID: string; token: string; role: string }) => void;
  logout: () => void;
  loggedIn: () => void;
};

interface Props {
  children: ReactNode;
}

const AuthContext = createContext<AuthObject | null>(null);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate()

  useEffect(() => {
    if (user !== null) loggedIn()
  }, [user]);

  const login = (user: { userID: string; token: string; role: string }) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    navigate('/login')
  };

  const loggedIn = () => {
    // navigate to the home page depending on the user role
    if (user?.role === "admin") navigate('/admin')
    else if (user?.role === "internal-user") navigate('/internal-user')
    else if (user?.role === "external-user") navigate('/external-user')
    else {
      console.error("Invalid user role");
      // logout();
    }
  }

  const value = useMemo(() => {
    return { user, login, logout, loggedIn };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext) as AuthObject;
  return context;
}