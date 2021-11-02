import React, { useState } from 'react'
import './RegistrationForm.css'
import logo from "../../images/form.png"
import InputMask from 'react-input-mask';
import emailjs from 'emailjs-com';

const RegistrationForm = () => {
        const sendEmail = (e) => {
            e.preventDefault();
            debugger
            const inputs = Array.from(document.querySelectorAll(".contactInp"))
            const phoneLength = 16
            if(inputs[0].value === "" ||
            inputs[1].value === "" ||
            inputs[1].value.length !== phoneLength) {
                console.log(inputs[1].value.length)
                alert("Невeрный ввод")
            }
            else {
                emailjs.sendForm('service_85keurj', 'template_1z8a80n', e.target, 'user_I9RkM2wjvwskcN9ZDoUS0')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                e.target.reset()
            }
            
        };
    
    return (
        <section id="formSec">
            <div className="sectionLeft">
                <div className="mainHeading">
                    Записаться
                </div>
                <div className="sectionDesc" id="formDesc">
                    Заполните форму, что бы записатся на прием и мы вам перезвоним.
                </div>
            </div>
            <img alt="logo" src={logo}/>
            <form onSubmit={sendEmail}>
                <div id="inputs">
                    <InputMask placeholder="Имя" name="name" className="contactInp" mask="" alwaysShowMask = {true}/>
                    <InputMask placeholder="Номер телефона" name="number" className="contactInp" mask="+38(999)999-9999" alwaysShowMask = {true}/>
                </div>
                <input type="submit" value="Записаться" id="formBut"/>
            </form>
        </section>
    )
}

export default RegistrationForm;