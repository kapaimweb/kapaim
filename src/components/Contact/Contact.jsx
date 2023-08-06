import classes from "./Contact.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
const Contact = () => {
  return (
    <div className={classes.contact}>
      <Container>
        <Row>
          <h2 className={classes.contact_h}>צרו קשר</h2>
        </Row>
        <Row>
          <Form>
            <Col xl={4}>
              <Form.Group className='mb-4' controlId='validationCustom01'>
                <Form.Label>שם</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
              <Form.Group className='mb-4' controlId='validationCustom01'>
                <Form.Label>טלפון</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
              <Form.Group className='mb-4' controlId='validationCustom01'>
                <Form.Label>אימייל</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
            </Col>
            <Col xl={4}></Col>
            <Col xl={4}>
              <Form.Group className='mb-4' controlId='validationCustom01'>
                <Form.Label>הודעה:</Form.Label>
                <Form.Control required type='textarea' />
              </Form.Group>
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
