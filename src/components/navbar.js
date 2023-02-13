import React from 'react'
// import {  Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { media } from "../libs/media";

export default function Navbar() {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
      color: isActive? "#E86A00" : "#000000 "
      
    };
  };


  return (
    <div className='flex w-100 bg-bpciwhite  h-20 flex-wrap justify-around item-center content-center  border-b-8 border-bcpiblue-100'>
    <div className='h-full'>
   
      
        <NavLink to="/">
        <div className="h-full w- md:w-20 lg:w-20">
          <img
            src={media.Logos.logo}
            className="w-16 md:w-20 lg:w-20"
            alt="logo"
          />
        </div>
      </NavLink>
  

    </div>

    <div className='h-full flex flex-wrap align-center item-center  content-center '>
    <ul className='flex align-center item-center gap-5'>
        <li>
      <NavLink className="h-full w- md:w-20 lg:w-20" style={navLinkStyles} to="/">
        <div className="h-full w- md:w-20 lg:w-20">
        Accueil
        </div>
      </NavLink>
        </li>
        <li>
        <NavLink style={navLinkStyles} className="h-full w- md:w-20 lg:w-20" to="/apropos">
        <div className="h-full w- md:w-20 lg:w-20">
        A propos
        </div>
      </NavLink>
        </li>
        <li  >
        <NavLink style={navLinkStyles } to="/depotplainte">
        <div className="h-full w-full md:w-full lg:w-full">
           Déposer une plainte
        </div>
      </NavLink>
        </li>
        <li>
       
        <NavLink style={navLinkStyles} to="/suivreplainte">
        <div className="h-full w-auto md:w-auto lg:w-auto">
            Suivre ma plainte
        </div>
      </NavLink>
        </li>
        <li>
      
        <NavLink style={navLinkStyles} to="/faq">
        <div className="h-full w-auto md:w-auto lg:w-auto">
          FAQ
        </div>
      </NavLink>
        </li>
        
        <li>
   
        <NavLink style={navLinkStyles} to="/contacts">
        <div className="h-full w- md:w-20 lg:w-20">
        Contacts
        </div>
      </NavLink>
        </li>

        </ul>
    
    

    </div>

  </div>
  )
}
