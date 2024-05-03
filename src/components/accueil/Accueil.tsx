"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";
import $ from "jquery";
import initAOS from "@/components/Animation";

const Accueil = () => {
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
    <section className="accueil">
      <div className="container mx-au px-8">
        <div className="accueil-inner">
          <div className="content grid grid-cols-2">
            <div className="left" data-aos="fade-right">
              <div className="info-user font-bold text-2xl">
                <p>Hello, It&apos;s Me</p>
                <p className="text-green-500 text-4xl uppercase">
                  adama traoré
                </p>
                <p>
                  And I&apos;m a{" "}
                  <span className="typed-text-output  text-green-500"></span>
                </p>
                <div className="typed-text hidden">
                  Web Designer, Web Developer, Front End Developer, Apps
                  Designer, Apps Developer
                </div>
              </div>
            </div>
            <div className="rifgt" data-aos="fade-left"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
