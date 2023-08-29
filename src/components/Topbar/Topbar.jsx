import { Navbar, Container, Nav } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import logo from "../../images/logo.png";
import { useState, useEffect } from "react";

//css
import classes from "./Topbar.module.css";
const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      // bg={isScrolled || isMobileMenuOpen ? "secondary" : "tranparent"}
      bg='secondary'
      className={`${classes.nav} ${isScrolled || isMobileMenuOpen ? classes["slide-in"] : classes["slide-out"]}`}
      collapseOnSelect
      fixed='top'
      expand='lg'
      // hidden={isScrolled || isMobileMenuOpen ? false : true}
      style={{ zIndex: "1000" }}>
      <Container>
        <Navbar.Brand href='#hero'>
          <img src={logo} width='70' height='70' className='d-inline-block align-top' alt='Kapaim Band Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={handleMobileMenuToggle} />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={`${classes.main_nav} me-auto `}>
            <Nav.Link onClick={handleMobileMenuToggle} href='#hero'>
              דף הבית
            </Nav.Link>
            <Nav.Link onClick={handleMobileMenuToggle} href='#about'>
              מי אנחנו
            </Nav.Link>
            <Nav.Link onClick={handleMobileMenuToggle} href='#videos'>
              וידאו{" "}
            </Nav.Link>
            <Nav.Link onClick={handleMobileMenuToggle} href='#contact'>
              צרו קשר{" "}
            </Nav.Link>
          </Nav>
          <Nav className='me-auto'>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Topbar;
