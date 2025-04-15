import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Patients from "./pages/Patients"
import LabTesting from "./pages/LabTesting"
import CareAI from "./pages/CareAI"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/lab-testing" element={<LabTesting />} />
        <Route path="/care-ai" element={<CareAI />} />
      </Routes>
    </Router>    
  )
}

export default App
