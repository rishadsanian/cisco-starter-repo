import { useState, useEffect } from 'react';
import { w3cwebsocket } from 'websocket';

function PacketLatency() {
  const [latency, setLatency] = useState(null);
  const [latencyStatus, setLatencyStatus] = useState("red");
  useEffect(() => {
    // Connect to the WebSocket server
    const client = new w3cwebsocket('ws://localhost:55455');

    // Handle incoming messages from the server
    client.onopen = () => {
      // console.log('WebSocket client connected');
      setLatencyStatus("green");
    };

    client.onmessage = (message) => {
      const timestamp = parseInt(message.data);
      // console.log("timestamp:", timestamp); 
      // console.log("date.now:",Date.now());
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - timestamp;
      // console.log("packetlatency:", packetLatency);
      setLatency(packetLatency);
      setLatencyStatus("green");
    };

    client.onclose = () => {
      setLatencyStatus("red");
    };
  }, []);

  return { latency,  latencyStatus };
}

export default PacketLatency;