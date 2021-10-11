import React from 'react';
import './Contact.css';

export default function Contact() {
    const checkemail = () =>{
    const email = document.querySelector('#email');
    if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email.style.borderColor = 'red';
    }else{
        email.style.borderColor = '#000';
    }
}
    const close = ()=>{
        window.location.reload();
        document.querySelector('.success').style.display = 'none';
    }
        const submitForm = () =>{
        const scriptURL = 'https://script.google.com/macros/s/AKfycby8kJ9vPTrq6M6Vj5bJAqfXrp678dIWnpHkuvWLT0yGURgYRNiW2LpDA7g9Hz7e3nJ2/exec';
        window.location += '';
        const email = document.querySelector('#email');
        if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        const Form = new FormData();
        Form.append('email',document.getElementById('email').value);
        Form.append('phone number',document.getElementById('phone_number').value);
        Form.append('message',document.getElementById('message').value);
        Form.append('name',document.getElementById('name').value);
        fetch(scriptURL, {mode: 'no-cors',method: 'POST', body: Form})
        .then(response =>{
             document.querySelector('.success').style.display = 'flex';
        })
        .catch(error =>{
            var fail = document.querySelector('.success');
            document.querySelector('.first_msg').innerText = 'Something went Wrong';
            fail.style.display = 'flex';
            console.error('Error!', error.message)
        });
        }else{
            var fail = document.querySelector('.success');
            console.log('fail');
            document.querySelector('.first_msg').innerText = 'Something went Wrong';
            document.querySelector('.second_msg').innerText = 'Please Enter Valid email!!!';
            fail.style.display = 'flex';
        }

    }
    return (
        <div className="contact" id="Contact">
            <div className='black_wrapper'></div>
            <h1>Get in touch</h1>
            <form onSubmit={submitForm}>
                <div className="form_wrapper">
                    <div className="wrapper">
                        <label>Name<span>*</span>:</label>
                        <input className="input" id="name" placeholder="Enter Your Name" required/>
                    </div>
                    <div className="wrapper">
                        <label>Phone number:</label>
                        <input className="input" id="phone_number" placeholder="Enter Your phone number"/>
                    </div>
                    <div className="wrapper">
                        <label>Email<span>*</span>:</label>
                        <input className="input" id="email" placeholder="Enter Your Email address" required onChange={checkemail}/>
                    </div>
                    <div className="wrapper">
                        <label>Message<span>*</span>:</label>
                        <textarea className="input" id="message" rows="3" col='3' placeholder="Enter Your Message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </div>
                <div className="success">
                    <div className="success_modal">
                        <button type="button" className="close" onClick={close}>X</button>
                        <h1 className="first_msg"> Successfully Sent...</h1>
                        <h2 className="second_msg">Thank you for contacting me.</h2>
                    </div>
                </div>
            </form>
        </div>
    )
}
