import React from "react";
import classes from "./ComingSoonHero.module.css";
const ComingSoonHero = () => {
  return (
    <div className={classes.ComingSoonHero}>
      <div className={classes.ComingSoonHeroTop}>
        <div className={classes.firstSvg}></div>
        <h1 className={classes.ComingSoonHeroTopText}>
          Something awesome is <br /> coming soon
        </h1>
        <div className={classes.secondSvg}></div>
      </div>
      <div className={classes.ComingSoonHeroTop}>
        <div></div>
        <p className={classes.ComingSoonHeroTopParagragh}>
          Your all-in-one affiliate marketing tracking software{" "}
          <span className={classes.ComingSoonHeroTopSpan}>track, </span>{" "}
          <span className={classes.ComingSoonHeroTopSpan}>automate </span>
          and <br />{" "}
          <span className={classes.ComingSoonHeroTopSpan}>optimize</span> your
          campaigns.
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default ComingSoonHero;
