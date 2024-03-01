import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = async (e:any) => {
    e.preventDefault();
    
    // Axios request to the backend
    /*
    // sample request body
    const requestBody = {
      "email": email,
      "password": password
    }
    */
    // const response = await axios.post("http://localhost:5000/login", requestBody);
    const response: string = "success"; // mock response
 
    const LOGGED_IN_USER = { 
      userID:"sampleID", 
      token: "sample-token",
      role: "admin" // roles = ["admin", "internal-user", "external-user"] 
    }; // mock response
    
    if (response === "success") {
      await login(LOGGED_IN_USER);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};