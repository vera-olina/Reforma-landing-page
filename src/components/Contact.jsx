import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();
    const [isChecked, setIsChecked] = React.useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm(
        'service_3gs9ux8',
        'template_aayic98',
        form.current,
        // 'gpYnz7CxtDCimP3dq'
        process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log("Email sent successfully!", result.text)
            alert("Email sent successfully!")
            form.current.reset()
            setIsChecked(false)
        }, (error) => {
            console.log("Error sending email:", error.text)
        })
    }

    return (
        <section className="wraper-form-section">
            <img className="contact-emoji" src="/icon/emoji.png" width="72"/>
            <p>Fill out the form and we'll get in touch with you shortly.</p>

            <form ref={form} onSubmit={sendEmail}>

                <div className="form_component">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input
                        type="email" 
                        name="user_email"
                        placeholder="Your email"
                        required
                    />
                </div>

                <div className="form_component">
                    <label className="form-label" htmlFor="name">Name *</label>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="form_component">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Start typing here"
                    />
                </div>

                <div>
                    <label>
                        <input type="checkbox"
                            checked={isChecked}
                            name="newsletter"
                            onChange={handleCheckboxChange}
                        />
                        I agree to receive ocasional newsletter with latest news and updates
                    </label>
                </div>

                <div className="button-send-container">
                    <input className="button-send" type="submit" value="Send" />
                </div>

            </form>

            {/* <img className="contact-newspapper" src="/icon/newspaper.png" width="116"/> */}
            <p>Or contact us directly.</p>
        </section>
    )
}