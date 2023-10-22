import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Header from "./components/Header";
import ErorrPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
            element={<Write />} />
          <Route
            path="/register"
            element={<Register />} />
          <Route
            path="/login"
            element={<Login />} />
          <Route
            path="*"
            element={<ErorrPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
