import React from 'react';
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <a href="#Intro" className="link_to_top">
                <i className="fas fa-chevron-circle-up"></i>
            </a>
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
            <div className="footer_end">
                <h3>Made by PJV.</h3>
            </div>
        </div>
    )
}
