import classes from "./Hero.module.css";
import { PiCaretDownBold } from "react-icons/pi";
import logo_text from "../../images/logo_text+tag.png";
import video from "../../assets/website.mp4";
const Hero = () => {
  return (
    <div id='hero' className={classes.hero}>
      <video preload='auto' autoPlay='autoplay' loop muted playsInline className={classes.video}>
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className={classes.content}>
        <img src={logo_text} alt='kapaim logo' className={classes.logo_img} />
        <p>גרוב ים-תיכוני בלקני</p>
        <button className={classes.cta}>
          <a
            className={classes.cta_link}
            href='https://wa.me/972544500529?text=hi%20Kapayim%20Band,%20i%20would%20like%20some%20more%20details%20please'>
            WhatsApp Us
          </a>
        </button>
      </div>
      <div className={classes.caret_wrap}>
        <div className={classes.caret}>
          <a aria-label='scrollDown' href='#about'>
            <PiCaretDownBold />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
