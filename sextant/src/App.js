import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";

function App() {
	return (
		<div className="App">
			<Banner />
      <Exhibit title="Exhibit 1"></Exhibit>
      <Exhibit title="Exhibit 2"></Exhibit>
      <Exhibit title="Exhibit 3"></Exhibit>
      <Exhibit title="Exhibit 4"></Exhibit>
      <Exhibit title="Exhibit 5"></Exhibit>
		</div>
	);
}

export default App;
