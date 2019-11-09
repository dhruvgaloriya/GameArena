import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/header";
import Routes from "./component/routes";
function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes />
			</Router>
		</div>
	);
}

export default App;
