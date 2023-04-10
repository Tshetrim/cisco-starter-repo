import React, { useState, useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const LatencyChecker = () => {
	const [latency, setLatency] = useState(null);
	const [latencyHistory, setLatencyHistory] = useState([]);
	const [minLatency, setMinLatency] = useState(null);
	const [maxLatency, setMaxLatency] = useState(null);

	useEffect(() => {
		const websocket = new WebSocket("ws://localhost:55455");

		websocket.onopen = () => {
			console.log("WebSocket connected");
		};

		websocket.onmessage = (event) => {
			const data = JSON.parse(event.data);
			const packetTimestamp = data;
			const currentTime = Date.now();
			const latency = currentTime - packetTimestamp;
			console.log(data, currentTime, latency);
			setLatency(latency);

			setLatencyHistory((prevHistory) => [...prevHistory, latency]);

			setMinLatency((prevMinLatency) =>
				prevMinLatency === null || latency < prevMinLatency ? latency : prevMinLatency
			);
			setMaxLatency((prevMaxLatency) =>
				prevMaxLatency === null || latency > prevMaxLatency ? latency : prevMaxLatency
			);
		};

		websocket.onclose = () => {
			console.log("WebSocket disconnected");
		};

		websocket.onerror = (error) => {
			console.error("WebSocket error:", error);
		};

		// Clean up the websocket connection on unmount
		return () => {
			websocket.close();
		};
	}, []);

	return (
		<div>
			<h4>Packet Latency</h4>
			{latency !== null ? (
				<>
					<p>The packet latency is: {latency} ms</p>
					<p>Minimum latency: {minLatency} ms</p>
					<p>Maximum latency: {maxLatency} ms</p>
					<div style={{ width: "100%", height: "15vh" }}>
						<Sparklines data={latencyHistory} style={{ width: "100%", height: "100%" }}>
							<SparklinesLine color="blue" />
						</Sparklines>
					</div>
				</>
			) : (
				<p>Waiting for packet...</p>
			)}
		</div>
	);
};

export default LatencyChecker;
