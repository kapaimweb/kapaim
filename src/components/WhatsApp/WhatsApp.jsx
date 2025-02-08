import whatsapp from "../../images/whatsapp.png";
import classes from "./WhatsApp.module.css";
const WhatsAppButton = () => {
  return (
    <div className={classes["whatsapp-button"]}>
      <a
        href='https://wa.me/972502042538?text=שלום%20להקת%20כפיים%20,%20אני%20מעוניין%20לשאול%20שאלה'
        target='_blank'
        rel='noopener noreferrer'>
        <img src={whatsapp} alt='WhatsApp' />
      </a>
    </div>
  );
};

export default WhatsAppButton;
