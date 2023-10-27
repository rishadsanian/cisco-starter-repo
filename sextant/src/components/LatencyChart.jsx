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
const LatencyChart = () => {
  const [labels, setLabels] = useState([]);
  const [displayLatency, setdisplayLatency] = useState([]);
  // const [latencyStatus, setLatencyStatus] = useState("");
  // const [currentTimestamp, setCurrentTimestamp] = useState("");

  const { latency, currentTimestamp } = PacketLatency();

  useEffect(() => {
    const interval = setInterval(() => {
      //I want to set the state of the display latency array to the latency array from the imported latency and currentTimeStamp from packet latency
      setLabels((labels) => [...labels, currentTimestamp]);
      setdisplayLatency((displayLatency) => [...displayLatency, latency]);
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
        text: "Latency Chart",
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
    <div className="chart" style={{ width: "30%" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LatencyChart;
