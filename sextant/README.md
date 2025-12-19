# SEXTANT

A real-time network diagnostics dashboard built with React, featuring public IP address detection and live latency monitoring.

## Features

- **Public IP Detection**: Displays your public IPv4 and IPv6 addresses using the ipify API
- **Real-time Latency Chart**: Continuous time-series graph showing packet latency over time
- **WebSocket Communication**: Server sends timestamps, client calculates latency for accurate measurements
- **Responsive UI**: Clean, modern interface with status indicators

## Architecture

The application consists of two main components:

1. **WebSocket Server** (`server.js`): Sends timestamp data every second
2. **React Client**: Receives timestamps, calculates latency, and displays data in real-time

## Prerequisites

- Node.js (v16 or higher recommended)
- npm

## Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd sextant
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

You need to run the server and client in separate terminals:

### Terminal 1: Start the WebSocket Server
```bash
cd /path/to/sextant
node server.js
```
The server will start on `ws://localhost:55455`

### Terminal 2: Start the React Client
```bash
cd /path/to/sextant
npm start
```
The client will be available at `http://localhost:3000`

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. The dashboard will display:
   - Your public IPv4 address
   - Your public IPv6 address
   - A real-time latency chart showing network performance
3. The latency chart updates automatically every second with new measurements

## How It Works

- The WebSocket server sends the current timestamp every second
- The React client receives the timestamp and calculates latency as the difference between receive time and sent time
- Latency measurements are plotted on a time-series chart with automatic scaling
- Status indicators show connection health (green = connected, red = disconnected)

## Technologies Used

- **Frontend**: React 18, Chart.js with time-series support
- **Backend**: Node.js WebSocket server
- **APIs**: ipify.org for public IP detection
- **Styling**: CSS with responsive design

## Development

To modify the application:

- Server code: `server.js`
- Client code: `src/` directory
- Components: `src/components/`
- API hooks: `src/api/`

## Troubleshooting

- **Chart not updating**: Ensure both server and client are running
- **WebSocket connection failed**: Check that the server is running on port 55455
- **High latency**: For localhost testing, expect 1-10ms; real network conditions will show higher values

## License

This project is part of a Cisco starter repository for learning purposes.