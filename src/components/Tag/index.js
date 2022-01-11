import React from "react";

function Tag({element}) {
    return (
        <a href="#" className="text-black-50 me-3">
            <span className="text-black-50">#</span>
                {element}
        </a>        
    )
}

export default Tag;

