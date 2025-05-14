import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";
import "../styles/Sidebar.css";
import DashboardIconActive from "../assets/activedashboard.png";
import DashboardIcon from "../assets/dashboard.png";
import PatientIcon from "../assets/mdi_patient-outline.png";
import LabIcon from "../assets/lab.png";
import CareIcon from "../assets/mingcute_ai-fill.png";
import ActivePatient from "../assets/activepatient.png";
import ActiveLab from "../assets/activelab.png";
import Frame from "../assets/Frame.png";

const Sidebar = () => {

  const location = useLocation();
  const isActive = location.pathname === "/";
  const isActivePatients = location.pathname === "/patients"; 
  const isActiveLab = location.pathname === "/lab-report";

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>
              <span className="nav-icon-dashboard-icon"><img src={isActive ? DashboardIconActive : DashboardIcon} alt="Dashboard" /></span>
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/patients" className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>
              <span className="nav-icon patients-icon"><img src={isActivePatients ?  ActivePatient : PatientIcon } /></span>
              <span className="nav-text">Patients</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/lab-report" className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}>
              <span className="nav-icon prescription-icon"><img src={isActiveLab ? ActiveLab : LabIcon} /></span>
              <span className="nav-text">Lab Report</span>
            </NavLink>
          </li>
          <li className="care-nav-item">
            <NavLink to="/care-ai" className={({ isActive }) => (isActive ? "care-nav-link-active" : "care-nav-link")}>
              <span className="nav-icon consultation-icon"><img src={CareIcon} /></span>
              <span className="care-nav-text">Care AI</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-user-avatar">
          <img src={Frame} alt="Dr. Martins James" />
        </div>
          <p className="sidebar-user-name">Dr Martins James</p>
      </div>
    </div>
  )
}

export default Sidebar
