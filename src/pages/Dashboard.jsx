import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StatSection from "../components/StatSection";
import "../styles/Dashboard.css";

export default function Dashboard(){
    return(
        <div>
            <Header />
            <div className="layout">
                <Sidebar />
                <div className="main-content">
                    <div className="dashboard-container1">
                        <div className="statCards">
                            <StatSection />
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    )
}