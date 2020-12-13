import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pdf from "../editable-stuff/resume.pdf";
import Profile from "../editable-stuff/img/profile.jpg";
import { showBlog, FirstName, LastName } from "../editable-stuff/configurations.json";


const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 200;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  return (

      <nav class="navbar navbar-expand-lg navbar-light fixed-top"  id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">
          <a className="navbar-brand text-dark" href="#home">
            {`<${FirstName} ${LastName} />`}
          </a>
        </span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={Profile} alt="profile pic"/>
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#home" id="navlink">Contact</a>
        </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#aboutme" id="navlink">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#projects" id="navlink">Projects</a>
          </li>
        </ul>
      </div>
    </nav>

    /*
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${
        isTop ? "bg-transparent" : "bg-gradient"
      } `}
    >
      <a className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${FirstName} />`}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {showBlog && (
            <li className="nav-item">
              <Link
                className="nav-link lead"
                to={process.env.PUBLIC_URL + "/blog"}
              >
                Blog
              </Link>
            </li>
          )}
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={Pdf}
              target="_blank"
              rel="noreferrer noopener"
            >
              <b>Resume</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              <b>About</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    */
  );
};

export default Navbar;
