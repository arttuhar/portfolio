import React from "react";
import Buttons from "../../components/Buttons";

const Portfolio = () => {
	return (
		<div className="pageContent">
			<div className="article">
				<p>
					Personal portfolio to showcase some of my projects. Project had two
					objectives. First was to create minimalistic layout with minimal amout
					of content which is browsable through within a one minute. And second
					objective was to create layout which looks same and works same way
					with all of different screen sizes.
				</p>
			</div>
			<div className="article">
				<p>
					<b>Technologies: </b>
					React, CSS, GSAP, Heroku
				</p>
			</div>
			<Buttons demoLink="#" codeLink="#" />
		</div>
	);
};

export default Portfolio;
