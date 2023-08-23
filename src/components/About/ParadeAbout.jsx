import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//react-youtube
import YouTube from "react-youtube"; // Import the react-youtube library
//css
import classes from "./About.module.css";
const ParadeAbout = () => {
  return (
    <div id='about' className={classes.about}>
      <Container>
        <Row>
          <Col xl={5}>
            <h2 className={classes.about_h}> פריצה בלקנית לאירועים </h2>
            <p>
              להקת כפיים גאה להציג תהלוכת גרוב בלקני- האייטם שירים לכם את האירוע ויהפוך אותו לבלתי נשכח! תזמורת של כלי
              נגינה חיים שתשמח ותעורר כל חלק באירוע שלכם:
            </p>
            <p>ליווי צבעוני לחופה | שבירת כוס עם מוזיקה חיה | פריצה בלקנית ברחבה</p>
            <p>מתאים במיוחד לאירועי בוטיק אקסקלוסיביים, לקוחות חו"ל, טאץ' חסידי או אוריינטלי</p>
          </Col>
          <Col className={classes.about_divider_col} xl={2}>
            <div className={classes.about_divider}></div>
          </Col>
          <Col xl={5}>
            <YouTube
              videoId='kY1q-CS-BcY'
              className={classes.youtube}
              opts={{
                width: "100%",
                playerVars: {
                  autoplay: 0,
                  controls: 0,
                },
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ParadeAbout;
