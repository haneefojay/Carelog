import { useEffect, useState } from "react";
import ArrowUpRight from "../assets/activedashboard.png";
import ArrowDownRight from "../assets/activelab.png";

const DashboardCard = ({ icon, label, value, growth, isPositive }) => {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-[#E3E3E3] bg-white px-4 py-3 w-full max-w-[250px]">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#F1F1F1] rounded-md flex items-center justify-center">
          <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
        </div>
        <div className="text-xl font-semibold text-black">{value}</div>
      </div>
      <div className="text-sm text-[#8E8E8E]">{label}</div>
      <div className={`flex items-center text-xs ${isPositive ? "text-green-600" : "text-red-500"}`}>
        {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        <span className="ml-1">{growth}% {isPositive ? "more" : "less"} than last month</span>
      </div>
    </div>
  );
};

const DashboardCards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Replace this fetch with actual API endpoint
    const fetchData = async () => {
      const dummyData = [
        {
          icon: "/icons/patients.png",
          label: "Patients Diagnosed",
          value: "4,202",
          growth: 5.2,
          isPositive: true,
        },
        {
          icon: "/icons/fever.png",
          label: "Most common illness",
          value: "Fever",
          growth: -0.2,
          isPositive: false,
        },
        {
          icon: "/icons/bed.png",
          label: "Beds occupied",
          value: "65%",
          growth: 0.2,
          isPositive: true,
        },
      ];

      setCardData(dummyData);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {cardData.map((card, index) => (
        <DashboardCard key={index} {...card} />
      ))}
    </div>
  );
};

export default DashboardCards;
