import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class header extends Component {
	render() {
		return (
			<div>
				<nav>
					<div class="nav-wrapper">
						<Link to="/" class="brand-logo">
							Game Arena
						</Link>
						<ul id="nav-mobile" class="right hide-on-med-and-down">
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
