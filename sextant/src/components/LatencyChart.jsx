// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import PacketLatency from '../api/packetLatency';

// const LatencyChart = () => {
//   const { latency, latencyStatus, currentTimestamp } = PacketLatency();
//   const 

//   const chartData = {
//     labels: currentTimestamp ? [currentTimestamp] : [],
//     datasets: [
//       {
//         label: 'Latency (ms)',
//         data: latency ? [latency] : [],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Packet Latency Chart:</h2>
//       <p>Status: {latencyStatus}</p>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default LatencyChart;