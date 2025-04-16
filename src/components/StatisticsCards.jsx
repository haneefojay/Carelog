import Users from "../assets/patientcount.png";
import Thermometer from "../assets/diagnosis.png";
import Bed from "../assets/bedcount.png";

const StatisticsCards = () => {
  // Sample statistics data - in a real app, this would come from an API or props
  const statistics = [
    {
      type: "patients",
      icon: <Users size={24} className="icon-white" />,
      value: "4,202",
      label: "Patients Diagnosed",
      change: "5.2% more than last month",
      trend: "up",
      bgColor: "bg-blue",
    },
    {
      type: "illness",
      icon: <Thermometer size={24} className="icon-white" />,
      value: "Fever",
      label: "Most common illness",
      change: "0.2% less than last month",
      trend: "down",
      bgColor: "bg-red",
    },
    {
      type: "beds",
      icon: <Bed size={24} className="icon-white" />,
      value: "65%",
      label: "Beds occupied",
      change: "0.2% more than last month",
      trend: "up",
      bgColor: "bg-purple",
    },
  ]

  return (
    <div className="statistics-grid">
      {statistics.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          change={stat.change}
          trend={stat.trend}
          bgColor={stat.bgColor}
        />
      ))}
    </div>
  )
}

// StatCard component directly included in the same file for simplicity
const StatCard = ({ icon, value, label, change, trend, bgColor }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className={`stat-icon ${bgColor}`}>{icon}</div>
        <div className="stat-info">
          <h3 className="stat-value">{value}</h3>
          <p className="stat-label">{label}</p>
        </div>
      </div>
      <div className="stat-footer">
        {trend === "up" ? <span className="trend-up">↑</span> : <span className="trend-down">↓</span>}
        <span className={trend === "up" ? "change-up" : "change-down"}>{change}</span>
      </div>
    </div>
  )
}

export default StatisticsCards
