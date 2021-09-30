import React from 'react'
import './ServiceFilter.css'

const ServiceFilter = () => {
    return (
        <div id="serviceFilter">
            <div className="sectionLeft">
                <h1 className="mainHeading">
                    Услуги
                </h1>
                <div className="sectionDesc" id="filterDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div id="filterSect">
                <h3>
                    Фильтры:
                </h3>
                <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                    <li>Sed</li>
                    <li>Dolor sit</li>
                    <li>Consect</li>
                    <li>Tempor</li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceFilter;