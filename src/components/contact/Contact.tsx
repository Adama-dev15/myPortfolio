"use client";
import React, { useEffect } from "react";
import initAOS from "@/components/Animation";

const Contact = () => {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <section className="contact">
      <div className="container mx-auto  md:px-8">
        <div className="contact-inner py-10 ">
          <div className="content flex flex-col items-center justify-center gap-5">
            <div
              className="title text-center md:text-left font-bold text-[25px] md:text-3xl"
              data-aos="fade-down"
            >
              Me
              <span className="uppercase text-green-500"> contacter</span>
            </div>
            <div
              className="formulaire w-full px-5 md:px-20 lg:px-60"
              data-aos="fade-up"
            >
              <form
                action="#"
                className="flex flex-col items-center justify-center w-full gap-3"
              >
                <div className="input-data grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                  <input
                    type="text"
                    placeholder="Nom* :"
                    className="py-2 pl-3 outline-none bg-neutral-900 rounded-lg md:pl-5 w-full "
                  />
                  <input
                    type="text"
                    placeholder="Prénoms* :"
                    className="py-2 pl-3 outline-none bg-neutral-900 rounded-lg md:pl-5 w-full "
                  />
                </div>
                <div className="input-data grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                  <input
                    type="email"
                    placeholder="Email* :"
                    className="py-2 pl-3 outline-none bg-neutral-900 rounded-lg md:pl-5 w-full "
                  />
                  <input
                    type="text"
                    placeholder="Téléphon* : +225 05 85 58 98 12"
                    className="py-2 pl-3 outline-none bg-neutral-900 rounded-lg md:pl-5 w-full "
                  />
                </div>
                <div className="input-data w-full">
                  <textarea
                    placeholder="Votre message* :"
                    className="py-2 pl-3 outline-none bg-neutral-900 rounded-lg md:pl-5 w-full  h-[200px]"
                  ></textarea>
                </div>
                <div className="input-data">
                  <div className="down flex items-center justify-center w-max bg-green-500 rounded-full py-2 px-4 shadow-lg hover:bg-green-400">
                    <button className="font-bold text-black">
                      Envoyer message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
