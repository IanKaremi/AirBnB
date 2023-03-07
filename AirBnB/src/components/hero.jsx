import React from'react'
import photo from "../assets/photo-grid.png"
function Hero(){

    return(
        <div>
            <div classname= "img_container">
                <img src={photo}></img>
            </div>

            <div classname="text">
                <p><strong>Online Experiences</strong></p>
                <p>sample text</p>
            </div>
            
        </div>
    )
}
export default Hero