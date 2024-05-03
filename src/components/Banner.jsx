import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import $ from "jquery";

const Banner = () => {
  useEffect(() => {
    initAOS();
  }, []);

  useEffect(() => {
    if ($(".typed-text-output").length === 1) {
      var typed_strings = $(".typed-text").text();
      var typed = new Typed(".typed-text-output", {
        strings: typed_strings.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    }
  }, []);

  return (
    <div>
      <div
        className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
        id="home"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">I&apos;m</h3>
              <h1 className="display-3 text-uppercase text-primary mb-2">
                Kate Winslet
              </h1>
              <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
              <div className="typed-text d-none">
                Web Designer, Web Developer, Front End Developer, Apps Designer,
                Apps Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
