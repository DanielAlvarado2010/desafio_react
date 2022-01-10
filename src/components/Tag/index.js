import React from "react";

function Tag({element}) {
    return (
        <div className="badges mt-2 mb-4" id="contTags">
			<a href="#" className="text-black-50 me-3">
                <span className="text-black-50">#</span>
                {element}
            </a>
		</div>
    )
}

export default Tag;

