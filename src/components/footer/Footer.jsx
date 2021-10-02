import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
        <footer>
            <div id="footerLeft">
                <div className="mainHeading">
                    Контакты
                </div>
                <div id="underCont">
                    <div>
                        <span className="boldCont">Телефон:</span>
                        <span className="lightCont">+38 068 598-54-79</span>
                    </div>
                    <div>
                        <span className="boldCont">E-mail:</span>
                        <span className="lightCont">testmail@gmail.com</span>
                    </div>
                    <div>
                        <span className="boldCont">Часы работы:</span>
                        <span className="lightCont">08:00 - 18:00</span>
                    </div>
                    <div>
                        <span className="boldCont">Адрес:</span>
                        <span className="lightCont">Проспект Соборный, 218А, Запорожье</span>
                    </div>
                </div>
            </div>
            <iframe title="ourLocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4509.17225970256!2d35.20294821731614!3d47.77815410316509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc5ee6089359bd%3A0xb8b5a51c6c0b8e77!2z0YPQuy4g0JrRg9C70YzRgtGD0YDQvdCw0Y8sIDE3N9CQLCDQl9Cw0L_QvtGA0L7QttGM0LUsINCX0LDQv9C-0YDQvtC20YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY5MDAw!5e0!3m2!1sru!2sua!4v1633176482534!5m2!1sru!2sua" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        </footer>
        <div id="downFooter">
            © All Rights Reserved 2021.  Сайт разработан командой из “Company name”
        </div>
        </>
    )
}

export default Footer;