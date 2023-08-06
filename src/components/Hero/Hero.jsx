import classes from "./Hero.module.css";
import { PiCaretDownBold } from "react-icons/pi";
import { Button } from "react-bootstrap";
const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.content}>
        <h1>להקת כפיים</h1>
        <p>חגיגה ישראלית של גרוב ים-תיכוני בלקני</p>
        <Button className={classes.cta}>דברו איתנו</Button>
      </div>
      <div className={classes.caret}>
        <PiCaretDownBold />
      </div>
    </div>
  );
};
export default Hero;
