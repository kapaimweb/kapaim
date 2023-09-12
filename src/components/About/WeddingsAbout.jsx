import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//react-youtube
import YouTube from "react-youtube"; // Import the react-youtube library
//css
import classes from "./About.module.css";
const WeddingsAbout = () => {
  return (
    <div id='about' className={classes.about}>
      <Container>
        <Row>
          <Col xl={5}>
            <h2 className={classes.about_h}>מוזיקה חיה לחתונות ולאירועים</h2>
            <p>
              <strong>להקת כפיים בחגיגה ישראלית של גרוב ים תיכוני-בלקני </strong>
            </p>
            <p>
              <strong>מוזיקה חיה שתרים כל חלק באירוע שלכם -</strong>
              <br />◆ הרקדה ומסיבה חיה עם להקת כפיים | קבלת פנים | תהלוכה מוזיקלית | ליווי בטקס החופה | פריצה בלקנית
              ברחבת הריקודים ◆
            </p>
            <p>
              <strong>בעשור האחרון זכינו לשמח ולהרקיד מאות זוגות מרוצים ברחבי הארץ</strong>
              <br />
            </p>
            <p>
              <strong>תמיד בדגש על הקשר האישי-</strong>
              <br />
              חשוב לנו להכיר אתכם כדי להביא אנרגיה חיה ותוססת,
              <br />
              ולהפוך את האירוע שלכם לייחודי ובלתי נשכח!
            </p>
          </Col>
          <Col className={classes.about_divider_col} xl={2}>
            <div className={classes.about_divider}></div>
          </Col>
          <Col xl={5}>
            <YouTube
              videoId='eCl65GYXZ_E'
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
export default WeddingsAbout;
