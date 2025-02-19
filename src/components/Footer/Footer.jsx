import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//icons
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

//css
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <Row>
          <Col className={classes.footer_info} lg={6}>
            <div className='mb-3'>
              <p className='mt-3'>
                <strong>ניהול הרכב</strong>: גיא רודוביץ׳
              </p>
              <div>
                <a
                  href='tel:050
                  2042538'>
                  050-204-2538
                </a>
              </div>
              <div>
                <a href='mailto:kapaim.live@gmail.com'>kapaim.live@gmail.com</a>
              </div>
            </div>
            <div>
              <a href='/weddings'>כפיים לחתונות ואירועים</a>
              <br />
              <a href='/parade'>כפיים בתהלוכה בלקנית</a>
            </div>
            <p className='mt-3'>
              <small>אתר זה הונגש באמצעות ״נגיש לי״</small>
            </p>
          </Col>
          <Col className='align-self-center' lg={6}>
            <Nav className={classes.footer_links}>
              <Nav.Link aria-label='facebook' target='_blank' href='https://www.facebook.com/kapaym'>
                <BsFacebook />
              </Nav.Link>
              <Nav.Link aria-label='youtube' target='_blank' href='https://www.youtube.com/@kapaim9463'>
                <BsYoutube />
              </Nav.Link>
              <Nav.Link aria-label='instagram' target='_blank' href='https://www.instagram.com/kapaimband/'>
                <BsInstagram />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
