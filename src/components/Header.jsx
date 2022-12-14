import { useState, useEffect } from "react";
import { header } from "../data";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi"
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { logo, btnText } = header;

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "lg:top-0 bg-white shadow-2xl" : "lg;top-[60px]"
      } py-6 lg:py-4 fixed w-full
  transition-all z-10`}
    >
      <div className="container mx-auto flex justify-between items-center text-center">
        <div className="flex space-x-5 items-center">
          <a
            href="#"
            className="flex space-x-4 "
            data-aos="fade-down"
            data-aos-delay="1200"
          >
            <img src={logo} alt="" />
          </a>
          <h3 className="text-3xl font-extrabold text-blue-800">JMXchange</h3>
        </div>
        <div
          className="hidden lg:flex space-x-6"
          data-aos="fade-down"
          data-aos-delay="1200"
        >
          <Nav />
          <button
            className="btn btn-md hidden lg:flex"
            data-aos="fade-down"
            data-aos-delay="1400"
          >
            {btnText}
          </button>
        </div>

        {/* <Nav />  */}
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <MdClose className="text-3xl text-[#120795]" />
          ) : (
            <GiHamburgerMenu className="text-3xl text-[#120795]" />
          )}
        </button>

        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 w-[60vw] lg:hidden transition-all bottom-0 bg-[#120795]`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
