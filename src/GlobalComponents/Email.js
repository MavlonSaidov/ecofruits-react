import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_91gxngs",
                "template_27u1f7w",
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
        <form className="footer__form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="ваше имя"/>
            <textarea id="textarea" name="message" placeholder="ваше сообщение" />
            <input type="email" name="email" placeholder="ваш email" />
            <input className="footer__btn" type="submit" value="Отправить" />
        </form>
    );
};

export default Email;
