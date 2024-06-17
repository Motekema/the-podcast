import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

function AppContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ps648a1', 'template_4awfhef', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send the message, please try again.');
      });
    e.target.reset();
  };

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className='contact-form' onSubmit={handleSubmit}>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your contact number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Enter your contact message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              thetidopodcast@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              065-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Johannesburg, South Africa
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
