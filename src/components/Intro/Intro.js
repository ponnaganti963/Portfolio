import React from 'react';
import './Intro.css'

const Intro = () => {
    return (
        <div className="intro" id="Intro">
            <div className="left">
                <img src="images/my_img.png" alt="mypic"/>
            </div>
            <div className="right">
                <h1>Hey I'm Ponnaganti Jai Venkata Manikanta</h1>
                <h4>Web Developer.</h4>
                <div className="social_media">
                    <a href="https://github.com/ponnaganti963" rel="noreferrer" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.facebook.com/manikanta.ponnaganti.1" rel="noreferrer" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ponnaganti-manikanta-81b4251b2" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/pjv996633/" rel="noreferrer" target="_blank">
                        <i className="fab fa-instagram-square"></i>
                    </a>
                </div>
                <a href="#About" className="link_next">
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    )
}

export default Intro
