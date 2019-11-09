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
		fetch("https://api.jsonbin.io/b/5d45e4d789ed890b24cb25f5")
			.then(res => res.json())
			.then(data =>
				this.setState({
					data,
					loading: false
				})
			)
			.catch(err =>
				this.setState({
					err: true,
					loading: false
				})
			);
	}

	render() {
		if (this.state.loading) {
			return (
				<div className="container">
					<center style={{ top: "50%" }}>
						<div class="preloader-wrapper big active">
							<div class="spinner-layer spinner-blue-only">
								<div class="circle-clipper left">
									<div class="circle"></div>
								</div>
								<div class="gap-patch">
									<div class="circle"></div>
								</div>
								<div class="circle-clipper right">
									<div class="circle"></div>
								</div>
							</div>
						</div>
					</center>
				</div>
			);
		} else {
			return (
				<div className="container">
					<div class="row">
						{this.state.data.map(item => (
							<div class="col s12 m6" style={{ marginTop: "10px" }}>
								<div class="card">
									<div class="card-content">
										<h6 class="card-title">
											{item["title"] || "Double Dragon: Neon"}
										</h6>
									</div>
									<div class="card-action">
										<div>
											<h6>
												Platform :{" "}
												<strong>{item["platform"] || "PlayStation 3"}</strong>
											</h6>
										</div>
										<div>
											<h6>
												Genre : <strong>{item["genre"] || "Sports"}</strong>
											</h6>
										</div>

										<div>
											<div class="chip">Score: {item["score"] || 5}</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			);
		}
	}
}
