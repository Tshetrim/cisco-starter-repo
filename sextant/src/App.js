import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPAddress from "./IPAddress";
import LatencyChecker from "./LatencyChecker";

function App() {
	const ipv4AddressComponent = <IPAddress version="ipv4" key="ipv4-1"></IPAddress>;
	const ipv6AddressComponent = <IPAddress version="ipv6" key="ipv6-1"></IPAddress>;
	const exhibit1Children = [ipv4AddressComponent, ipv6AddressComponent];

	const LatencyCheckerComponent = <LatencyChecker key="latency-1"></LatencyChecker>;


	return (
		<div className="App">
			<Banner />
			<Exhibit title="Exhibit 1" children={exhibit1Children}></Exhibit>
			<Exhibit title="Exhibit 2" children={[LatencyCheckerComponent]}></Exhibit>
		</div>
	);
}

export default App;
