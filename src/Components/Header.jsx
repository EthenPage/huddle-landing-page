import React from "react";
import IMAGES from "../Assets/Images";

const Header = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="head">
            <img className="logo" src={IMAGES.logo} alt="logo" />
            <a href="#" className="btn btn-small">
              Try it Free
            </a>
          </div>
          <div className="hero">
            <div className="head-text">
              <h1>Build The Community Your Fans Will Love</h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <a href="#" className="btn btn-normal">
                Get Started For Free
              </a>
            </div>
            <div className="hero-img">
              <img className="head-img" src={IMAGES.headImage} alt="headpic" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
