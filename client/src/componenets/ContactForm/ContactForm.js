import React, { useState } from 'react';
import API from '../../lib/API';
import { store } from 'react-notifications-component';

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            store.addNotification({
                title: "Insufficient Information!",
                message: "Missing name, email, or message.",
                type: "warning",
                insert: "top",
                container: "bottom-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            store.addNotification({
                title: "Invalid Email!",
                message: "Make sure that is your correct email address.",
                type: "warning",
                insert: "top",
                container: "bottom-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        } else {
            API.Contact.mailMe(name, email, message)
                .then(response => {
                    if (response.data.status === 'success') {
                        resetForm();
                        store.addNotification({
                            title: "Message Sent!",
                            message: "I will contact you shortly.",
                            type: "success",
                            insert: "top",
                            container: "bottom-right",
                            animationIn: ["animate__animated", "animate__fadeIn"],
                            animationOut: ["animate__animated", "animate__fadeOut"],
                            dismiss: {
                                duration: 5000,
                                onScreen: true
                            }
                        });
                    } else if (response.data.status === 'fail') {
                        store.addNotification({
                            title: "Message did not send...",
                            message: "Try again later.",
                            type: "danger",
                            insert: "top",
                            container: "bottom-right",
                            animationIn: ["animate__animated", "animate__fadeIn"],
                            animationOut: ["animate__animated", "animate__fadeOut"],
                            dismiss: {
                                duration: 5000,
                                onScreen: true
                            }
                        });
                    }
                });
        }
    }

    function resetForm() {
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div>
            <hr />
            <h2>Contact Me</h2>
            <form method="POST" onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="field">
                        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                    </div>
                    <div className="field">
                        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="field">
                        <textarea name="message" id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" rows="4"></textarea>
                    </div>
                </div>
                <button className="actions special" type="submit">Send</button>
            </form>
            <hr />
        </div>
    );


}

export default ContactForm;