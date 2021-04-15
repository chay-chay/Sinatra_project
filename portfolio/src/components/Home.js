import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div id="home">
      <div className="row-home">
        <div className="grid-area home-header">
          <h1
            style={{ paddingBottom: 100, paddingTop: 100, textAlign: "center" }}
            className="heading"
          >
            Hello!
          </h1>

          <h1 className="heading-name">I'm Chayanit McCormick</h1>
        </div>

        {/* <div className="grid-area"> */}
          <img className="chay grid-area" alt="chay" src="/chay.png" />
        {/* </div> */}
      </div>
    </div>

    // <Container  id="home">
    //     <Row className="row-home">
    //       <Col md={7} className="home-header">
    //         <h1 style={{ padding: 100, textAlign: "center" }} className="heading">
    //           Hello!
    //         </h1>

    //         <h1 className="heading-name">
    //           I'm Chayanit McCormick
    //         </h1>

    //         {/* <div style={{ padding: 50, textAlign: "center" }}>

    //         </div> */}
    //       </Col>

    //       <Col md={2} >
    //         <img className="chay" alt="chay" src="/chay.png"/>
    //       </Col>
    //     </Row>
    //   </Container>
  );
};

export default Home;
