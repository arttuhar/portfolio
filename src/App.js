import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

import About from "./pages/About";
import Projects from "./pages/Projects";
import GithubCopy from "./pages/projectItems/GithubCopy";
import MovieDB from "./pages/projectItems/MovieDb";
import Portfolio from "./pages/projectItems/Portfolio";

import Navbar from "./components/Navbar";
import FontAwesome from "./components/FontAwesome";

const routes = [
	{ path: "/", name: "About", Component: About },
	{ path: "/projects", name: "Projects", Component: Projects },
	{ path: "/portfolio", name: "portfolio", Component: Portfolio },
	{ path: "/githubcopy", name: "GithubCopy", Component: GithubCopy },
	{ path: "/moviedb", name: "MovieDB", Component: MovieDB },
];

function App() {
	const onEnter = node => {
		gsap.from(
			[
				node.children[0].children[0],
				node.children[0].children[1],
				node.children[0].children[2],
				node.children[0].children[3],
			],
			0.6,
			{
				y: 30,
				delay: 0.6,
				ease: "expo.InOut",
				opacity: 0,
				stagger: {
					amount: 0.6,
				},
			}
		);
	};

	const onExit = node => {
		gsap.to(
			[
				node.children[0].children[0],
				node.children[0].children[1],
				node.children[0].children[2],
			],
			0.6,
			{
				y: -30,
				ease: "expo.InOut",
				stagger: {
					amount: 0.6,
				},
			}
		);
	};

	return (
		<>
			<Navbar />
			<div className="container">
				{routes.map(({ name, path, Component }) => (
					<Route key={name} path={path} exact>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={1200}
								classNames="page"
								unmountOnExit
								onEnter={onEnter}
								onExit={onExit}
							>
								<div className="page">
									<Component />
								</div>
							</CSSTransition>
						)}
					</Route>
				))}
			</div>
		</>
	);
}

export default App;
