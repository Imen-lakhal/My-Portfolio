import React, { useState } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';
import './contact.css';
import shapeOne from '../../assets/shape-1.png';
import axios from 'axios';

const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        mail:'',
        subject:'',
        message:'',
    })
    
    const handleChange = (event) => {
        setValues({ ...values , [event.target.name]: event.target.value });
    }
    

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form refreshing the page

        console.log("Form Values:", values);
        axios.post('http://localhost:8000/create', values)
            .then((response) => {
                console.log("Response:", response);
                setValues({
                    name: '',
                    mail: '',
                    subject: '',
                    message: ''
                });
                
            })
            .catch(error => {
                console.log("Error:", error);
                
            });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">Contact Me</h2>
            <p className="section__subtitle">
                Let's <span>Talk About Ideas</span>
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>
                        <h3 className="contact__card-title">Address</h3>
                        <p className="contact__card-data">Tunis, Tunisia</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>
                        <h3 className="contact__card-title">Job</h3>
                        <p className="contact__card-data">Available Right Now</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">imen.lakhal@ensi-uma.tn</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>
                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">+216 53480951</p>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Your Full Name <b>*</b></label>
                            <input type="text" name="name" onChange={handleChange} value={values.name} className="contact__form-input" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
                            <input type="email" name="mail" onChange={handleChange} value={values.mail} className="contact__form-input" />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your Subject <b>*</b></label>
                        <input type="text" name="subject" onChange={handleChange} value={values.subject} className="contact__form-input" />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">Your Message <b>*</b></label>
                        <textarea name="message" onChange={handleChange} value={values.message} className="contact__form-input"></textarea>
                    </div>

                    <div className="contact__submit">
                        <p>*Accept the terms and conditions.</p>
                        <button type="submit" className="btn text-cs" style={{ marginTop: '20px' }}>Send Message</button>
                    </div>
                </form>
            </div>

            <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className="shape" />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">
                    Contact Me
                </span>
            </div>
        </section>
    );
};

export default Contact;
