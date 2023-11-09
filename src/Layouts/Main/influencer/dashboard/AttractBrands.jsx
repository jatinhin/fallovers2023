import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA } from "../../../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useRef } from "react";
import Header from "../../include/Header";
import Footer from "../../include/Footer";
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import $ from "jquery";
import Home from "./DashboardHome";
import Listing from "../dashboard/Listings/Listings";
import Piches from "../dashboard/Pitches/Piches";
import Transactions from "../dashboard/Transactions/Transactions";
import Social from "../dashboard/Social";

import {
  active,
  dissproved,
  done,
  draft,
  menu,
  notTime,
  paused,
  search,
  searchFilter,
  searchMenu,
  user,
} from "../../../../Constants/Images";

function AttractBrands(props) {
  const {
    formState: { errors },
  } = useForm();

  const [campaingStatus, setcampaingStatus] = useState([
    "Draft",
    "Active",
    "In-Process",
    "Disapproved",
    "Paused",
  ]);

  useEffect(() => {
    // setisLoading(true);
    GET_HOMEPAGE_DATA().then((res) => {
      //const { data } = res;
    });
  }, []);

  const [dropdown, setDropdown] = useState(false);

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

  $("tr").click(function () {
    $(".listing-menu").hide();
  });

  const listingMenu = (key) => {
    $(".listing-menu").hide();
    $(`.listing-menu-${key}`).show();
  };

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
                      <h1>My Work</h1>
                      <p>
                        We'll help you find the product that's right for you.
                      </p>
                    </div>

                    <div className="col-md-2 padding-0">
                      <Link to="/casting-calls">
                        <div className="create-listing"> Create listing </div>
                      </Link>
                    </div>
                  </div>

                  <div className="row ">
                    <Tabs>
                      <TabList>
                        <Tab>Dashboard</Tab>
                        <Tab>Listings</Tab>
                        <Tab>Pitches</Tab>
                        <Tab>Transactions</Tab>
                        <Tab>Social</Tab>
                      </TabList>


                      <div className="col-md-12">
                        <TabPanel>
                          <Home />
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

export default AttractBrands;
