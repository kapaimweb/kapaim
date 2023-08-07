//css
import classes from "./Contact.module.css";
//
import { useRef, useState } from "react";
//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

//
const Contact = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setShow(true);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div id='contact' className={classes.contact}>
      <Container>
        <Row>
          <h2 className={classes.contact_h}>צרו קשר</h2>
        </Row>
        <Form ref={formRef} onSubmit={handleSubmit} name='contact'>
          {/*this is for netlify bot to detect the form */}
          <input type='hidden' name='form-name' value='contact' />
          {/*  */}
          <Row>
            <Col lg={4} xl={4}>
              <Form.Group className='mb-4'>
                {/* <Form.Label className={classes.heebo}>שם</Form.Label> */}
                <Form.Control placeholder='שם' name='name' required type='text' />
              </Form.Group>
              <Form.Group className='mb-4'>
                {/* <Form.Label className={classes.heebo}>טלפון</Form.Label> */}
                <Form.Control placeholder='טלפון' name='phone' required type='' />
              </Form.Group>
              <Form.Group className='mb-4'>
                {/* <Form.Label className={classes.heebo}>אימייל</Form.Label> */}
                <Form.Control placeholder='אימייל' name='email' required type='email' />
              </Form.Group>
            </Col>
            <Col lg={6} xl={6}>
              <Form.Group className='mb-4'>
                {/* <Form.Label className={classes.heebo}>הודעה</Form.Label> */}
                <Form.Control placeholder='הודעה' name='message' className='py-2' rows={6} required as='textarea' />
              </Form.Group>
            </Col>
            <Col className={classes.submit} lg={2} xl={2}>
              <Button type='submit' className={classes.submitbtn} variant='secondary'>
                שלח
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* modal to confirm form */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> תודה שפניתם אלינו</Modal.Title>
        </Modal.Header>
        <Modal.Body>קיבלנו את הפנייה שלכם ונחזור אליכם בהקדם!</Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Contact;
