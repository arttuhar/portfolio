import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = () => {
	return (
		<div className="socialLinks">
			<a href="https://github.com/arttuhar" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={["fab", "github"]} className="faIcon" />
			</a>
			<a
				href="https://www.linkedin.com/in/arttu-hartikainen-1a5244179/"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={["fab", "linkedin"]} className="faIcon" />
			</a>
			<a href="mailto: arttuhar@metropolia.fi" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon="envelope" className="faIcon" />
			</a>
		</div>
	);
};

export default SocialLinks;
