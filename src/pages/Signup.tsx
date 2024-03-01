import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e:any) => {
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

  return (
    <div>
      <form onSubmit={handleSignup}>
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
          <label htmlFor="fullName">Full Name:</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
        <div>
          <label htmlFor="confPassword">Confirm Password:</label>
          <input
            id="confPassword"
            type="password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}