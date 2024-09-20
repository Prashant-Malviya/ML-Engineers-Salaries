import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineGraph = ({ data }) => {
  const years = ['2020', '2021', '2022', '2023', '2024'];
  const salaries = years.map(
    (year) =>
      data
        .filter((row) => row.work_year === year)
        .reduce((sum, row) => sum + parseInt(row.salary_in_usd), 0) /
      data.filter((row) => row.work_year === year).length || 0
  );

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Average Salary (USD)',
        data: salaries,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // To allow resizing the graph
  };

  return (
    <div className="h-72 space-y-4 my-4">
      <h3 className='text-center font-bold'>Graph Of Changing Salaries from 2020-2024</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineGraph;
