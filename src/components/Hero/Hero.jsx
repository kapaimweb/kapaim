import classes from "./Hero.module.css";
import { PiCaretDownBold } from "react-icons/pi";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div id='hero' className={classes.hero}>
      <div className={classes.content}>
        <h1>להקת כפיים</h1>
        <p>חגיגה ישראלית של גרוב ים-תיכוני בלקני</p>
        <Button
          href='https://wa.me/972555668759?text=שלום%20להקת%20כפיים%20,%20אני%20מעוניין%20לשאול%20שאלה'
          className={classes.cta}>
          דברו איתנו
        </Button>
      </div>
      <div className={classes.caret_wrap}>
        <div className={classes.caret}>
          <a href='#about'>
            <PiCaretDownBold />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
