import classes from "./Contact.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={classes.contact}>
      <Container>
        <Row>
          <h2 className={classes.contact_h}>צרו קשר</h2>
        </Row>
        <Form onSubmit={handleSubmit} name='contact'>
          <Row>
            <Col lg={4} xl={4}>
              <Form.Group className='mb-4'>
                <Form.Label className={classes.heebo}>שם</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className={classes.heebo}>טלפון</Form.Label>
                <Form.Control required type='' />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className={classes.heebo}>אימייל</Form.Label>
                <Form.Control required type='email' />
              </Form.Group>
            </Col>
            <Col lg={6} xl={6}>
              <Form.Group className='mb-4'>
                <Form.Label className={classes.heebo}>הודעה</Form.Label>
                <Form.Control className='py-2' rows={9} required as='textarea' />
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
    </div>
  );
};
export default Contact;
