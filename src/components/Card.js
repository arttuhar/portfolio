import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardLink, cardImage, cardHeader }) => {
	return (
		<div class="cardItem">
			<Link to={cardLink} class="card">
				<div class="thumb" style={cardImage}></div>
				<article>
					<p>{cardHeader}</p>
				</article>
			</Link>
		</div>
	);
};

export default Card;
