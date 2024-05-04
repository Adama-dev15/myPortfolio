"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import image_profil from "@/images/WhatsApp_Image_2024-04-08_at_13.52.29-removebg-preview.png";
import initAOS from "@/components/Animation";

const Apropos = () => {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <section className="apropos  bg-neutral-900">
      <div className="container mx-auto  px-5 md:px-8">
        <div className="apropos-inner">
          <div className="content grid md:grid-cols-2 :grid-cols-1 w-full">
            <div
              className=" left w-full  py-10 md:pl-24 flex items-center justify-center md:items-start md:justify-start"
              data-aos="fade-right"
            >
              <div className="image flex items-center justify-center bg-green-500 rounded-full   w-[300px] h-[300px] md:w-[400px]   md:h-[400px]">
                <Image
                  src={image_profil}
                  width={1000}
                  height={400}
                  alt="profi"
                  className=" w-[300px] h-[300px] md:w-[400px]   md:h-[400px] rounded-full object-cover"
                />
              </div>
            </div>
            <div
              className="right flex flex-col items-start justify-center  w-full"
              data-aos="fade-left"
            >
              <div className="profil flex flex-col items-center justify-center md:items-start md:justify-start gap-4">
                <div className="title text-center md:text-left font-bold text-[25px] md:text-3xl">
                  À propos de{" "}
                  <span className="uppercase text-green-500">moi</span>
                </div>
                <div className="  text-justify ">
                  <p>
                    Bonjour ! Je suis un professionnel passionné du web,
                    spécialisé dans le design et le développement FrontEnd. Avec
                    une expérience variée en création d&apos;interfaces
                    attrayantes et en développement d&apos;applications mobiles
                    conviviales, je suis également un créateur de contenu
                    enthousiaste. Mon objectif est de collaborer avec des
                    équipes dynamiques pour relever des défis stimulants et
                    créer des solutions innovantes qui font la différence.
                  </p>
                </div>
                <div className="btn flex items-center justify-center w-max bg-green-500 rounded-full py-2 px-4 shadow-lg hover:bg-green-400">
                  <button className="font-bold text-sm text-black uppercase">
                    lire plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
