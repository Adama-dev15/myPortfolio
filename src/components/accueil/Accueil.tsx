"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import initAOS from "@/components/Animation";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import image_profil from "@/images/WhatsApp_Image_2024-04-08_at_13.13.02-removebg-preview.png";

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
      <div className="container mx-auto md:px-16 ">
        <div className="accueil-inner">
          <div className="content grid md:grid-cols-2 :grid-cols-1">
            <div
              className="left flex items-center justify-center md:items-start md:justify-start flex-col gap-5 py-5 md:py-28"
              data-aos="fade-right"
            >
              <div className="info-user font-bold text-[20px] md:text-2xl flex flex-col gap-1">
                <p className="text-center md:text-left">Hello, It&apos;s Me</p>
                <p className="text-green-500 text-2xl md:text-3xl uppercase text-center md:text-left">
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
                <div className="icon border cursor-pointer border-green-500 rounded-full w-8 h-8 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-black transition duration-150  hover:shadow-lg">
                  <FaFacebookF />
                </div>
                <div className="icon border cursor-pointer border-green-500 rounded-full w-8 h-8 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-black transition duration-150  hover:shadow-lg">
                  <FaLinkedinIn />
                </div>
                <div className="icon border cursor-pointer border-green-500 rounded-full w-8 h-8 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-black transition duration-150  hover:shadow-lg">
                  <FaTiktok />
                </div>
                <div className="icon border cursor-pointer border-green-500 rounded-full w-8 h-8 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-black transition duration-150  hover:shadow-lg">
                  <FaTwitter />
                </div>
              </div>

              <div className="down flex items-center justify-center w-max bg-green-500 rounded-full py-2 px-4 shadow-lg hover:bg-green-400">
                <button className="font-bold text-black">Download CV</button>
              </div>
            </div>
            <div
              className="right  py-10 md:pl-24 flex items-center justify-center"
              //   style={{ borderRadius: "86% 14% 86% 14% / 12% 84% 16% 88% " }}
              data-aos="fade-left"
            >
              <div className="image flex items-center justify-center bg-green-500 rounded-full   w-[300px] h-[300px] md:w-[400px]   md:h-[400px]">
                <Image
                  src={image_profil}
                  width={1000}
                  height={400}
                  alt="profi"
                  className=" w-[300px] h-[300px] md:w-[400px]   md:h-[400px] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
