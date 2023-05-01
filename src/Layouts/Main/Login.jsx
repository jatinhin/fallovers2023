import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GET_HOMEPAGE_DATA } from "../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "./include/Header";

import {
  Logo,
  rightMobile,
  MobileTwo,
  SearchIcon,
  rating,
  createStart,
  acceptIncoming,
  yourMagic,
  sideImage,
  c1,
  c2,
  twitter,
  tiktok,
  facebook,
  pinterest,
  instagram,
  Team,
} from "../../Constants/Images";
import { useRef } from "react";
import Footer from "./include/Footer";

function Login(props) {
  useEffect(() => {}, []);

  return (
    <>
      <div className="background bg-sign-in">
        <div className="about-area default-padding">
          <div className="container">
            <div className="row">
              <div className="about-info">
                <div className="col-md-4 col-md-offset-1">
                  <div className="sing-in-left">
                    Play Video on scroll loop today's top influencer
                  </div>
                </div>

                <div className="col-md-4 col-md-offset-2 sing-in">
                  <h1>Let's get you signed up</h1>
                  <p>
                    No account found with the email address deep.singh@gmail.com
                  </p>

                  <div className="input-email">
                    <input
                      type="email"
                      id="loginEmail"
                      name="loginEmail"
                      placeholder="Email"
                    />
                  </div>

                  <div className="input-email">
                    <input
                      type="email"
                      id="loginEmail"
                      name="loginEmail"
                      placeholder="Password"
                    />
                  </div>

                  <p>
                    <input
                      type="checkbox"
                      id="loginEmail"
                      name="loginEmail"
                      placeholder="Password"
                    />
                    Yes, I would like to receive email marketing communication
                    from IZEA. I understand that I can unsubscribe at any time.
                  </p>

                  <div className="row">
                    <div className="col-md-6 login-create-account back">
                      <button>Back</button>
                    </div>

                    <div className="col-md-6 login-create-account">
                      <button>Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
