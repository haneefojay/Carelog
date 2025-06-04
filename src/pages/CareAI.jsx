import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import CareChat from "../components/CareChat"

export default function CareAI() {
  return (
    <div>
      <Header />
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <CareChat />
        </div>        
      </div>
      
    </div>
  )
}