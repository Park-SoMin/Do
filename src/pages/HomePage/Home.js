import BigText from "../components/BigText";
import One from "../IMG/One.jpg";
//import Two from "../IMG/Two.jpg";
import Header from "../components/Header";
import News from "../News";
import Nav from "../components/Nav";
import Top from "../components/Top";
import Footer from "../components/Footer";
import "./Home.css";

import React, { Component } from "react";

class Homee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <BigText />
        <form className="HO_form">
          <span className="HO_imgbox">
            <img src={One} alt={One} className="HO_img" />
          </span>
          <div>
            <News />
          </div>
        </form>
        <Nav />
        <Footer />
        <Top />
      </div>
    );
  }
}

export default Homee;

/*
<span className="HO_imgbox">
          <img src={Two} alt={Two} className="HO_img" />
        </span>

<div className="Mains">
            <div id="Mains-left">
              <h3> Left Side </h3>
            </div>

            <div>
              <h2> This is Main layout </h2>
            </div>

            <div id="Mains-right">
              <h3> Right Side </h3>
            </div>
          </div>

        */
