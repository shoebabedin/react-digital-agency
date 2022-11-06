import { List, X } from "phosphor-react";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../../assets/images/logo/logo.png";

const NavBar = () => {
  const page = window.location.pathname === "/";

  // const [show, setShow] = useState(false);
  const [mobNavShow, setMobNavShow] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  // const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset < 100 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  const navShow = () => {
    setMobNavShow(!mobNavShow);
  };

  return (
    <header
      className={`bg-[#F6FDFF] shadow-[0px_4px_32px_rgba(48,167,215,0.2)] ${
        stickyNav ? "sticky" : ""
      }`}
    >
      <nav className="relative px-2 py-4">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={logo} className="object-scale-down" alt="" />
            </Link>
            <ul className="hidden md:flex space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500`}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about-us"
                  className="text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="flex relative group">
                <Link
                  to="#"
                  className="mr-1 text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                >
                  SERVICES
                </Link>
                {/* <!-- Submenu starts --> */}
                <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg flex items-start justify-center flex-col gap-4 rounded-[12px]">
                  <li className="text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500">
                    <NavLink to="/web-development">Web Development</NavLink>
                  </li>
                  <li className="text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500">
                    <NavLink to="/email-marketing">Email Marketing</NavLink>
                  </li>
                  <li className="text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500">
                    <NavLink to="/video-marketing">Video Marketing</NavLink>
                  </li>
                  <li className="text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500">
                    <NavLink to="/seo">SEO</NavLink>
                  </li>
                  <li className="text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500">
                    <NavLink to="/social-marketing">Social Marketing</NavLink>
                  </li>
                  <li className="text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500">
                    <NavLink to="/sms-marketing">SMS Marketing</NavLink>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>
              <li>
                <NavLink
                  to="/case-studies"
                  className="text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                >
                  CASE STUDIES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            {/* <!-- Mobile menu icon --> */}
            <button onClick={navShow} id="mobile-icon" className="md:hidden">
              {/* <List size={28} color="#404040" weight="bold" /> */}
              {mobNavShow ? (
                <X size={28} color="#404040" weight="bold"/>
              ) : (
                <List size={28} color="#404040" weight="bold"/>
              )}
            </button>
          </div>
        </div>

        {/* <!-- Mobile menu --> */}
       <div className={`md:hidden flex justify-center w-full`} >
          <div
            id="mobile-menu"
            className={`mobile-menu absolute top-[65px] w-full bg-white shadow-lg leading-9 font-bold h-screen p-6 ${mobNavShow ? 'block active' : ''}`}
          >
            <ul className="flex items-start justify-start flex-col gap-2">
              <li className="border-b-2 border-white text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                <NavLink to="/" className="">
                  HOME
                </NavLink>
              </li>
              <li className="border-b-2 border-white text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                <NavLink to="/about-us" className="">
                  ABOUT US
                </NavLink>
              </li>
              <li className="border-b-2 border-white text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                <p to="#" className="">
                  SERVICES
                </p>

                {/* <!-- Submenu starts --> */}
                <ul className="border-l border-[#393E50] ml-4 px-4 items-start justify-start flex-col gap-4">
                  <li className="text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                    <NavLink className="" to="/web-development">
                      Web Development
                    </NavLink>
                  </li>
                  <li className="text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                    <NavLink className="" to="/email-marketing">
                      Email Marketing
                    </NavLink>
                  </li>
                  <li className="text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                    <NavLink className="" to="/video-marketing">
                      Video Marketing
                    </NavLink>
                  </li>
                  <li className="text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                    <NavLink className="" to="/seo">
                      SEO
                    </NavLink>
                  </li>
                  <li className="text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                    <NavLink
                      className=""
                      to="/social-marketing"
                    >
                      Social Marketing
                    </NavLink>
                  </li>
                  <li className="text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                    <NavLink className="" to="/sms-marketing">
                      SMS Marketing
                    </NavLink>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>
              <li className="border-b-2 border-white text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                <NavLink to="/case-studies" className="">
                  CASE STUDIES
                </NavLink>
              </li>
              <li className="border-b-2 border-white text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5">
                <NavLink to="/contact" className="">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
