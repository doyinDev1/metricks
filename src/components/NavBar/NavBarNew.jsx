import React from "react";
import classes from "./NavBarNew.module.css";
import metricks from "../../assets/images/metricks.png";
import { Link } from "react-router-dom";
const NavBarNew = () => {
  return (
    <div className={classes.NavBar}>
      <>
        <div className={classes.NavImgTop}>
          <img src={metricks} alt="" className={classes.NavImg} />
          <h1 className={classes.NavText}>METRICKS</h1>
        </div>
        <ul>
          <div className={classes.NavLink}>
            <li className={classes.NavLinks}>
              <Link to="/about">About us</Link>
            </li>
            <li className={classes.NavLinks}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={classes.NavLinks}>
              <Link to="/contact-us">Contact us</Link>
            </li>
          </div>
        </ul>
      </>
    </div>
  );
};

export default NavBarNew;
