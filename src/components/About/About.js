import React, { useState } from 'react';
import './About.css';

export default function About() {
   const [downloading,setDownload] = useState(true)
   function download(){
     document.querySelector('.wrap_icon i').style.animation = 'move linear 2s';
     setTimeout(()=>{
        setDownload(false);
     },2000);

     setTimeout(()=>{
      setDownload(true);
      document.querySelector('.wrap_icon i').style.animation = '';
    },6000);
   }
    return (
      <div className='about' id='About'>
        <div className='container'>
          <div className='about_me'>
            <h1>About Me</h1>
            <p>
            I am Ponnaganti Jai Venkata Manikanta, a web developer.Student at National Institue of Technology, Delhi.I like to do coding amd always ready to learn new tech skills.My tech includes HTML, CSS, JS, MongoDB, NodeJS, ExpressJS.Building Skills  on ReactJs.
            </p>
          </div>
    
          <div className='contact_details'>
            <h1>Contact  Details</h1>
            <p>Ponnaganti Jai Venkata Manikanta</p>
            <p>Malikipuram</p>
            <p>Andhra Pradesh, India</p>
            <a className='call_eamil' href='tel:+91 8790618202'>+91 8790618202</a>
            <a className='call_eamil' href='mailto:ponnagantimanikanta26@gmail.com'>ponnagantimanikanta26@gmail.com</a>
          </div>

          <div className='my_resume'>
            <h1>Download My Resume</h1>
            <a className='resume_box' href='/PonnagantiManikantaResume.docx' download onClick={download}>
              Resume
              <div className='wrap_icon'>
                <i className={downloading ?  "fas fa-download download_button" : "fas fa-check-circle downloaded"}>
                </i>
              </div>
            </a>
          </div>
    
        </div>
      </div>
    )
}
