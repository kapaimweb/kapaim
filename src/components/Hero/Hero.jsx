import classes from "./Hero.module.css";
import { PiCaretDownBold } from "react-icons/pi";
import { Button } from "react-bootstrap";
import logo_text from "../../images/logo_text.png";

const Hero = () => {
  return (
    <div id='hero' className={classes.hero}>
      <div className={classes.content}>
        <img src={logo_text} alt='kapaim logo' className={classes.logo_img} />
        <p>גרוב ים-תיכוני בלקני</p>
        <button className={classes.cta}>
          <a
            className={classes.cta_link}
            href='https://wa.me/972555668759?text=שלום%20להקת%20כפיים%20,%20אני%20מעוניין%20לשאול%20שאלה'>
            דברו איתנו
          </a>
        </button>
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
