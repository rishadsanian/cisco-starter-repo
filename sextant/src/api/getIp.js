import { useState, useEffect } from "react";
import axios from "axios";

// Function to get your public IPv4 address
async function getIP(url) {
  try {
    const response = await axios.get(url);
    return response.data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return null;
  }
}

// Function to get both IPv4 and IPv6 addresses
function GetIP() {
  const [ipv4, setIPv4] = useState(null);
  const [ipv6, setIPv6] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const ipv4Address = await getIP("https://api.ipify.org?format=json");
      const ipv6Address = await getIP("https://api64.ipify.org?format=json");
      setIPv4(ipv4Address);
      setIPv6(ipv6Address);
    }
    fetchData();
  }, []);

  return { ipv4, ipv6 };
}

export default GetIP;
