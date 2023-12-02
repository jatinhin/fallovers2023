import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA } from "../../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useRef } from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { Link } from "react-router-dom";
import Home from "./dashboard/DashboardHome";
import Listing from "./dashboard/Listings/Listings";
import Piches from "./dashboard/Pitches/Piches";
import Transactions from "./dashboard/Transactions/Transactions";
import Social from "./dashboard/Social";
import $ from "jquery";
import axios from "axios";

function Dashboard() {
  const { 
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   // setisLoading(true);
  //   GET_HOMEPAGE_DATA().then((res) => {
  //     //const { data } = res;
  //   });
  // }, []);

  const [dropdown, setDropdown] = useState(false);
  const [selectedTab, setselectedTab] = useState(0);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);
  const userData = JSON.parse(localStorage.getItem("apiResponseData"));
  const userType = userData ? userData.user_type : null;

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="popular-courses circle  carousel-shadow default-padding default-padding-20">
            <div className="container dashboard-container">
              <div className="row dashboard-heading">
                <div className="col-md-10 padding-0 dashboard-top-left">
                  <b> Calling all creators! </b>Create your public profile today
                  and attract marketers.
                </div>

                <div className="col-md-2 padding-0 dashboard-top-right">
                  updates
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 dashboard-inner">
                  <div className="row dashboard-heading-title">
                    <div className="col-md-10 padding-0">
                      <h1>
                        {userType === 1
                          ? "My Work"
                          : selectedTab === 0 && userType === 0
                          ? "Dashboard"
                          : selectedTab === 1 && userType === 0
                          ? "Orders"
                          : selectedTab === 2 && userType === 0
                          ? "Casting Calls"
                          : ""}
                      </h1>
                      {userType === 1 ? (
                        <p>
                          We'll help you find the product that's right for you.
                        </p>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="col-md-2 padding-0">
                      {console.log(selectedTab, "selectedTabselectedTab")}

                      {userType === 1 ? (
                        <>
                          {selectedTab === 0 && (
                            <Link to="/create-listing">
                              <div className="create-listing">
                                Create listing
                              </div>
                            </Link>
                          )}
                          {selectedTab === 1 && (
                            <Link to="/cash-out">
                              <div className="create-listing">Cash out</div>
                            </Link>
                          )}
                          {selectedTab === 2 && (
                            <Link to="/go-to-marketplace">
                              <div className="create-listing">
                                Go to Marketplace
                              </div>
                            </Link>
                          )}
                          {selectedTab === 3 && (
                            <Link to="/cash-out">
                              <div className="create-listing">Cash out</div>
                            </Link>
                          )}
                          {selectedTab === 4 && (
                            <Link to="/create-public-profile">
                              <div className="create-listing">
                                Create public profile
                              </div>
                            </Link>
                          )}
                        </>
                      ) : (
                        <>
                          {selectedTab === 0 && (
                            <Link to="/brand/postacampaign">
                              <div className="create-listing">
                                Post a campaign
                              </div>
                            </Link>
                          )}
                          {(selectedTab === 1 || selectedTab === 2) && (
                            <Link to="/find-creator">
                              <div className="create-listing">Find Creator</div>
                            </Link>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="row ">
                    <Tabs onSelect={(key) => setselectedTab(key)}>
                      <TabList>
                        {userType === 1 ? (
                          <>
                            <Tab eventKey="Dashboard">Dashboard</Tab>
                            <Tab eventKey="Listings">Listings</Tab>
                            <Tab eventKey="Pitches">Pitches</Tab>
                            <Tab eventKey="Transactions">Transactions</Tab>
                            <Tab eventKey="Social">Social</Tab>
                          </>
                        ) : (
                          <>
                            <Tab eventKey="Overview">Overview</Tab>
                            <Tab eventKey="Orders">Orders</Tab>
                            <Tab eventKey="Casting Calls">Casting Calls</Tab>
                          </>
                        )}
                      </TabList>
                      <div className="col-md-12">
                        <TabPanel>
                          <Home  />
                        </TabPanel>

                        <TabPanel>
                          <Listing />
                        </TabPanel>

                        <TabPanel>
                          <Piches />
                        </TabPanel>

                        <TabPanel>
                          <Transactions />
                        </TabPanel>

                        <TabPanel>
                          <Social />
                        </TabPanel>
                      </div>
                    </Tabs>
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

export default Dashboard;
