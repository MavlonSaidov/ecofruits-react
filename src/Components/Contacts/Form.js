import React, { useRef } from 'react'
import './Form.scss'
import emailjs from "emailjs-com";
const Form = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_91gxngs",
                "template_mxcqjd3",
                form.current,
                "59QksrKdFRSaR-2bK"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
            form.current.reset()
    };

    return (
        <form className='form' ref={form} onSubmit={sendEmail}>
            <div className="input-container">
            <input className='form__input' type="text" id="name" name='name' placeholder=" " required/>
            <label for="name">Имя</label>
            </div>
            
            <div className="input-container">
            <input className='form__input' type="email" id="email" name='email' placeholder=" " required/>
            <label for="email">Эл. адрес</label>
            </div>

            <div className="input-container">
            <input className='form__input' type="text" id="theme" name='theme' placeholder=" " required/>
            <label for="theme">Тема</label>
            </div>
            
            <div className="input-container">
            <input className='form__input' type="text" id="comment" name='comment' placeholder=" " required/>
            <label for="comment">Комментарий</label>
            </div>

            <input type="submit" className="form__btn" value='Отправить'/>

        </form>
    )
}

export default Form