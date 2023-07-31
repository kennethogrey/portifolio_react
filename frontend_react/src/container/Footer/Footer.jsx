import React,{useRef, useState} from "react";
import emailjs from '@emailjs/browser'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../Wrapper'
import './Footer.scss'

const Footer = ()=>{

    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    
    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
        ).then((result)=>{
            console.log(result.text)
            setLoading(false)
            setIsFormSubmitted(true)
        }, (error)=>{
            console.log(error.text)
        })
    }

    return (
        <>
            <h2 className="head-text">Do you have a project for me?</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email"/>
                    <a href="mailto:ogirekenneth@gmail.com" className="p-text">ogirekenneth@gmail.com</a>
                </div>

                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile"/>
                    <a href="tel: +256 (781) 315-904" className="p-text">+256 (781) 315-904</a>
                </div>
            </div>


            {!isFormSubmitted ? 
                <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
                    <div className="app__flex">
                         <input className="p-text" type="text" placeholder="Your Name" name="user_name" />
                    </div>

                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="user_email" />
                    </div>
                    <div>
                        <textarea
                            className="p-text" 
                            placeholder="Your Message"
                            name='message'
                        />
                    </div>
                    <button type="submit" className="p-text">{loading ? 'Sending' :'Send message'}</button>
                </form>
                : <div>
                    <h3 className="head-text">Thank You for getting in Touch</h3>
                </div>
            }
            
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
)