import React, { useState, useEffect, useContext } from "react";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import ProfileDropDown from "../home/ProfileDropDown";
import { AcessTokenContext } from "../../contexts/accessTokenContext";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOn, setnavOn] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [pageYoffset, setpageYoffset] = useState(0);
  const { registered } = useContext(AcessTokenContext);

  const handleMNav = () => {
    navOn ? setnavOn(false) : setnavOn(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setpageYoffset(window.pageYOffset);
    });
    window.pageYOffset > 0 ? setShadow(true) : setShadow(false);
  }, [pageYoffset]);

  return (
    <div className={`navbar ${shadow ? "shadowNavbar" : ""}`}>
      <div className='container'>
        <MobileNav handleMNav={handleMNav} navOn={navOn} />
        <nav className='site-nav'>
          <div className='logo'>
            <img src={require("../../assets/global/Untitled-2.png")} alt='' />
          </div>
          <NavLinks />
          <div className='language'>
            <img
              src={require("../../assets/global/flag-button-round-250.png")}
              alt=''
            />
          </div>

          {registered && <ProfileDropDown />}
          <Link to='/login'>
            {!registered && (
              <Button py={2} px={0.3} bgClass='greenBtn' text='Kirish' />
            )}
          </Link>
          <div onClick={handleMNav} className='hamburger'>
            <i className='fas fa-bars'></i>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
