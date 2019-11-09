import React from "react";
import { Route } from "react-router-dom";
import Home from "../component/pages/home";
import About from "../component/pages/about";
export default function routes() {
	return (
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</div>
	);
}
