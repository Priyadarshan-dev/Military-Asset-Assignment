import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: ["Weapon", "Vehicle", "Ammunition"],
    datasets: [
      {
        label: "Available",
        data: [1200, 1000, 9000],
        backgroundColor: "#10B981",
      },
      {
        label: "Assigned",
        data: [500, 400, 2000],
        backgroundColor: "#F59E0B", 
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
    <div className="w-full h-[300px] md:h-[400px] max-w-4xl mx-auto p-4">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;