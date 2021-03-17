import React from "react";
import SocialLinks from "../components/SocialLinks";

const About = () => {
	return (
		<div className="pageContent">
			<div className="article">
				<p>
					I'm Helsinki, Finland based almost graduated ICT student specializing
					to web development. I'm currently looking for a first job as a junior
					developer. My main focus is on front end development but I also have a
					bit experience from back end coding. My future goal is to reach a full
					stack developer role.
				</p>
			</div>
			<div className="article">
				<p>
					Check out my projects from projects page or from my GitHub profile.
					Also feel free to connect with me in LinkedIn or drop me a mail in
					finnish or in english!
				</p>
			</div>
			<div className="article">
				<p>
					<b>Skills: </b> HTML5, CSS3, JavaScript, React, Vue, Node
				</p>
			</div>
			<SocialLinks />
		</div>
	);
};

export default About;
