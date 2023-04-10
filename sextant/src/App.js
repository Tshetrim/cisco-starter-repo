import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPAddress from "./IPAddress";

function App() {
	const ipv4AddressComponent = <IPAddress version="ipv4" key="ipv4-1"></IPAddress>;
	const ipv6AddressComponent = <IPAddress version="ipv6" key="ipv6-2"></IPAddress>;

	return (
		<div className="App">
			<Banner />
			<Exhibit title="Exhibit 1" children={[ipv4AddressComponent, ipv6AddressComponent]}></Exhibit>
			<Exhibit title="Exhibit 2"></Exhibit>
		</div>
	);
}

export default App;
