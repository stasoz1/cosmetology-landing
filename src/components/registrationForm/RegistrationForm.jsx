import React, { useState } from 'react'
import './RegistrationForm.css'
import logo from "../../images/form.png"
import InputMask from 'react-input-mask';
import emailjs from 'emailjs-com';

const RegistrationForm = () => {
    let [inpValue, setInpValue] = useState("")
    let [nameInpValue, setNameInpValue] = useState("")
        const changeInpValue = (e) => {
            e.target.name === "name" ? setNameInpValue(e.target.value) : setInpValue(e.target.value)
        }
            ;
        const sendEmail = (e) => {
            e.preventDefault();
            debugger
            const phoneLength = 16
            if(nameInpValue === "" ||
                inpValue === "" ||
                inpValue.length !== phoneLength) {
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
                    <div>{inpValue}</div>
                    <div>{nameInpValue}</div>
                    <input onChange={changeInpValue} placeholder="Имя" name="name" className="contactInp" mask="" alwaysShowMask = {true}/>
                    <InputMask onChange={changeInpValue} placeholder="Номер телефона" name="number" className="contactInp" mask="+38(999)999-9999" alwaysShowMask = {true}/>
                </div>
                <input type="submit" value="Записаться" id="formBut"/>
            </form>
        </section>
    )
}

export default RegistrationForm;