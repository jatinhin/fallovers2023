import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";


import {
  LogoName,
  footer1,
  footer2,
  footerCircle,
  footerbtn1,
  footer3,
  footerBtn2,
  footerRight,
  footer4,
  social,
  LogoFooter, instagram,Team
} from "../../../Constants/Images";
import Header from "../include/Header";

function KnowledgeBase(props) {

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />
           <div className="popular-courses circle  carousel-shadow default-padding default-padding-20">
             <div className="container">
              <div className="row under-construction">
                Under construction - knowledge-base
            </div>
          </div>
        </div>
        </div>
      </ParallaxProvider>
    </>
  );
}

export default KnowledgeBase;
