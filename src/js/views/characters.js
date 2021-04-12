import React, { useContext, useEffect } from "react";
import { Jumbotron, Button } from "react-bootstrap";

import { Context } from "../store/appContext";

const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<Jumbotron>
			<h1>Listado de Personajes</h1>

			<ul>
				{store.peopleList.map((item, index) => {
					return (
						<li key={index}>
							<span>{item.name}</span>
							<Button onClick={() => alert(item.name)} variant="outline-primary">
								Favorite
							</Button>
						</li>
					);
				})}
			</ul>
		</Jumbotron>
	);
};

export default Characters;
