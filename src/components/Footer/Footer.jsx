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
            <p>להקת כפיים </p>
            <div>
              <div>
                טלפון: <a href='tel:055-566-8759'>055-566-8759</a>
              </div>
              מייל: <a href='mailto:kapaimband@gmail.com'>KapaimBand@gmail.com</a>
            </div>
          </Col>
          <Col className='align-self-center' lg={6}>
            <Nav className={classes.footer_links}>
              <Nav.Link href='https://www.facebook.com/kapaym'>
                <BsFacebook />
              </Nav.Link>
              <Nav.Link href='https://www.youtube.com/@kapaim9463'>
                <BsYoutube />
              </Nav.Link>
              <Nav.Link href='https://www.instagram.com/kapaimband/'>
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
