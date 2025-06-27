import React, { useRef , useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchlogo from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef= useRef();

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY >=80){
                navRef.current.classList.add('nav-dark');
            }
            else{
                navRef.current.classList.remove('nav-dark');
            }
        });
    })
  return (
    <div ref={navRef} className="navbar">
        {/* NAVBAR LEFT */}
    <div className="navbar-left">
        <img src={logo}></img>
        <ul>
            <li> Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My list</li>
            <li>Browse by Languages</li>
          
        </ul>
        
    </div>
    {/* NAVBAR RIGHT */}
    <div className="navbar-right">
    <img src={searchlogo} className="icons"></img>
    <p>Children</p>
     <img src={bellIcon} className="icons"></img>
     <div className="navbar-profile">
        <img src={profile_img} className="profile"></img>
        <img src={caretIcon} ></img>
        <div className="dropdown">
            <p onClick={()=>{logout()}}>
                Sign Out of Netflix
            </p>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Navbar