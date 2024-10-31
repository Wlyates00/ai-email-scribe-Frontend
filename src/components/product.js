import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./product.css";

const product = () => {
  return (
    <Container className="product-container">
      <Row>
        <Col className="product-text text-1 d-flex justify-content-end align-items-center">
          <p className="prod-text" id="gif1-desc">
            Watch your unenthusiasm get turned into the perfect email based on
            your desired tone and prompt!
          </p>
        </Col>
        <Col className="gif-container d-flex justify-content-start">
          <img src={"/demo.gif"} className="gif-1" id="gif1"></img>
        </Col>
      </Row>
      <Row>
        <Col className="gif-container gap d-flex justify-content-end flip">
          <img src={"/composeEmail.PNG"} className="gif-2" id="gif2"></img>
        </Col>
        <Col className="product-text d-flex justify-content-start align-items-center flop">
          <p className="prod-text" id="gif2-desc">
            Increase the speed of your emailing by generating them without
            clicking out of your email!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default product;
