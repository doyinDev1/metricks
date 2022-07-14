import React from "react";
import classes from "./ComingSoon.module.css";
import NavBarNew from "../../components/NavBar/NavBarNew";
import ComingSoonHero from "../../components/ComingSoonHero/ComingSoonHero";
import TimerCard from "../../components/TimerCard/TimerCard";
import FormCard from "../../components/FormCard/FormCard";
import Footer from "../../components/Footer/Footer";
const ComingSoon = () => {
  return (
    <div className={classes.ComingSoon}>
      <NavBarNew />
      <ComingSoonHero />
      <TimerCard />
      <FormCard />
      <Footer />
    </div>
  );
};

export default ComingSoon;
