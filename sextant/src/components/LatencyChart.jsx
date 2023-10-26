// import React, { useState, useEffect, useRef } from 'react';
// import { Line } from 'react-chartjs-2';
// import PacketLatency from '../api/packetLatency';
// import Chart from 'chart.js'; // Import 'chart.js' to access the time scale

// const LatencyChart = () => {
//   const [data, setData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Latency (ms)',
//         data: [],
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderWidth: 2,
//       },
//     ],
//   });

//   const chartRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentTime = new Date().toLocaleTimeString();
//       const { latency } = PacketLatency();

//       setData((prevData) => {
//         const newLabels = [...prevData.labels, currentTime];
//         const newLatencyData = [...prevData.datasets[0].data, latency];

//         if (newLabels.length > 30) {
//           newLabels.shift();
//           newLatencyData.shift();
//         }

//         return {
//           labels: newLabels,
//           datasets: [
//             {
//               ...prevData.datasets[0],
//               data: newLatencyData,
//             },
//           ],
//         };
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <Line
//         data={data}
//         options={{
//           scales: {
//             x: {
//               type: 'time',
//               time: {
//                 unit: 'second',
//                 displayFormats: {
//                   second: 'h:mm:ss a',
//                 },
//               },
//               title: {
//                 display: true,
//                 text: 'Time',
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: 'Latency (ms)',
//               },
//             },
//           },
//         }}
//         ref={chartRef}
//       />
//     </div>
//   );
// };

// export default LatencyChart;
