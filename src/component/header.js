import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class header extends Component {
	state = {
		toggle: false
	};

	onToggle = () => {
		this.setState({
			toggle: true
		});
	};

	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link to="/" className="brand-logo">
							Game Arena
						</Link>
						<Link
							to="/"
							data-target="mobile-demo"
							className="sidenav-trigger"
							onClick={this.onToggle}
						>
							<i class="material-icons">menu</i>
						</Link>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</div>
				</nav>
				<ul class="sidenav" id="mobile-demo">
					<li>
						<Link to="/">GameArena</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		);
	}
}
