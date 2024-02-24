import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home";
import Signup from "./pages/signup";
import Singin from "./pages/signin";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="min-h-screen font-outfit w-full">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Singin />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
