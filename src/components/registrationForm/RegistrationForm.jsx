import React from 'react'
import './RegistrationForm.css'
import logo from "../../images/form.png"

const RegistrationForm = () => {
    return (
        <section id="formSec">
            <div className="sectionLeft">
                <div className="mainHeading">
                    Записаться
                </div>
                <div className="sectionDesc" id="formDesc">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </div>
            </div>
            <img alt="logo" src={logo}/>
            <form>
                <div id="inputs">
                    <input type="text" placeholder="Имя" className="contactInp"/>
                    <input type="text" placeholder="Номер телефона" className="contactInp"/>
                </div>
                <input type="button" value="Записаться" id="formBut"/>
            </form>
        </section>
    )
}

export default RegistrationForm;