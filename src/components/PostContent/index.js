import React from "react";

import "./PostContent.css";

function PostContent({content}) {
    return (
        <p id="postContent">
			{content}
		</p>
    )
}


export default PostContent;