import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA } from "../../../../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import $ from "jquery";

import {
  card3,
} from "../../../../../Constants/Images";
import { useRef } from "react";
import CreateListing from "../CreateListing";

function ActiveTodos(props) {

  const {
    formState: { errors },
  } = useForm();

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
    $(`.listing-menu`).hide();
  });

  const listingMenu = (key) => {
    $(`.listing-menu`).hide();
    $(`.listing-menu-${key}`).show();
  };

  return (
    <>
      <div className="row dashboard-card-outer">
        <div className="col-md-4">
          <div className="row  dashboard-card dashboard-card-new transaction-card">
            <div className="col-md-8">
              <h3>ACTIVE PURCHASES</h3>
              <p className="detail">
                <span>Inr</span> 20,000
              </p>
              <p className="create-list transaction-p">
                -- Completed Purchases
              </p>
            </div>

            <div className="col-md-4 card-icon">
              <img src={card3} className="logo" alt="Logo" />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="row  dashboard-card dashboard-card-new transaction-card">
            <div className="col-md-12">
              <h3>ACTIVE SALES</h3>
              <p className="detail">
                <span>Inr</span> 30,000
              </p>
              <p className="create-list transaction-p">-- Completed Sales</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="row  dashboard-card dashboard-card-new transaction-card">
            <div className="col-md-12">
              <h3>PENDING PAYOUT</h3>
              <p className="detail">
                <span>Inr</span> 2,000
              </p>
              <p className="create-list">$0 Total Earning</p>
            </div>
          </div>
        </div>

           <div className="col-md-12 pending-info" style={{display:'none'}}>
              <CreateListing/>
          </div>
      </div>
    </>
  );
}

export default ActiveTodos
