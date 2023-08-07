import { Navbar, Container, Nav } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import logo from "../../images/logo.png";
import { useState, useEffect } from "react";

//css
import classes from "./Topbar.module.css";
const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    // Check the scrolling position of the window
    const isTop = window.scrollY <= 30;

    // Update the state based on the scrolling position
    setIsScrolled(!isTop);
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      bg={isScrolled ? "secondary" : "tranparent"}
      className={classes.nav}
      collapseOnSelect
      fixed='top'
      expand='lg'>
      <Container>
        <Navbar.Brand href=''>
          <img src={logo} width='70' height='70' className='d-inline-block align-top' alt='Kapaim Band Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={`${classes.main_nav} me-auto`}>
            <Nav.Link href='#hero'>דף הבית</Nav.Link>
            <Nav.Link href='#about'>קצת עלינו</Nav.Link>
            <Nav.Link href='#videos'>וידאו </Nav.Link>
            <Nav.Link href='#contact'>צרו קשר </Nav.Link>
          </Nav>
          <Nav className='me-auto'>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Topbar;
