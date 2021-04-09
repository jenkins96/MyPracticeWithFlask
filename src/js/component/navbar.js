import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";

export const NavbarMenu = () => {
	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Link to="/planets" className="nav-link">
					Planets
				</Link>
				<Link to="/characters" className="nav-link">
					Characters
				</Link>
			</Nav>
			<DropdownButton id="dropdown-basic-button" title="Dropdown button">
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
			</DropdownButton>
		</Navbar>
	);
};
