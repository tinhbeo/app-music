import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ZingChart = () => {
  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 0,
        hoverRadius: 8,
        hoverBorderWidth: 3,
        pointBorderColor: "#fff",
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
      axis: "xy",
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: true,
        grid: {
          tickLength: 0,
          color: "#ccc",
          borderDash: [1, 5],
          drawBorder: true,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        display: true,
        grid: {
          tickLength: 0,
          drawBorder: false,
          drawOnChartArea: false,
        },
      },
    },
  };

  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        data: [120, 240, 500, 200, 400, 321, 111],
        borderColor: "#e35050",
        backgroundColor: "#e35050",
        cubicInterpolationMode: "monotone",
      },
      {
        data: [200, 300, 120, 270, 500, 454, 123],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(53, 162, 235)",
        cubicInterpolationMode: "monotone",
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export default ZingChart;
