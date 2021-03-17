import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { gsap } from "gsap";

const CardGrid = () => {
	let card1 = useRef(null);
	let card2 = useRef(null);
	let card3 = useRef(null);

	useEffect(() => {
		gsap.from([card1, card2, card3], 0.6, {
			delay: 0.6,
			ease: "expo.InOut",
			y: 30,
			stagger: {
				amount: 0.6,
			},
		});
	}, [card1, card2, card3]);

	return (
		<div className="cardGrid">
			<div ref={el => (card1 = el)}>
				<Card
					cardHeader="Portfolio"
					cardLink="/portfolio"
					cardImage={{
						backgroundImage: "url(/thumbnails/portfolio1.png)",
					}}
				/>
			</div>
			<div ref={el => (card2 = el)}>
				<Card
					cardHeader="GitHub copy"
					cardLink="/githubcopy"
					cardImage={{
						backgroundImage: "url(/thumbnails/githubcopy.png)",
					}}
				/>
			</div>
			<div ref={el => (card3 = el)}>
				<Card
					cardHeader="Movie database"
					cardLink="/moviedb"
					cardImage={{
						backgroundImage: "url(/thumbnails/moviedb.png)",
					}}
				/>
			</div>
		</div>
	);
};

export default CardGrid;
