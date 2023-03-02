import React from'react'
import photo from "../assets/photo-grid.png"
function Hero(){

    return(
        <div className="hero">
            <div classname= "img_container">
                <img src={photo}></img>
            </div>
            <strong>Online Experiences</strong>
            <div>sample text</div>
        </div>
    )
}
export default Hero