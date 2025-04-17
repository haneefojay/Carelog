import React from 'react';
import StatisticsCard from './StatisticsCards';
import "../styles/StatSection.css";
import Users from "../assets/patientcount.png";
import Diagnosis from "../assets/diagnosis.png";
import Bed from "../assets/bedcount.png";


const StatSection = () => {
  return (
    <div className="statistics-section">
      <StatisticsCard
        icon={Users}
        value="4,202"
        description="Patients Diagnosed"
        percentage="5.2%"
        isIncrease={true}
      />
      <StatisticsCard 
        icon={Diagnosis}
        value="Fever"
        description="Most common illness"
        percentage="0.2%"
        isIncrease={false}
      />
      <StatisticsCard 
        icon={Bed}
        value="65%"
        description="Beds Occupied"
        percentage="0.2%"
        isIncrease={true}
      />
    </div>
  );
};

export default StatSection;