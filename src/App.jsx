import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Patients from "./pages/Patients"
import LabReport from "./pages/LabReport"
import CareAI from "./pages/CareAI"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/lab-report" element={<LabReport />} />
        <Route path="/care-ai" element={<CareAI />} />
      </Routes>
    </Router>    
  )
}

export default App
