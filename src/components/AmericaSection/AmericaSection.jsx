import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

//css
import classes from "./AmericaSection.module.css";
const AmericaSection = () => {
  return (
    <div style={{ direction: "ltr" }} id='about' className={classes.about}>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col xl={8}>
            <h2 className={classes.about_h}> </h2>
            <p>
              This upcoming Spring, we look forward to performing our music and bringing Israeli joy and resilience to
              Jewish communities all over the United States, from New York to Arizona.
            </p>
            <p>***</p>
            <p>
              We invite you to book us for your upcoming events during the holiday period of
              <b>Yom Hashoah, Yom Hazikaron, and Yom Ha'atzmaut.</b>
            </p>
            <p>***</p>
            <p>
              Our music features a unique and groovy blend of Jewish traditions from the Middle East and the Balkan
              region that will be sure to bring simcha and avira tova to all generations of your congregation or
              community.
              <p>***</p>
              Our band features saxophone, accordion, guitar, bass, and percussion - and we know how to bring the
              <i style={{ fontWeight: "bold" }}> HAFLA</i>!
            </p>
            <p>***</p>

            <p>
              <b>We have already booked shows at:</b>
              <br />
              *Tucson, Arizona - 4th of May 2025
              <br />
              *Montreal,Canada - 1st of May 2025
              <br />
              <br />
              Please be in touch to schedule with us while we still have availability, or if you have any questions.
            </p>
            <p>
              <b>Email</b> : kapaimband@gmail.com
            </p>
            <p>
              <b>WhatsApp</b>: +972544500529
            </p>
            <p>
              <b>Direct Message To WhatsApp</b>{" "}
              <a href='https://wa.me/972544500529?text=hi%20Kapayim%20Band,%20i%20would%20like%20some%20more%20details%20please'>
                here
              </a>
            </p>
          </Col>
          <div className={classes.socialBigLinks}>
            <a aria-label='facebook' href='https://www.facebook.com/kapaym'>
              <BsFacebook className='ms-3' />
            </a>
            <a aria-label='instagram' href='https://www.instagram.com/kapaimband/'>
              <BsInstagram className='ms-3' />
            </a>
            <a aria-label='youtube' href='https://www.youtube.com/@kapaim9463'>
              <BsYoutube className='ms-3' />
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default AmericaSection;
