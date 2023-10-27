import { useState, useEffect } from "react";
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
import PacketLatency from "../api/packetLatency";
import "./Exhibit.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const {labels, displayLatency} = PacketLatency();

const LatencyChart = () => {
  const [labels, setLabels] = useState([]);
  const [displayLatency, setDisplayLatency] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // const { currentTimestamp, latency } = PacketLatency();
      // Generate mock data for demonstration
      const currentTimestamp = new Date().toLocaleTimeString();
      const latency = Math.floor(Math.random() * 100);

      //real data
      // console.log(currentTimestamp, latency);

      // Update state with the mock data
      setLabels((labels) => [...labels, currentTimestamp]);
      setDisplayLatency((displayLatency) => [...displayLatency, latency]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Latency Chart (Mock Data)",
        color: "#00BCEB",
        font: "Courier New",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Latency",
        data: displayLatency,
        fill: false,
        borderColor: "#00BCEB",
        backgroundColor: "rgba(0, 188, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="chart" style={{ width: "70%" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LatencyChart;
