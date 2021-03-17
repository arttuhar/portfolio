import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Buttons = ({ demoLink, codeLink }) => {
	return (
		<div className="projectButtons">
			<a href={demoLink} target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon="play-circle" className="faIcon" />
			</a>
			<a href={codeLink} target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={["fab", "github"]} className="faIcon" />
			</a>
		</div>
	);
};

export default Buttons;
