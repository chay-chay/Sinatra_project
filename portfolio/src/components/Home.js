import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import chay from "../images/chay.png";

const Home = () => {
  return (
    <div id="home">
      <div className="row-home">
        <div className="grid-area home-header">
          <h1
            style={{ paddingBottom: 50, textAlign: "center" }}
            className="heading"
          >
            Hello!{" "}
            <img src="https://img.icons8.com/nolan/64/variable.png"/>
          </h1>

          <h1 className="heading-name">I'm &nbsp;Chayanit &nbsp; McCormick</h1>
        </div>

        <img className="chay grid-area" alt="chay" src={chay} />
      </div>
    </div>
  );
};

export default Home;
