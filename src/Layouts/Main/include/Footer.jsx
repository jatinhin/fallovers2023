import React from "react";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import { Parallax } from "react-scroll-parallax";
import { LogoName, footer2, LogoFooter,
    footer1,
    footerCircle,
    footerbtn1,
    footer3,
    footerBtn2,
    footerRight,
    footer4,
    social } from "../../../Constants/Images";

function Footer() {
  return (
    <>
      <div
        className="clients-area default-padding"
        style={{ paddingTop: "0px" }}
      >
        <div className="container footer-new">
          <div className="row">
            <div className="col-md-4 info">
              <img src={footer1} className="icon-1" alt="Logo" />
              <a
                className="navbar-brand"
                href="#"
                style={{ padding: "38px 15px" }}
              >
                <img src={LogoFooter} className="logo" alt="Logo" />
                <img src={LogoName} className="logo" alt="Logo" />
              </a>
              <img src={footer2} className="icon-2" alt="Logo" />

              <Parallax speed={-10} scale={[0.75, 1]} easing="easeOutQuint">
                <img src={footerCircle} className="icon-circle" alt="Logo" />
              </Parallax>
            </div>
            <div className="col-md-8 clients">
              <img src={footerbtn1} className="icon-3" alt="Logo" />
              <ul>
                <li>
                  <img
                    src={social}
                    className="logo"
                    alt="Logo"
                    style={{ position: "relative", top: "5rem" }}
                  />
                </li>
              </ul>
              <img src={footer3} className="icon-4" alt="Logo" />
              <img src={footerBtn2} className="icon-5" alt="Logo" />

              <Parallax
                style={{ position: "absolute" }}
                speed={-10}
                easing="easeInOut"
              >
                <img src={footerRight} className="icon-6" alt="Logo" />
              </Parallax>

              <Parallax
                translateX={["-100px", "0px"]}
                scale={[0.75, 1]}
                easing="easeOutQuint"
              >
                <img src={footer4} className="icon-8" alt="Logo" />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
