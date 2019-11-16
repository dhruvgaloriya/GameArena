import React, { Component } from "react";
//import ir from "../data/restaurant.json";
export default class home extends Component {
	state = {
		data: [],
		loading: true,
		searchItems: [],
		error: false,
		isSearch: false
	};

	componentDidMount() {
		//	const url = ;
		fetch("https://api.jsonbin.io/b/5d45e4d789ed890b24cb25f5")
			.then(res => res.json())
			.then(data =>
				this.setState({
					data,
					searchItems: data,
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

	handleChange = e => {
		if (e.target.value !== "") {
			var objects = this.state.data;

			var results = [];
			//console.log(objects[1]);
			for (let i = 1; i < objects.length; i++) {
				for (let key in objects[i]) {
					if (typeof objects[i][key] == "number") {
						if (objects[i][key] == e.target.value) {
							results.push(objects[i]);
						}
					} else {
						if (
							objects[i][key]
								.toLowerCase()
								.includes(e.target.value.toLowerCase())
						) {
							results.push(objects[i]);
						}
						//console.log(objects[i][key]);
					}
				}
			}
			this.setState({
				searchItems: results
			});
		} else {
			this.setState({
				searchItems: this.state.data
			});
		}
		//console.log(results);
	};

	render() {
		if (this.state.loading) {
			return (
				<div className="container">
					<center style={{ marginTop: "20%" }}>
						<div className="preloader-wrapper big active">
							<div className="spinner-layer spinner-blue-only">
								<div className="circle-clipper left">
									<div className="circle"></div>
								</div>
								<div className="gap-patch">
									<div className="circle"></div>
								</div>
								<div className="circle-clipper right">
									<div className="circle"></div>
								</div>
							</div>
						</div>
					</center>
				</div>
			);
		} else {
			return (
				<div className="container">
					<nav style={{ marginTop: "5%" }}>
						<div className="nav-wrapper">
							<form>
								<div className="input-field">
									<input
										id="search"
										type="search"
										onChange={e => this.handleChange(e)}
										//required
									/>
									<label className="label-icon">
										<i className="material-icons">search</i>
									</label>
									<i className="material-icons">close</i>
								</div>
							</form>
						</div>
					</nav>
					{this.state.searchItems.length == 0 ? (
						<div className="row">
							<h2>No Results Found !!</h2>
						</div>
					) : (
						<div className="row">
							{this.state.searchItems.map((item, index) => (
								<div
									className="col s12 m6"
									style={{ marginTop: "10px" }}
									key={index}
									tabIndex={index + 1}
								>
									<div className="card" key={index}>
										<div className="card-content">
											<h6 className="card-title">
												{item["title"] || "Double Dragon: Neon"}
											</h6>
										</div>
										<div className="card-action">
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
												<div className="chip">Score: {item["score"] || 5}</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			);
		}
	}
}
