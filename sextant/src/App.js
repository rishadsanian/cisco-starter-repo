import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import LatencyChart from "./components/LatencyChart";

import GetIP from "./api/getIp";
import PacketLatency from "./api/packetLatency";

function App() {
  const { ipv4, ipv4status,ipv6, ipv6status } = GetIP();
  const { latency, latencyStatus } = PacketLatency();

  const widget1 = { heading: "Public IPV4 Address ", data: ipv4, width:"60vh", status: ipv4status };
  const widget2 = { heading: "Public IPV6 Address", data: ipv6, width:"60vh", status: ipv6status };
  const widget3 = { heading: "Latency (ms)", data: latency, width:"20%", status:latencyStatus};
  const widget4 = { heading: "Widget4", data: "Data4" };

  return (
    <div className="App">
      <Banner />
      <div className="dashboard">
        <Exhibit widget={widget1} />
        <Exhibit widget={widget2} />
        <Exhibit widget={widget3} />
        <LatencyChart />
        {/* <Exhibit widget={widget4} /> */}
      </div>
    </div>
  );
}

export default App;
