import React from 'react'
import './ServiceBlock.css'

import ServiceFilter from './serviceFilter/ServiceFilter';
import Service from './service/Service';

const ServiceBlock = () => {
    return (
        <section id="serviceBlock">
            <ServiceFilter/>
            <Service/>
        </section>
    )
}

export default ServiceBlock;