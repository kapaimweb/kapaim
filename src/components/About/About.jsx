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
          <h2 className={classes.about_h}>עלינו</h2>
        </Row>
        <Row>
          <Col xl={5}>
            <p>עם ניסיון של עשור בתחום - שמחים להביא את השמחה ואת האווירה הטובה לכל מקום אליו אנחנו מגיעים</p>
            <p>
              כפיים הם חמישה חברים שאוהבים לשמוח ולשמח. נעים על הציר המוזיקלי בין חאפלה ישראלית, לבין צלילי הבלקן,
              טורקיה ויוון, תמיד באוזניים כרויות לשירים אליהם כולם יכולים להתחבר, לזוז ולהנות יחד.
            </p>
            <p>
              להקת כפיים הוקמה ב-2013 בבית זית שבהרי ירושלים על ידי אשר וגיא, שכנים שהשאילו אחד לשני קמח וסוכר, ובהמשך
              החליפו ניגונים, מזמורים ומקצבים. מאז הצטרפו נגנים נוספים, והרפרטואר העצום השתבח והתגבש לכדי מופע וירטואוזי
              ועשיר.
            </p>
          </Col>
          <Col className={classes.about_divider_col} xl={2}>
            <div className={classes.about_divider}></div>
          </Col>
          <Col xl={5}>
            <p>
              במרוצת השנים הלהקה הופיעה על מאות במות ברחבי הארץ; פסטיבלים, אירועי תרבות עירוניים ואירועים פרטיים. לכפיים
              יתרון בולט של גמישות לצרכי האירוע: הרפרטואר של כפיים ורסטילי, נושק לז'אנרים רבים, ויכול להיות מותאם גם
              למופע מרקיד וגם למופע של שירי חג ונשמה.
            </p>
            <p>
              להקת כפיים הם: <strong>אשר קרוגר</strong>- גיטרה ושירה | <strong>גיא רודוביץ'</strong>- סקסופונים |
              <strong> אילן זיו</strong>- אקורדיון | <strong>אבירם קושניר</strong> - גיטרה בס | <strong>דר לוי</strong>{" "}
              - תופים
            </p>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col lg={6}>
            <Card className='text-center'>
              <Card.Header> </Card.Header>
              <Card.Body>
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
