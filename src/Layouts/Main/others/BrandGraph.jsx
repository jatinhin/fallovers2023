import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";

import Header from "../include/Header";

function BrandGraph(props) {

  return (
    <>
       <ParallaxProvider>
        <div className="background">
          <Header />
           <div className="popular-courses circle  carousel-shadow default-padding default-padding-20">
             <div className="container">
              <div className="row under-construction">
                Under construction - brand-graph
            </div>
          </div>
        </div>
        </div>
      </ParallaxProvider>
    </>
  );
}

export default BrandGraph;
