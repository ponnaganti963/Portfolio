import React, {useState} from 'react';
import './Topbar.css';

export default function Topbar() {
const [click, setClick] = useState(false);
const [navbar, setnavbar] = useState(false);
const  handleClick = () =>{
   setClick(!click)
 }


const backgroundChange = () =>{
   if(window.scrollY >= 62){
     setnavbar(true)
   }else{
     setnavbar(false)
   }
 }
 window.addEventListener('scroll',backgroundChange);
    return (
        <div className={navbar||click ? 'topbar changebackground' : 'topbar'}>
                <div className="icon">
                    <i className="fab fa-react"></i>
                </div>
                <div className="menu-icon" onClick= {handleClick}>
                    <i className={click ? "fas fa-times" :"fas fa-bars"}></i>
                </div>
                <ul className={click ? 'nav_items active' : 'nav_items'}>
                    <li className={navbar||click ? 'nav_item changehover': 'nav_item'} onClick = {handleClick}><a href="#Intro">Intro</a></li>
                    <li className={navbar||click ? 'nav_item changehover': 'nav_item'} onClick = {handleClick}><a href="#About">About</a></li>
                    <li className={navbar||click ? 'nav_item changehover': 'nav_item'} onClick = {handleClick}><a href="#Project">Works</a></li>
                    <li className={navbar||click ? 'nav_item changehover': 'nav_item'} onClick = {handleClick}><a href="#Contact">Contact</a></li>
                </ul>
        </div>
    )
}
