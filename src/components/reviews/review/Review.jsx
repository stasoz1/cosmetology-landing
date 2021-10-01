import React from 'react'
import './Review.css'

import avatar from "../../../images/avatar.png"

const Review = () => {
    return (
        <div className ="reviewItem">
            <div className="userInfo">
                <img src={avatar} alt="userAvatar"/>
                <div className="userName">
                    <div>
                        Имя Фамилия
                    </div>
                    <div>
                        20.20.2020
                    </div>
                </div>
            </div>
            <div className="reviewText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
        </div>
    )
}

export default Review;