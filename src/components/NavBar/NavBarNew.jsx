import React from "react";
import classes from "./NavBarNew.module.css";
import metricks from "../../assets/images/metricks.png";

const NavBarNew = () => {
  return (
      <div className={classes.NavBar}>
        <>
          <div className={classes.NavImgTop}>
            <img src={metricks} alt="" className={classes.NavImg} />
            <h1 className={classes.NavText}>METRICKS</h1>
          </div>
          <div className={classes.NavLink}>
            <h1 className={classes.NavLinks}>About us</h1>
            <h1 className={classes.NavLinks}>Blog</h1>
            <h1 className={classes.NavLinks}>Contact us</h1>
          </div>
        </>
      </div>
  );
};

export default NavBarNew;
