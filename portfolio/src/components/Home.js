import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return(
      
        <Container  id="home">
            <Row className="row-home">
              <Col md={7} className="home-header">
                <h1 style={{ padding: 100, textAlign: "center" }} className="heading">
                  Hello! 
                </h1>
  
                <h1 className="heading-name">
                  I'm Chayanit McCormick 
                </h1>
  
                {/* <div style={{ padding: 50, textAlign: "center" }}>
                
                </div> */}
              </Col>
  
              <Col md={5} style={{ paddingBottom: 20 }}>
                <h3 style={{ padding: 150 }}>Pic goes here</h3>
              </Col>
            </Row>
          </Container>
    )
}

export default Home