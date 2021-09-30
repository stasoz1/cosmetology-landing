import React from 'react'
import './Photos.css'

import photo from "../../images/photoComp/1.png"

const Photos = () => {
    return (
        <section id="photoSec">
            <div className="sectionLeft" >
                <h1 className="mainHeading">
                    Фото
                </h1>
                <div className="sectionDesc" id="photosDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div id="photoList">
                <img src={photo} alt="examplePhoto" />
                <img src={photo} alt="examplePhoto" />
                <img src={photo} alt="examplePhoto" />
                <img src={photo} alt="examplePhoto" />
                <img src={photo} alt="examplePhoto" />
                <img src={photo} alt="examplePhoto" />
                <img src={photo} alt="examplePhoto" />
                <img src={photo} alt="examplePhoto" />
                <img src={photo} alt="examplePhoto" />
            </div>
        </section>
        
        
    )
}

export default Photos;