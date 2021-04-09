import React, { useContext, useEffect } from "react";
import { Jumbotron } from "react-bootstrap";

import { Context } from "../store/appContext";

const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<Jumbotron>
			<h1>Listado de Personajes</h1>
			<span>{JSON.stringify(store.peopleList)}</span>
		</Jumbotron>
	);
};

export default Characters;
