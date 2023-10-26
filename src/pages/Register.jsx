import { useState } from "react";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  // Registering user and saving username in db
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, "users"), {
        email: email,
        username: username,
        iglink: "https://instagram.com/",
      });
      navigate("/");
    } catch (err) {
      alert("Error!", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-cover h-vh-50">
      <span className="text-5xl font-vround">Register</span>
      <form className="mt-5 flex flex-col" onSubmit={registerUser}>
        <label className="mt-10 mb-0">Username</label>
        <input
          type="text"
          className="p-0.5 bg-white border-none rounded-md"
          placeholder="Enter your username"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label className="mt-10 mb-0">Email</label>
        <input
          type="text"
          className="p-0.5 bg-white border-none rounded-md"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className="mt-10 mb-0">Password</label>
        <input
          type="password"
          className="p-0.5 bg-white border-none rounded-md"
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="mt-5 cursor-pointer text-white p-2 text-center bg-lime-700 border-none rounded-md">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
