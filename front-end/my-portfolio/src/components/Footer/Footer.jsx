import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react';
import { BsGithub, BsBehance, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
            Hey, my name is Anuj Verma. I am student of <b>IIT kharagpur</b>. 
            I am Currently working as a <b>Design Head</b> at <b>Computer Graphics Society, IIT Kharagpur</b>. 
            I am an Intermediate 3D Artist and Competetive Programmer.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
            <Typography>Contact Us</Typography>
        </Link>
        </div>

        <div>
            <Typography variant="h6">Social Media</Typography>
            <a href='#' target="blank">
                <BsGithub />
            </a>
            <a href='#' target="blank">
                <BsInstagram />
            </a>
            <a href='#' target="blank">
                <BsFacebook />
            </a>
            <a href='#' target="blank">
                <BsLinkedin />
            </a>
            <a href='#' target="blank">
                <BsBehance />
            </a>
        </div>
    </div>
  )
}

export default Footer