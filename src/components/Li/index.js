import React from "react";

function Li({ buttonText, callback }) {
	return (
		<div>
			<button onClick={callback}>{buttonText}</button>
		</div>
	);
}

export default Li;