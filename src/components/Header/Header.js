import React from 'react'
import "./Header.scss"
//Header component
// OnClick event is passed for the scenarios when a lot of products available and user has scrolled to bottom of the page
// Clicking on header scroll to the top
const logoURL = 'https://picnic.app/nl/wp-content/uploads/sites/18/2020/11/logo.svg'
const Header = () => {
    
    return (
        <span
        onClick={() => window.scroll(0,0)} className="header">
             <img src={logoURL} alt="Picnic Logo"/>
           <h4 className="mTitle">Picnic</h4>
       
        </span>
    )
}

export default Header
