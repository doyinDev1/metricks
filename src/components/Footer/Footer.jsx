import React from "react";
import classes from "./Footer.module.css";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <ul>
      <div className={classes.FooterMainIcon}>
        <li><Link to="https://www.youtube.com/channel/UC8FRSb8AmMk0YFDt_M7Ypmw"><AiFillYoutube /></Link></li>
        <li><Link to="https://m.facebook.com/metricks.io"><FaFacebookSquare /></Link></li>
        <li><Link to="https://www.linkedin.com/company/metricks-io"><ImLinkedin /></Link></li>
        <li><Link to="https://www.linkedin.com/company/metricks-io/"><RiInstagramFill /></Link></li>
        <li><Link to="https://twitter.com/metricks_io?s=21"><FaTwitterSquare /></Link></li>
      </div>
      </ul>
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
