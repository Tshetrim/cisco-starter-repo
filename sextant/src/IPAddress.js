import React, { useState, useEffect } from "react";

const IPAddress = ({ version }) => {
	const [ipAddress, setIpAddress] = useState(null);
    let apiEndpoint = version === "ipv6" ? "https://ip.seeip.org/jsonip" : "https://api.ipify.org?format=json";

	useEffect(() => {
		const fetchIPAddress = async () => {
			try {
				const response = await fetch(apiEndpoint);
        		const data = await response.json();
				setIpAddress(data.ip);
			} catch (error) {
				console.error("Error fetching IP address:", error);
			}
		};

		fetchIPAddress();
	}, [apiEndpoint]);

	return (
		<div>
			<h4>{version.toUpperCase()} Address</h4>
			{ipAddress ? (
				<p>
					Your {version.toUpperCase()} address is: {ipAddress}
				</p>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default IPAddress;
