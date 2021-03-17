import React from "react";
import Buttons from "../../components/Buttons";

const MovieDb = () => {
	return (
		<div className="pageContent">
			<div className="article">
				<p>
					Simple movie database type app. App contains search bar which allows
					user to search movies by title and returns matching results. By
					clicking result, app shows more details about selected movie like
					title, release year, imdb rating, poster and plot. Project is made for
					representing ability to use API's. API key is get from{" "}
					<a href="http://www.omdbapi.com" target="_blank" rel="noreferrer">
						OMDb API
					</a>
					.
				</p>
			</div>
			<div className="article">
				<p>
					<b>Technologies: </b>React, Material UI, Heroku
				</p>
			</div>
			<Buttons
				demoLink="https://reactmoviedb.herokuapp.com"
				codeLink="https://github.com/arttuhar/movieDB"
			/>
		</div>
	);
};

export default MovieDb;
