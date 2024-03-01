import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e: any) => {
    e.preventDefault();

    // Axios request to the backend
    /*
    // sample request body
    const requestBody = {
      "email": email,
      "fullName": fullName,
      "password": password,
      "role": "external-user" // only "external-user" can sign up, "admin" and "internal-user" are created by the admin
    };
    */
    // const response = await axios.post("http://localhost:5000/signup", requestBody);
    const response: string = "success"; // mock response

    if (response === "success") {
      navigate('/login');
    } else {
      alert("Error signing up");
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
      <form onSubmit={handleSignup}>
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
          <label htmlFor="fullName">Full Name:</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
        <div>
          <label htmlFor="confPassword">Confirm Password:</label>
          <input
            id="confPassword"
            type="password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.loginBtnContainer}>
          <button type="submit" style={styles.button}>Signup</button>
        </div>
      </form>
    </div>
  );
}