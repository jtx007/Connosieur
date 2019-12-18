import React from "react";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer has-background-black">
      <div className="content has-text-centered">
        <p className="">
          <strong>Connosieur</strong> by{" "}
          <a href="https://jamesjacobthomas.com">James Thomas </a>
           © 2019
        </p>
          <div className="footerLinks">
            <div><a  href="https://github.com/jtx007"><i className="fab fa-github is-size-1"></i></a></div>
            <div><a  href="https://www.linkedin.com/in/james-thomas007/"><i className="fab fa-linkedin is-size-1"></i></a></div>
            <div><a  href="mailto:jamesjacobthomas7@gmail.com"><i className="fas fa-envelope is-size-1"></i></a></div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
