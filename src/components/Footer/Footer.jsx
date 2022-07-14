import React from "react";
import classes from "./Footer.module.css";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterMainIcon}>
        <AiFillYoutube />
        <FaFacebookSquare />
        <ImLinkedin />
        <RiInstagramFill />
        <FaTwitterSquare />
      </div>
      <div className={classes.Privacy}>
        <p>Terms of services</p>
        <p>Privacy policy</p>
      </div>
      <div className={classes.Copyright}>
        <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
