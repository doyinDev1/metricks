import React, { useState } from "react";
import classes from "./TimerCard.module.css";
const TimerCard = () => {
  const [secondsTimer, setSecondsTimer] = useState();
  const [minutesTimer, setMinutesTimer] = useState();
  const [hoursTimer, setHoursTimer] = useState();
  const [daysTimer, setDaysTimer] = useState();

  const countDownDate = new Date("Jul 21, 2022 22:59:11").getTime();

  const myfunc = setInterval(function () {
    const now = new Date().getTime();
    const timeleft = countDownDate - now;

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    setSecondsTimer(seconds);
    setMinutesTimer(minutes);
    setHoursTimer(hours);
    setDaysTimer(days);
  }, 1000);

  return (
    <div className={classes.ComingSoonHeroTimer}>
      <div className={classes.HeroTimerCard}>
        <div className={classes.HeroTimerCardMain}>
          <h1>{daysTimer}</h1>
          <p>Days</p>
        </div>
      </div>
      <div className={classes.HeroTimerCard}>
        <div className={classes.HeroTimerCardMain}>
          <h1>{hoursTimer}</h1>
          <p>Hours</p>
        </div>
      </div>
      <div className={classes.HeroTimerCard}>
        <div className={classes.HeroTimerCardMain}>
          <h1>{minutesTimer}</h1>
          <p>Minutes</p>
        </div>
      </div>
      <div className={classes.HeroTimerCard}>
        <div className={classes.HeroTimerCardMain}>
          <h1>{secondsTimer}</h1>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default TimerCard;
