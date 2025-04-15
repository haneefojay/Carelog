import { NavLink } from "react-router-dom"
import "../styles/Sidebar.css"
import DashboardIcon from "../assets/dashboard-icon.png"
import PatientIcon from "../assets/mdi_patient-outline.png"
import LabIcon from "../assets/streamline_petri-dish-lab-equipment.png"
import CareIcon from "../assets/mingcute_ai-fill.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              <span className="nav-icon dashboard-icon"><img src={DashboardIcon} /></span>
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/patients" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              <span className="nav-icon patients-icon"><img src={PatientIcon} /></span>
              <span className="nav-text">Patients</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/lab-testing" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              <span className="nav-icon prescription-icon"><img src={LabIcon} /></span>
              <span className="nav-text">Lab Testing</span>
            </NavLink>
          </li>
          <li className="care-nav-item">
            <NavLink to="/care-ai" className={({ isActive }) => (isActive ? "care-nav-link active" : "care-nav-link")}>
              <span className="nav-icon consultation-icon"><img src={CareIcon} /></span>
              <span className="nav-text">Care AI</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-user-avatar">
          <img src="/placeholder.svg" alt="Dr. Martins James" />
        </div>
        <div className="sidebar-user-info">
          <p className="sidebar-user-name">Dr Martins James</p>
          <p className="sidebar-user-role">Senior Doctor</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
