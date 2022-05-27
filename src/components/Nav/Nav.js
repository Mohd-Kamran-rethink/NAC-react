import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const publicUrl = process.env.PUBLIC_URL;

  const navItems = [
    {
      img: `${publicUrl}/header/icon1.png`,
    },
    {
      img: `${publicUrl}/header/icon2.png`,
    },
    {
      img: `${publicUrl}/header/icon3.png`,
    },
    {
      img: `${publicUrl}/header/icon4.png`,
    },
  ];
  return (
    <>
      <section className="header">
        <div className="container-fluid">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 float-left">
            <a href="/" className="logo">
              <img
                src={`${publicUrl}/logo/New Athens Creative Logo 01.png`}
                alt="nac"
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 float-left">
            {navItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-2 col-md-2 col-sm-2 col-xl-2 float-left"
                >
                  <a href="/" className="icon1">
                    <img src={item.img} alt="nac" />
                  </a>
                </div>
              );
            })}
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 float-left">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 float-left">
              <Link to="/registration">Register</Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 float-left">
              <a href="/" className="login-botton">
                Login
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4 float-left">
              <a href="/" className="user">
                <img src={`${publicUrl}/header/user.png`} alt="nac" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
