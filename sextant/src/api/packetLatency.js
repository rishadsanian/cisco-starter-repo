import { useState, useEffect } from 'react';
import { w3cwebsocket } from 'websocket';

function PacketLatency() {
  const [latency, setLatency] = useState(null);
  const [latencyStatus, setLatencyStatus] = useState("red");
  useEffect(() => {
    const client = new w3cwebsocket('ws://localhost:55455');

    // Handle incoming messages from the server

    // connect to the server
    client.onopen = () => {
      setLatencyStatus("green");
    };

    //incoming messages
    client.onmessage = (message) => {
      const timestamp = parseInt(message.data);
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - timestamp;
      setLatency(packetLatency);
      setLatencyStatus("green");
      // client.close(); // close connection - to add flicker effect
    };
    
    //closing messages
    client.onclose = () => {
      setLatencyStatus("off");
    };
  }, [latencyStatus]);

  return { latency,  latencyStatus };
}

export default PacketLatency;