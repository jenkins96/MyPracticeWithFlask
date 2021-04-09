import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Container, Row, Col } from "react-bootstrap";
import injectContext from "./store/appContext";

import { NavbarMenu } from "./component/navbar";
import { Footer } from "./component/footer";

import Planets from "./views/planets.js";
import Characters from "./views/characters.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<Container>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Row>
							<Col>
								<NavbarMenu />
							</Col>
						</Row>
						<Row>
							<Col>
								<Switch>
									<Route exact path="/">
										<Home />
									</Route>
									<Route exact path="/planets" component={Planets} />
									<Route exact path="/characters" component={Characters} />
									<Route exact path="/demo">
										<Demo />
									</Route>
									<Route exact path="/single/:theid">
										<Single />
									</Route>
									<Route>
										<h1>Not found!</h1>
									</Route>
								</Switch>
							</Col>
						</Row>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</Container>
		</div>
	);
};

export default injectContext(Layout);
