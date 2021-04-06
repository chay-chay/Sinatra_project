import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return(
        <section>
        <Container fluid className="home-section" id="home">
         
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ padding: 100 }} className="heading">
                  Hello! 
                </h1>
  
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> CHAYANIT MCCORMICK</strong>
                </h1>
  
                <div style={{ padding: 50, textAlign: "left" }}>
                
                </div>
              </Col>
  
              <Col md={5} style={{ paddingBottom: 20 }}>
                <h3 style={{ padding: 150 }}>Pic goes here</h3>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    )
}

export default Home