"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CgMenuMotion } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import initAOS from "@/components/Animation";

function ThemeMenu() {
  useEffect(() => {
    initAOS();
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const handlechange = (link: any) => {
    setActiveLink(link);
    toggleMenu();
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:hidden ">
      <div className="btn-toggle" onClick={toggleMenu}>
        {menuOpen ? (
          <IoClose
            size={25}
            className="h-[1.5rem] w-[1.3rem] flex items-center justify-end cursor-pointer text-green-500"
          />
        ) : (
          <CgMenuMotion size={25} className="text-green-500 cursor-pointer " />
        )}{" "}
        <span className="sr-only">Toggle menu</span>
      </div>
      {menuOpen && (
        <div className="navigation  relative z-[10000000]" data-aos="fade-left">
          <nav className=" absolute h-[200px] w-[300px] right-0  top-2 bg-green-500 rounded-sm">
            <ul className="flex flex-col items-center py-4 justify-center gap-3 text-black  font-bold    ">
              <li>
                <Link
                  href="/"
                  className={activeLink === "/" ? "text-white duration-75" : ""}
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
                    activeLink === "/about" ? "text-white duration-100" : ""
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
                    activeLink === "/services" ? "text-white duration-100" : ""
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
                    activeLink === "/portfolio" ? "text-white duration-100" : ""
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
                    activeLink === "/contact" ? "text-white duration-100" : ""
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
      )}
    </div>
  );
}

export default ThemeMenu;
