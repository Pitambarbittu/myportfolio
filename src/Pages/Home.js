import React from "react";
import "./pagesCss/Home.css";
import bit2 from "../Image/bittu.pdf";
import { Link } from "react-router-dom";

import vector1 from "../Image/Vector2.png";
import boy from "../Image/boy.png";
const Home = () => {
  return (
    <div className="Home">
      <div className="div__left">
        <section className="first">
          <h1 style={{ color: "rgb(241, 172, 241)" }}>HI,</h1>
          <h1>MY NAME IS</h1>
        </section>

        <section className="second">
          <h1 style={{ color: "orange" }}>PITAMBAR BHADRA</h1>
          <h1>FULLSTACK DEVELOPER</h1>
          <h3 style={{ color: "orange" }}>
            Knock of building applications with front and back end operations
          </h3>
        </section>
        <br />
        <br />
        <button style={{ color: "white" }}>
          {" "}
          <Link style={{ color: "white" }} to="/contact">
            Hire Me
          </Link>{" "}
        </button>

        <button>
          <a style={{ color: "white" }} href={bit2} download={bit2}>
            Download Resume
          </a>
        </button>
      </div>

      <div className="div__rigth">
        <img src={vector1} className="vec2" alt="" />
        <img src={boy} alt="error" />
      </div>
    </div>
  );
};

export default Home;
