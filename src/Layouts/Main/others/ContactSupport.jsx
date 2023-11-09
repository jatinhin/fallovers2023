import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../include/Footer";

function ContactSupport(props) {
  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="about-area default-padding contact-support-search m-bottom-0">
            <div className="container">
              <div className="row">
                <div className="about-info">
                  <div className="contact-search">
                    <AiIcons.AiOutlineSearch />
                    <input placeholder="Search for answers" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container width-1000">
            <div className="row">
              <div className="col-md-12 manag-service-col contact-section">
                <div className="row">
                  <div className="col-md-12 manage-service-heading">
                    Help Center > The Creator Marketplace®
                  </div>
                  <div className="col-md-4 contact-left-side">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          The Creator Marketplace®
                          <MdIcons.MdArrowDropDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="accrdion-menu">
                            <li>Menu 1</li>
                            <li>Menu 2</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Followers® Flex
                          <MdIcons.MdArrowDropDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="accrdion-menu">
                            <li>Menu 1</li>
                            <li>Menu 2</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          IZEA Managed Services
                          <MdIcons.MdArrowDropDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="accrdion-menu">
                            <li>Menu 1</li>
                            <li>Menu 2</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Influencers & Creators
                          <MdIcons.MdArrowDropDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="accrdion-menu">
                            <li>Menu 1</li>
                            <li>Menu 2</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          BrandGraph
                          <MdIcons.MdArrowDropDown />
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div className="col-md-7 contact-right-side">
                    <h1>The Creator Marketplace®</h1>
                    <p> for Buyers & Sellers</p>

                    <div className="contact-right-side-section">
                      <h2>Marketers & Buyers</h2>
                      <ul>
                        <li>
                          Marketers & Buyers - Content Delivery and Order
                          Actions
                        </li>
                        <li>
                          Marketers & Buyers - Content Delivery and Order
                          Actions
                        </li>
                        <li>
                          Marketers & Buyers - Content Delivery and Order
                          Actions
                        </li>
                        <li>
                          Marketers & Buyers - Content Delivery and Order
                          Actions
                        </li>
                        <li>
                          Marketers & Buyers - Content Delivery and Order
                          Actions
                        </li>
                      </ul>

                      <span className="see-more">See more</span>
                    </div>

                    <div className="contact-right-side-section">
                      <h2>Creators & Sellers</h2>
                      <ul>
                        <li>Creators and Sellers - Pitches Admin Approved</li>
                        <li>Creators & Sellers - Submitting Pitches</li>
                        <li>Creators & Sellers - Public Profile</li>
                        <li>Creators & Sellers - Navigating Your Dashboard</li>
                      </ul>

                      <span className="see-more">See more</span>
                    </div>

                    <div className="contact-right-side-section">
                      <h2>Settings</h2>
                      <ul>
                        <li>Deleting Your Account</li>
                        <li>Signing In With Continue With Google</li>
                        <li>Settings - Marketplace Memberships</li>
                        <li>Settings - Platform Notifications</li>
                      </ul>
                      <span className="see-more">See more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default ContactSupport;
