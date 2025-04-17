import "../styles/StatisticsCards.css";

const StatisticsCard = ({ icon, value, description, percentage, isIncrease }) => {
  return (
    <div className="statistics-card">
      <div className="card-top">
        <img src={icon} />
        <div className="card-content">
        <h2 className="card-value">{value}</h2>
        <p className="card-description">{description}</p>
        </div>
      </div>
      <div className="card-stat">
        <p className={`card-percentage ${isIncrease ? 'increase' : 'decrease'}`}>
        <span className="arrow">{isIncrease ? '↑' : '↓'}</span>
          <span className="percentage">{percentage}</span><span className="percentage-text">{isIncrease ? ' more' : ' less'} than last month</span> 
        </p>
      </div>
    </div>
  );
};

export default StatisticsCard;