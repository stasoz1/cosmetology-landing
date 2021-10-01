import React from 'react'
import Review from './review/Review'
import './ReviewBlock.css'

const ReviewBlock = () => {
    return (
        <section id="reviewSec">
            <div id="reviewLeft" className="sectionLeft">
                <div className="mainHeading">
                    Отзывы
                </div>
                <div className="sectionDesc">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </div>
            </div>
            <div id="reviewList">
                <Review />
                <Review />
                <Review />
            </div>
        </section>
        
    )
}

export default ReviewBlock;