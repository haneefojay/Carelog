import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Patients = () => {
    return (
      <div>
        <Header />
        <div className="layout">
          <Sidebar />
          <div className="main-content">
            <p>Hi everyone</p>
          </div>        
        </div>
      </div>
    )
  }
  
  export default Patients
  