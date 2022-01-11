import React from "react";

function Image({srcImage, idImage, clase}) {
    return (
        <img className={clase} id={idImage} src={srcImage}/>
    )
}


export default Image;