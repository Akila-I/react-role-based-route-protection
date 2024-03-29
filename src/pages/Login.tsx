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

  // css
  const styles = {
    container: {
      padding: "50px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "50px",
    },
    input: {
      width: "95%",
      padding: "8px",
      margin: "10px",
      marginLeft: "0",
      display: "block",
    },
    button: {
      backgroundColor: "#4caf50",
      color: "white",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
      marginTop: "10px",
    },
    loginBtnContainer: {
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.loginBtnContainer}>
        <button type="submit" style={styles.button}>
          Login
        </button>
        </div>
      </form>
    </div>
  );
};