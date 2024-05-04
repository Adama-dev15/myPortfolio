"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { PiArrowSquareOutBold } from "react-icons/pi";
import DataPorfolio from "./DataPortfolio";
import initAOS from "@/components/Animation";

const Portfolio = () => {
  useEffect(() => {
    initAOS();
  }, []);

  const dataportfolio = DataPorfolio;
  return (
    <section className="portfolio bg-neutral-900">
      <div className="container mx-auto px-8">
        <div className="portfolio-inner py-10">
          <div className="content flex flex-col items-center justify-center gap-5">
            <div
              className="title text-center md:text-left font-bold text-[25px] md:text-3xl"
              data-aos="fade-down"
            >
              Mon
              <span className="uppercase text-green-500"> portfolio</span>
            </div>
            <div
              className="portfolio grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              data-aos="fade-up"
            >
              {dataportfolio.portfolio.map((portfolio, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="group card-portfolio text-white cursor-pointer w-full"
                    >
                      <div className="image   relative overflow-hidden  rounded-lg h-[190px] md:h-[190px] w-[100%]">
                        <Image
                          src={portfolio.image}
                          width={1000}
                          height={400}
                          alt="build-img"
                          className="img h-auto w-[100%] object-fill rounded-lg "
                        />
                        <div className="info-portfolio absolute top-0 left-0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-150 px-3  md:px-6 flex flex-col items-center  gap-2 justify-center rounded-lg bg-gradient-to-t from-green-500  h-full">
                          <div className="section-title">
                            <p className=" text-white font-bold text-[23px] lg:text-[30px]">
                              {portfolio.name}
                            </p>
                          </div>
                          <div className="text">
                            <p className="text-center mb-2">
                              {portfolio.description}
                            </p>
                          </div>
                          <div className="btn bg-white text-green-500 w-9 h-9 rounded-full flex items-center justify-center   ">
                            <Link href={"/"}>
                              <PiArrowSquareOutBold size={23} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
