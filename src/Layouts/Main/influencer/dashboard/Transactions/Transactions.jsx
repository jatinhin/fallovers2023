import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA } from "../../../../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import $ from "jquery";
import * as MdIcons from "react-icons/md";
import {
  active,
  card3,
  dissproved,
  done,
  draft,
  paused,
  search,
  searchFilter,
  searchMenu,
  user,
} from "../../../../../Constants/Images";
import { useRef } from "react";
import CreateListing from "../CreateListing";
import { Link } from "react-router-dom";

function Transactions(props) {
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
  const [activeSection, setactiveSection] = useState(1);

  let ref = useRef();
  let checkList = useRef();

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

  const checkPendingTransaction=()=>{
      alert('A')
  }

  return (
    <>
      <div className="row dashboard-card-outer">
        <div className="col-md-12 add-payment">
          <button>
            {" "}
            <MdIcons.MdAdd /> Add Payments
          </button>
        </div>
        <div className="col-md-4">
          <div
            onClick={() => setactiveSection(1)}
            className={`row dashboard-card dashboard-card-new ${
              activeSection == 1 ? "active-card" : ""
            }`}
          >
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
          <div
            onClick={() => setactiveSection(2)}
            className={`row dashboard-card dashboard-card-new ${
              activeSection == 2 ? "active-card" : ""
            }`}
          >
            <div className="col-md-12">
              <h3>ACTIVE SALES</h3>
              <p className="detail">
                <span>Inr</span> 30,000
              </p>
              <p className="create-list transaction-p">
                --  Completed Sales 
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            onClick={() => setactiveSection(3)}
            className={`row dashboard-card dashboard-card-new ${
              activeSection == 3 ? "active-card" : ""
            }`}
          >
            <div className="col-md-12">
              <h3>PENDING PAYOUT</h3>
              <p className="detail">
                <span>Inr</span> 2,000
              </p>
              <p className="create-list">$0 Total Earning</p>
            </div>
          </div>
        </div>

        <div className="clear"></div>
        <div className="card-bottom"></div>

        {activeSection == 1 ? (
          campaingStatus ? (
            <div className="col-md-12 dashboard-table">
              <div className="row margin-0">
                <div className="col-md-8 dashboard-filter-input t-filter-left">
                  <div className="dashboard-search-icon">
                    {" "}
                    <img src={search} />
                  </div>
                  <div className="dashboard-search-input">
                    <input type="text" placeholder="ACTIVE PURCHASES"></input>
                  </div>
                </div>

                <div className="col-md-3 dashboard-filter-btn t-filter-right">
                  <button>
                    <img src={searchFilter} width={10} />
                  </button>
                  <button>
                    <MdIcons.MdDownloading />
                  </button>
                  <button>
                    <img src={searchMenu} />
                  </button>
                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th width="4">
                      <input type="checkbox" />
                    </th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Recipient Name</th>
                    <th>Campaign Name</th>
                    <th>Invoice no.</th>
                  </tr>
                </thead>

                <tbody>
                  {campaingStatus.map((key, index) => {
                    return (
                      <tr>
                        <td width="4">
                          <input type="checkbox" />
                        </td>
                        <td>$1254.50</td>
                        <td>Direct Pay</td>
                        <td>
                          <img src={done} />
                        </td>
                        <td className="buyer">
                          <div className="dashboard-table-user">
                            <img src={user} />
                          </div>
                          <span> Kapil Thakkar </span>
                        </td>
                        <td>ABC</td>
                        <td>
                          <b>P-7WDSOW</b>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="col-md-12 pending-info">
              <CreateListing />
            </div>
          )
        ) : activeSection == 2 ? (
          campaingStatus ? (
            <div className="col-md-12 dashboard-table">
              <div className="row margin-0">
                <div className="col-md-10 dashboard-filter-input">
                  <div className="dashboard-search-icon">
                    {" "}
                    <img src={search} />
                  </div>
                  <div className="dashboard-search-input">
                    <input type="text" placeholder="ACTIVE SALES"></input>
                  </div>
                </div>

                <div className="col-md-2 dashboard-filter-btn">
                  <button>
                    <img src={searchFilter} width={10} />
                  </button>
                  <button>
                    <img src={searchMenu} />
                  </button>
                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th width="4">
                      <input type="checkbox" />
                    </th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Recipient Name</th>
                    <th>Campaign Name</th>
                    <th>Invoice no.</th>
                  </tr>
                </thead>

                <tbody>
                  {campaingStatus.map((key, index) => {
                    return (
                      <tr>
                        <td width="4">
                          <input type="checkbox" />
                        </td>
                        <td>$1254.50</td>
                        <td>Direct Pay</td>
                        <td>
                          <img src={done} />
                        </td>
                        <td className="buyer">
                          <div className="dashboard-table-user">
                            <img src={user} />
                          </div>
                          <span> Kapil Thakkar </span>
                        </td>
                        <td>ABC</td>
                        <td>
                          <b>P-7WDSOW</b>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="col-md-12 pending-info">
              <CreateListing />
            </div>
          )
        ) : campaingStatus ? (
          <div className="col-md-12 dashboard-table">
            <div className="row margin-0">
              <div className="col-md-10 dashboard-filter-input">
                <div className="dashboard-search-icon">
                  {" "}
                  <img src={search} />
                </div>
                <div className="dashboard-search-input">
                  <input type="text" placeholder="PENDING PAYOUT"></input>
                </div>
              </div>

              <div className="col-md-2 dashboard-filter-btn">
                <button>
                  <img src={searchFilter} width={10} />
                </button>
                <button>
                  <img src={searchMenu} />
                </button>
              </div>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th width="4">
                    <input onClick={()=>checkPendingTransaction()} type="checkbox" />
                  </th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Recipient Name</th>
                  <th>Campaign Name</th>
                  <th>Invoice no.</th>
                </tr>
              </thead>

              <tbody>
                {campaingStatus.map((key, index) => {
                  return (
                    <tr>
                      <td width="4">
                        <input ref={checkList} type="checkbox" />
                      </td>
                      <td>$1254.50</td>
                      <td>Direct Pay</td>
                      <td>
                        <img src={done} />
                      </td>
                      <td className="buyer">
                        <div className="dashboard-table-user">
                          <img src={user} />
                        </div>
                        <span> Kapil Thakkar </span>
                      </td>
                      <td>ABC</td>
                      <td>
                        <b>P-7WDSOW</b>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="col-md-12 pending-info">
            <CreateListing />
          </div>
        )}

        <div className="col-md-12 pending-info" style={{ display: "none" }}>
          <CreateListing />
        </div>
      </div>
    </>
  );
}

export default Transactions;
