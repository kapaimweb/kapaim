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
              <div>
                טלפון: <a href='tel:0555668759'>055-566-8759</a>
              </div>
              <div>
                מייל: <a href='mailto:kapaimband@gmail.com'> kapaim.live@gmail.com</a>
              </div>
              <p className='mt-3'>
                <strong>ניהול הרכב</strong>: אדוה קושניר
              </p>
            </div>
            <small>אתר זה הונגש באמצעות ״נגיש לי״</small>
          </Col>
          <Col className='align-self-center' lg={6}>
            <Nav className={classes.footer_links}>
              <Nav.Link target='_blank' href='https://www.facebook.com/kapaym'>
                <BsFacebook />
              </Nav.Link>
              <Nav.Link target='_blank' href='https://www.youtube.com/@kapaim9463'>
                <BsYoutube />
              </Nav.Link>
              <Nav.Link target='_blank' href='https://www.instagram.com/kapaimband/'>
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
