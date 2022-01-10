import React from "react";

function UserData({userName, datePost}) {
    return (
		<div id="data">
			<a href="#">
				<span class="crayons-link" id="userName">
					{userName}
				</span>
			</a>
			<p className="fs-xs color-base-60" id="datePost">
				{datePost}
			</p>
		</div>       
    )
}

export default UserData;




