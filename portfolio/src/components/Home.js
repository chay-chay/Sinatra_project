import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import chay from "../images/chay.png"

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


          <img className="chay grid-area" alt="chay" src={chay} />
        
      </div>
      <img src="/src/images/bg.png" />
    </div>

  );
};

export default Home;
