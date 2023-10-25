import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import GetIP from "./api/getIp";

function App() {
  const { ipv4, ipv6 } = GetIP();
  // console.log(`ipv4:${ipv4}, ipv6: ${ipv6}`);

  const widget1 = { heading: "Public IPV4 Address ", data: ipv4 };
  const widget2 = { heading: "Public IPV6 Address", data: ipv6 };
  const widget3 = { heading: "Widget3", data: "Data3" };
  const widget4 = { heading: "Widget4", data: "Data4" };

  return (
    <div className="App">
      <Banner />
      <div className="dashboard">
        <Exhibit widget={widget1} />
        <Exhibit widget={widget2} />
        <Exhibit widget={widget3} />
        <Exhibit widget={widget4} />
      </div>
    </div>
  );
}

export default App;
