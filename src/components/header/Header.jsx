import React from 'react'
import './Header.css'

import logo from "../../images/logo.png"

const Header = () => {
    return (
    <>
        <header>
            <nav>
                <img alt="logo" src={logo}/>
                <div id="navbar">
                    <div>Главная</div>
                    <div>Обо мне</div>
                    <div>Услуги</div>
                    <div>Отзывы</div>
                    <div>Контакты</div>
                    <div>Связаться со мной</div>
                </div>
            </nav>
            <div id="headerMain">
                <h1>
                    Сделай шаг к здоровой коже
                </h1>
                <div id="underHeader">
                    Дерматокосметолог Елена Бастрикова
                </div>
                <button>
                    Связаться
                </button>
            </div>  
        </header>
    </>
    )
}

export default Header;