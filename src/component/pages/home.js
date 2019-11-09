import React, { Component } from "react";
//import ir from "../data/restaurant.json";
export default class home extends Component {
	state = {
		data: [],
		loading: true,
		error: false
	};

	componentDidMount() {
		//	const url = ;
		fetch("../data/restaurant.json")
			.then(res => res.json())
			.then(data => console.log(data.data))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="container">
				<h1>Home Page</h1>
			</div>
		);
	}
}
