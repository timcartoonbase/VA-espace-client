import React from "react";
import "./Footer.css";

import logo from "../../assets/images/logo.svg";

const Footer = ({}) => {
  return (
    <section className={"footer"}>
      <div className="section is-flex is-align-items-center">
        <div className="container">
          <div className={"columns is-justify-content-center"}>
            <figure className="image">
              <img src={logo} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
