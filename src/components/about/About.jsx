import React from 'react'
import './About.css'
import girl from "../../images/aboutImg.png"

const About = () => {
    return (
        <section id="about">
            <div className="sectionLeft">
                <h1 className="mainHeading">
                    Обо мне
                </h1>
                <h1 className="mobMainHeading">
                    Моя мотивация - улыбки на лицах клиентов!
                </h1>
                <div className="sectionDesc">
                    Моя мотивация - улыбки на лицах моих клиентов после полученных результатов!
                </div>
            </div>
            <img id="aboutImg" alt="about img" src={girl}/>
            <div className="sectionDescMobile">
                <p>Закончила факультет лечебного дела в ЗГМУ.  Интерн в КМУ по специальности «дерматовенерология». Закончила международные курсы по косметологии. Практикующий дерматокосметолог. </p>
                <p>Моя цель - приводить в отличное состояние, с дальнейшим его поддержанием, наш самый большой орган - кожу!</p>
                <p>Применяю в своей практике классическую и аппаратную косметологию. Подбираю домашний уход по типу кожи. Рассказываю о новшествах в мире косметологии и про правильный уход за своим лицом.</p>  
            </div>
            <div id="aboutRight">
                <p>Закончила факультет лечебного дела в ЗГМУ.  Интерн в КМУ по специальности «дерматовенерология». Закончила международные курсы по косметологии, а так же курсы  повышения квалификации. Практикующий дерматокосметолог. </p>
                <p>Моя цель - приводить в отличное состояние, с дальнейшим его поддержанием, наш самый большой орган - кожу!</p>
                <p>Применяю в своей практике классическую и аппаратную косметологию. Подбираю домашний уход по типу кожи. Рассказываю о новшествах в мире косметологии и про правильный уход за своим лицом.</p>
            </div>
        </section>
    )
}

export default About;