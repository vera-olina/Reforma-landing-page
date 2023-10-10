import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();

        // EmailJS service ID, template IS, and Public Key
        const serviceId = "service_5fe5c8k"
        const templateId = "template_pj6qphg"
        const publicKey = "gpYnz7CxtDCimP3dq"

        //Object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'The Reforma Team',
            message: message
        }

        //Send the email using Email JS
        emailjs.send(serviceId, templateId, publicKey, templateParams)
            .then((response) => {
                console.log("Email sent successfully!", response)
                setName("")
                setEmail("")
                setMessage("")
            })
            .catch ((error) => {
                console.error("Error sending email:", error)
            })
    }

    return (
        <section className="wraper-form-section">
            <img className="contact-emoji" src="../public/icon/emoji.png" width="72"/>
            <p>Fill out the form and we'll get in touch with you shortly.</p>
            <form onSubmit={handleSubmit}>
                <div className="form_component">
                    <label className="form-label"for="email">Email *</label>
                    <input
                        type="email" 
                        value={email}
                        placeholder="Your email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form_component">
                    <label className="form-label" for="name">Name *</label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Your name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form_component">
                    <label className="form-label" for="message">Message</label>
                    <input
                        type="text"
                        value={message}
                        placeholder="Start typing here"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="newsletter"/>
                        I agree to receive ocasional newsletter with latest news and updates
                    </label>
                </div>
                <div className="button-send-container">
                    <button class="button-send" type="submit">
                        Send
                    </button>
                </div>
            </form>
            {/* <img className="contact-newspapper" src="../public/icon/newspaper.png" width="116"/> */}
            <p>Or contact us directly.</p>
        </section>
    )
}

