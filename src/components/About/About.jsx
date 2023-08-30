import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//react-youtube
import YouTube from "react-youtube"; // Import the react-youtube library
//css
import classes from "./About.module.css";
const About = () => {
  return (
    <div id='about' className={classes.about}>
      <Container>
        <Row>
          <Col xl={5}>
            <h2 className={classes.about_h}> מי אנחנו </h2>
            <p>עם ניסיון של עשור בתחום - שמחים להביא את השמחה ואת האווירה הטובה לכל מקום אליו אנחנו מגיעים.</p>

            <p>
              במרוצת השנים הלהקה הופיעה על מאות במות ברחבי הארץ; פסטיבלים, אירועי תרבות עירוניים ואירועים פרטיים. לכפיים
              יתרון בולט של גמישות לצרכי האירוע: הרפרטואר של כפיים ורסטילי, נושק לז'אנרים רבים, ויכול להיות מותאם גם
              למופע מרקיד וגם למופע של שירי חג ונשמה.
            </p>
            <p>
              להקת כפיים הם: <strong>אשר קרוגר</strong>- גיטרה ושירה | <strong>גיא רודוביץ'</strong>- סקסופונים |
              <strong> אילן זיו</strong>- אקורדיון | <strong>אבירם קושניר</strong> - גיטרה בס | <strong>דר לוי</strong>
              תופים
            </p>
          </Col>
          <Col className={classes.about_divider_col} xl={2}>
            <div className={classes.about_divider}></div>
          </Col>
          <Col xl={5}>
            <YouTube
              videoId='8G0N8GPtbIQ'
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
export default About;
