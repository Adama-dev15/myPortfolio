"use client";
import React, { useEffect } from "react";
import { FaDatabase, FaMobileAlt } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import initAOS from "@/components/Animation";

const Service = () => {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <section className="service">
      <div className="container mx-auto px-8">
        <div className="service-inner py-16">
          <div className="content flex flex-col items-center justify-center gap-5">
            <div
              className="title text-center md:text-left font-bold text-[25px] md:text-3xl"
              data-aos="fade-down"
            >
              Nos
              <span className="uppercase text-green-500"> services</span>
            </div>
            <div
              className="services grid grid-cols-1 md:grid-cols-3 gap-5"
              data-aos="fade-up"
            >
              <div className="card-service  flex flex-col items-center justify-center gap-2 md:py-6 md:px-7 py-3 px-4 bg-neutral-900 rounded-md hover:border hover:border-green-500 transition duration-150 ">
                <div className="icon">
                  <IoCodeSlashSharp size={50} className="text-green-500" />
                </div>
                <div className="name font-bold text-[23px] lg:text-[30px]">
                  <h2>Font End</h2>
                </div>
                <div className="text">
                  <p className="text-center">
                    Explorez mon travail en développement FrontEnd : des
                    interfaces utilisateur élégantes et des expériences web
                    interactives qui captivent les visiteurs dès le premier
                    regard.
                  </p>
                </div>
                <div className="btn flex items-center justify-center w-max bg-green-500 rounded-full py-2 px-4 shadow-lg hover:bg-green-400">
                  <button className="font-bold text-sm text-black uppercase">
                    lire plus
                  </button>
                </div>
              </div>
              <div className="card-service  flex flex-col items-center justify-center gap-2 md:py-6 md:px-7 py-3 px-4 bg-neutral-900 rounded-md hover:border hover:border-green-500 transition duration-150 ">
                <div className="icon">
                  <FaDatabase size={50} className="text-green-500" />
                </div>
                <div className="name font-bold text-[23px] lg:text-[30px]">
                  <h2>Back End</h2>
                </div>
                <div className="text">
                  <p className="text-center">
                    Explorez mes compétences en développement BackEnd : des
                    solutions robustes et sécurisées qui alimentent les
                    fonctionnalités de vos applications web.
                  </p>
                </div>
                <div className="btn flex items-center justify-center w-max bg-green-500 rounded-full py-2 px-4 shadow-lg hover:bg-green-400">
                  <button className="font-bold text-sm text-black uppercase">
                    lire plus
                  </button>
                </div>
              </div>
              <div className="card-service  flex flex-col items-center justify-center gap-2 md:py-6 md:px-7 py-3 px-4 bg-neutral-900 rounded-md hover:border hover:border-green-500 transition duration-150 ">
                <div className="icon">
                  <FaMobileAlt size={50} className="text-green-500" />
                </div>
                <div className="name font-bold text-[23px] lg:text-[30px]">
                  <h2>Application Mobile</h2>
                </div>
                <div className="text">
                  <p className="text-center">
                    Explorez mon savoir-faire en développement
                    d&apos;applications : des solutions mobiles innovantes et
                    conviviales conçues pour répondre aux besoins de vos
                    utilisateurs.
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

export default Service;
