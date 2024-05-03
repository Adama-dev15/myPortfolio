"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeMenu from "../themes/themeToggle/ThemeToggle";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const handlechange = (link: any) => {
    setActiveLink(link);
  };
  return (
    <div>
      <header>
        <div className="container mx-auto  py-3 relative">
          <div className="header-inner">
            <div className="content flex items-center justify-between">
              <div className="logo">
                <Link href="/" className="text-3xl font-bold">
                  ADAM<span className="text-green-500">Dev.</span>
                </Link>
              </div>
              <div className="absolute right-1 top-5">
                <ThemeMenu />
              </div>
              <div className="navigation hidden md:block">
                <nav>
                  <ul className="flex items-center justify-center gap-12 font-bold text-lg">
                    <li>
                      <Link
                        href="/"
                        className={activeLink === "/" ? "text-green-500" : ""}
                        onClick={() => {
                          handlechange("/");
                        }}
                      >
                        Accueil
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className={
                          activeLink === "/about"
                            ? "text-green-500 duration-100"
                            : ""
                        }
                        onClick={() => {
                          handlechange("/about");
                        }}
                      >
                        A propos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className={
                          activeLink === "/services"
                            ? "text-green-500 duration-100"
                            : ""
                        }
                        onClick={() => {
                          handlechange("/services");
                        }}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio"
                        className={
                          activeLink === "/portfolio"
                            ? "text-green-500 duration-100"
                            : ""
                        }
                        onClick={() => {
                          handlechange("/portfolio");
                        }}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className={
                          activeLink === "/contact"
                            ? "text-green-500 duration-100"
                            : ""
                        }
                        onClick={() => {
                          handlechange("/contact");
                        }}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
