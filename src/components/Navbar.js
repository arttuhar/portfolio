import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="logo">
				<h1>Arttu Hartikainen</h1>
			</div>
			<div className="navbar">
				<NavLink to="/" exact activeStyle={{ fontWeight: "600" }}>
					about
				</NavLink>
				<NavLink to="/projects" exact activeStyle={{ fontWeight: "600" }}>
					projects
				</NavLink>
			</div>
		</>
	);
};

export default Navbar;
