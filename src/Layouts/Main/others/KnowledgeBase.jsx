import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../include/Footer";

function KnowledgeBase(props) {
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
                          <ul className="accrdion-menu">
                            <li>Menu 1</li>
                            <li>Menu 2</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div className="col-md-7 contact-right-side">
                    <h1>Contact Support</h1>

                    <div className="contact-right-side-form row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name*</label>
                          <input type="text" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name*</label>
                          <input type="text" />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Business Email*</label>
                          <input type="text" />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Subject*</label>
                          <input type="text" />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Description*</label>
                          <input type="text" />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Attachments*</label>
                          <input type="file" />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group align-center">
                          <button>Create a Support Ticket</button>
                        </div>
                      </div>
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

export default KnowledgeBase;
