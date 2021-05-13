import "./global.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <Router>
      <Navbar />
      <LandingPage />
      
    </Router>
  );
}

export default App;
