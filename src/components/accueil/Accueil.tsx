"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import initAOS from "@/components/Animation";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaTwitter } from "react-icons/fa";

const typedStrings =
  "Web Designer, Web Developer, FrontEnd Developer, Apps Designer, Apps Developer, Content Creator, UI/UX Designer";

const Accueil = () => {
  useEffect(() => {
    initAOS();
  }, []);

  const typedTextRef = useRef(null);

  useEffect(() => {
    const typedTextElement = typedTextRef.current;

    if (typedTextElement) {
      const options = {
        strings: typedStrings.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      };

      const typed = new Typed(typedTextElement, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="accueil">
      <div className="container mx-auto px-8">
        <div className="accueil-inner">
          <div className="content grid grid-cols-2">
            <div className="left flex flex-col gap-5" data-aos="fade-right">
              <div className="info-user font-bold text-2xl flex flex-col gap-1">
                <p>Hello, It&apos;s Me</p>
                <p className="text-green-500 text-3xl uppercase">
                  adama traoré
                </p>
                <p>
                  And I&apos;m a{" "}
                  <span
                    ref={typedTextRef}
                    className="typed-text-output text-green-500"
                  ></span>
                </p>
              </div>
              <div className="typed-text hidden">{typedStrings}</div>
              <div className="reseau flex gap-5">
                <div className="icon border cursor-pointer border-green-500 rounded-full w-8 h-8 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-black transition duration-150 shadow-none hover:shadow-lg">
                  <FaFacebookF />
                </div>
                <div className="icon border cursor-pointer border-green-500 rounded-full w-8 h-8 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-black transition duration-150 shadow-none hover:shadow-lg">
                  <FaLinkedinIn />
                </div>
                <div className="icon border cursor-pointer border-green-500 rounded-full w-8 h-8 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-black transition duration-150 shadow-none hover:shadow-lg">
                  <FaTiktok />
                </div>
                <div className="icon border cursor-pointer border-green-500 rounded-full w-8 h-8 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-black transition duration-150 shadow-none hover:shadow-lg">
                  <FaTwitter />
                </div>
              </div>
            </div>
            <div className="right" data-aos="fade-left"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
