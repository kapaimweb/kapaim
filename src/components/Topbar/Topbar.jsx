import { Navbar, Container, Nav } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import logo from "../../images/logo.png";

//css
import classes from "./Topbar.module.css";
const Topbar = () => {
  return (
    <Navbar bg='transparent' className={classes.nav} collapseOnSelect fixed='top' expand='lg'>
      <Container>
        <Navbar.Brand href=''>
          <img src={logo} width='70' height='70' className='d-inline-block align-top' alt='Kapaim Band Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={`${classes.main_nav} me-auto`}>
            <Nav.Link href=''>דף הבית</Nav.Link>
            <Nav.Link href=''>קצת עלינו</Nav.Link>
            <Nav.Link href=''>וידאו </Nav.Link>
            <Nav.Link href=''>צרו קשר </Nav.Link>
          </Nav>
          <Nav className='me-auto'>
            <Nav.Link href=''>
              <BsFacebook />
            </Nav.Link>
            <Nav.Link href=''>
              <BsYoutube />
            </Nav.Link>
            <Nav.Link href=''>
              <BsInstagram />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Topbar;
