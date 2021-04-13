import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

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
			<DropdownButton id="dropdown-basic-button" title={`Favorites ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.Item key={index} href="#/action-1">
							{item}
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</Navbar>
	);
};
