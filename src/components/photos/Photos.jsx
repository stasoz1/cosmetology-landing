import React from 'react'
import './Photos.css'

import b1 from "../../images/mobileComp/1.jpg"
import a1 from "../../images/mobileComp/11.jpg"
import b2 from "../../images/mobileComp/2.jpg"
import a2 from "../../images/mobileComp/22.jpg"
import b3 from "../../images/mobileComp/3.jpg"
import a3 from "../../images/mobileComp/33.jpg"
import b4 from "../../images/mobileComp/4.jpg"
import a4 from "../../images/mobileComp/44.jpg"


const Photos = () => {
    return (
        <section id="photoSec">
            <div className="sectionLeft" >
                <h1 className="mainHeading">
                    Фото
                </h1>
                <div className="sectionDesc" id="photosDesc">
                    Фото наши клиентов, до и после процедур.
                </div>
            </div>
            <div id="photoList">
                <div className="befAf">До</div>
                <img src={b1} alt="examplePhoto"/>
                <img src={b2} alt="examplePhoto"/>
                <img src={b3} alt="examplePhoto"/>
                <div className="befAf">После</div>
                <img src={a1} alt="examplePhoto"/>
                <img src={a2} alt="examplePhoto"/>
                <img src={a3} alt="examplePhoto"/>
            </div>
        </section>
        
        
    )
}

export default Photos;