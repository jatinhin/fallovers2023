import React from "react";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import {
  Logo,
  LogoName,
  profileCircle,
  LogoFooter,
  gmail,
} from "../../../Constants/Images";

function Header(props) {
  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const navigat = useNavigate();

  useEffect(() => {}, []);

  const searchInfluencer = () => {
    navigat(``);
  };

  return (
    <>
      <header id="home">
        <nav className="navbar navbar-default navbar-sticky bootsnav">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <Link className="navbar-brand" to="/">
                    <img src={Logo} className="logo" alt="Logo" />
                    <img src={LogoName} className="logo" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-md-2">
                <div className="top-search" style={{ display: "block" }}>
                  <div className="input-group">
                    <form action="#">
                      <input
                        type="text"
                        name="text"
                        className="form-control"
                        placeholder="Find creators"
                      />
                      <button type="button" onClick={() => searchInfluencer()}>
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="collapse navbar-collapse" id="navbar-menu">
                  <ul
                    className="nav navbar-nav navbar-right"
                    data-in="#"
                    data-out="#"
                  >
                    <li className="dropdown">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="menu-register-btn menu-register-btn-after-login"
                        >
                          Creators
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link to="/create-listing"> Create a listing </Link></Dropdown.Item>
                          <Dropdown.Item>
                            <Link to="/casting-calls"> Casting calls </Link> </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>

                    <li className="dropdown">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="menu-register-btn menu-register-btn-after-login"
                        >
                          Brands
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item> 
                            <Link to="/market-place">the create market place </Link> </Dropdown.Item>
                          <Dropdown.Item> 
                           <Link to="/managed-service"> managed services </Link> </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>

                    <li className="dropdown">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className="menu-register-btn menu-register-btn-after-login"
                        >
                          Resources
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link to="/influencer-marketing-resources">  influencer marketing resources </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                          <Link to="/our-work"> our work </Link> </Dropdown.Item>
                          <Dropdown.Item>
                          <Link to="/partners"> partners </Link> </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-1">
                <button className="get-started">Get Started</button>
              </div>

              <div className="col-md-1 top-user-profile">
                <Dropdown>
                  <Dropdown.Toggle variant="success">
                    <img src={profileCircle} width={35} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <b
                        className="signup-menu"
                        onClick={(e) => setLoginModal(true)}
                      >
                        Log in
                      </b>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/brand-graph">Brand Graph </Link></Dropdown.Item>
                    <Dropdown.Item>
                      <b
                        onClick={(e) => setSignupModal(true)}
                        className="signup-menu"
                      >
                        Sign Up
                      </b>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/knowledge-base"> Knowledge base </Link> </Dropdown.Item>
                    <Dropdown.Item>
                    <Link to="/contact-support"> Contact Support </Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="seperator seperator-top col-md-12">
              <span className="border" />
            </div>
          </div>
        </nav>
      </header>

      <Modal show={signupModal} onHide={(e) => setSignupModal(false)}>
        <Modal.Body>
          <div className="row modal-login">
            <img src={LogoFooter} className="logo" alt="Logo" />
            <h2> Log in to The Creator Marketplace® </h2>
            <p> We'll check to see if you have an existing account. </p>

            <div className="input-gmail">
              <img src={gmail} className="logo" alt="gmail" width={30} />
              &nbsp;Continue with Google
            </div>

            <div className="clear"></div>

            <div>
              <div className="modal-login-speratar col-md-6"></div>
              <div className="modal-login-or col-md-1">Or</div>
              <div className="modal-login-speratar col-md-6"></div>
            </div>

            <div className="clear"></div>

            <div className="input-email">
              <input
                type={"email"}
                id="loginEmail"
                name="loginEmail"
                placeholder="Email"
              ></input>
            </div>

            <Link to="/sign-up">
              <div className=" mb-12 mb-xl-12 login-create-account">
                <button>Create Account</button>
                {""}
              </div>
            </Link>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={loginModal} onHide={(e) => setLoginModal(false)}>
        <Modal.Body>
          <div className="row modal-login">
            <img src={LogoFooter} className="logo" alt="Logo" />
            <h2> Login me in </h2>
            <p>
              {" "}
              Already have an account?
              <a
                onClick={(e) => {
                  setLoginModal(false);
                  setTimeout(() => {
                    setSignupModal(true);
                  }, 100);
                }}
                href="#"
              >
                {" "}
                Create account{" "}
              </a>
            </p>

            <div className="input-email">
              <input
                type={"email"}
                id="loginEmail"
                name="loginEmail"
                placeholder="Email"
              ></input>
            </div>

            <div className="input-email">
              <input
                type={"password"}
                id="loginPassword"
                name="loginPassword"
                placeholder="Password"
              ></input>
            </div>

            <div className=" mb-12 mb-xl-12 login-create-account">
              <Link to="/dashboard">
                <button>Login Now</button>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
