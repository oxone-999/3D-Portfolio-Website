import React from "react";
import { ReactNavbar } from "overlay-navbar";
import {FaUserAlt} from "react-icons/fa";

function Header(){
    return (
        <ReactNavbar
            navColor1="white"
            navColor2="rgb(220,30,131)"
            burgerColor="rgb(220,30,131)"
            burgerColorHover="#3B3B3B"
            logo="images/O1-01.png"
            logoWidth="250px"
            logoHoverColor=""
            nav2justifyContent="space-around"
            nav3justifyContent="space-around"
            link1Text="Home"
            link2Text="About"
            link3Text="Projects"
            link4Text="Contact"
            link1Url="/"
            link2Url="/about"
            link3Url="/projects"
            link4Url="/contact"
            link1ColorHover="#3B3B3B"
            link1Color="white"
            link1Size="1.5rem"
            link1Padding="3vmax"
            profileIcon={true}
            ProfileIconElement={FaUserAlt}
         />
    );
}

export default Header;