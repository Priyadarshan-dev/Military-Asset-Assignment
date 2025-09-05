import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ["Weapon", "Vehicle", "Ammunition"],
    datasets: [
      {
        label: "Assets by Type",
        data: [60, 25, 15],
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: "top", 
      },
      title: {
        display: false, 
      },
    },
  };

  return (
    <div className="w-full h-[300px]"> 
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
