import "./App.css";
import { useState } from "react";
import { auth } from "./firebase";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Write from "./pages/Write";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Header from "./components/Header";
import ErorrPage from "./pages/ErrorPage";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [userState, setUserState] = useState(false);
  onAuthStateChanged(auth, (userState) => {
    if(userState) {
      setUserState(true);
    } else {
      console.log("No user is logged in")
    }
  })

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact
            path="/"
            element={<Home />} />
          <Route
            path="/about"
            element={<About />} />
          <Route
            path="/write"
            element={userState ? <Write /> : <Register />} />
          <Route
            path="/profile"
            element={userState ? <Profile /> : <Register />} />
          <Route
            path="/settings"
            element={userState ? <Settings /> : <Register />} />
          <Route
            path="/register"
            element={userState ? <Home /> : <Register />} />
          <Route
            path="/login"
            element={userState ? <Home /> : <Login />} />
          <Route
            path="*"
            element={<ErorrPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
