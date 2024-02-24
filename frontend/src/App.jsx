import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/navbar"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Create from "./pages/Create"

function App() {

  return (
    <div className="min-h-screen font-outfit w-full font-montoserrat bg-orange-50">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/create" element={<Create />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App
