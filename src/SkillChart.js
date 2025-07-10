import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const SkillChart = () => {
  const skillCounts = {
    React: 1,
    CSS: 1,
    HTML: 1,
    Python: 2,
    Pandas: 1,
    SQL: 1,
    "Node.js": 1,
    Express: 1,
    MongoDB: 1,
    "scikit-learn": 1,
    SVM: 1,
  };

  const labels = Object.keys(skillCounts);
  const data = {
    labels,
    datasets: [
      {
        label: "Skill Demand (Job Count)",
        data: Object.values(skillCounts),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div style={{ width: "80%", margin: "40px auto" }}>
      <h3>Top In-Demand Skills</h3>
      <Bar data={data} />
    </div>
  );
};

export default SkillChart;