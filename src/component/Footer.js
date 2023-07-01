import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/mylogo_new.png";
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import instagram from '../assets/img/instagram.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sujitkumar-patil-8998ab220"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/Sujit4710"><img src={github} alt="Icon" /></a>
              <a href="https://www.instagram.com/sujitpatil_04/"><img src={instagram} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
