import React from "react";
import Buttons from "../../components/Buttons";

const GithubCopy = () => {
	return (
		<div className="pageContent">
			<div className="article">
				<p>
					Fully responsive GitHub dashboard copy. Main focus of this project is
					to imitate GitHub dashboard layout best as I can. Project contains
					minimal amount of functionality which affects to layout like opening
					menus and modals. Deeper functionality like signing in, signing out or
					creating repositories, is left off. App is hard coded to look like
					someone is logged in. Project is made for representing ability to
					create user interfaces.
				</p>
			</div>
			<div className="article">
				<p className="article">
					<b>Technologies: </b>React, Material UI, Heroku
				</p>
			</div>
			<Buttons
				demoLink="https://github-copy.herokuapp.com"
				codeLink="https://github.com/arttuhar/react-github-copy"
			/>
		</div>
	);
};

export default GithubCopy;
