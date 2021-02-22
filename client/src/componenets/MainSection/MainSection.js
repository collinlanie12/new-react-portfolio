import React from 'react';
import ContactForm from '../ContactForm/ContactForm';


function MainSection() {

    return (
        <div id="wrapper">
            <section id="main">
                <header>
                    <span className="avatar"><img src="images/me.jpg" alt="Collin Lanier" /></span>
                    <h1>Collin Lanier</h1>
                    <p>Full Stack Web Developer</p>
                </header>
                <ContactForm />
                <footer>
                    <ul className="icons">
                        <li><a href="https://github.com/collinlanie12" className="icon brands fa-github">Github</a></li>
                        <li><a href="https://www.instagram.com/collin2chill/" className="icon brands fa-instagram">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/collin-lanier-a32762169/" className="icon brands fa-linkedin-in">Linkedin</a></li>
                        <li><a href="images/updatedresume.pdf" className="icon brands fa-readme">Resume</a></li>
                    </ul>
                </footer>
            </section>
        </div>
    );

}

export default MainSection;