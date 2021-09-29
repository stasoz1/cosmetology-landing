import React from 'react'
import './Service.css'
import ServiceItem from "../serviceItem/SevriceItem"
import fIcon from "../serviceImages/1.png"

const Service = () => {
    const data = {
        img:fIcon,
        heading:"Карбокситерапия",
        price:"700 грн",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}

    return (
        <div id="serviceList">
            <ServiceItem data={data}/>
            <ServiceItem data={data}/>
            <ServiceItem data={data}/>
            <ServiceItem data={data}/>
            <ServiceItem data={data}/>
            <ServiceItem data={data}/>
            <ServiceItem data={data}/>
            <ServiceItem data={data}/>
            <ServiceItem data={data}/>
        </div>
    )
}

export default Service;