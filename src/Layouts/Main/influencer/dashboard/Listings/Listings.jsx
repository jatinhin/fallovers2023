import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA } from "../../../../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import * as MdIcons from "react-icons/md";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import $ from "jquery";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import {
  card3,
  card4,
  card5,
  menu,
  user,
  search,
  draft,
  active,
  process,
  notTime,
  paused,
  searchFilter,
  searchMenu,
  done,
  dissproved,
} from "../../../../../Constants/Images";
import cal from '../../../assets/cal.png'
import shop from "../../../assets/shop.png";
import money from "../../../assets/money.png";

import { useRef } from "react";
import CreateListing from "../CreateListing";
import { Link } from "react-router-dom";
import ReactTable2 from "../../../brand/parts/ReactTable2";
import { data3 } from "../../../brand/DummyData";
import TransactionPage from "../../../brand/parts/TransactionPage";

function Listing(props) {
  const [campaingStatus, setcampaingStatus] = useState([
    "Draft",
    "Active",
    "In-Process",
    "Disapproved",
    "Paused",
  ]);

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
  const [activeSection, setactiveSection] = useState(1);

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

  const activeCard = () => {
    alert("A");
  };

  const deleteList = (index) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // const getList = campaingStatus.splice(index, 1);
            const getList = campaingStatus.filter((item, key) => key !== index);
            setcampaingStatus(getList);
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userType = userData ? userData.user_type : null;
  return (
    <>
      <div className="row dashboard-card-outer">
        <div
          onClick={() => setactiveSection(1)}
          className={userType === "1" ? "col-md-3" : "col-md-4"}
        >
          <div
            className={`row dashboard-card dashboard-card-new ${
              activeSection == 1 ? "active-card" : ""
            }`}
          >
            <div className="col-md-8">
              <h3>Active Todos</h3>
              <p className="detail">
                {userType === "1"
                  ? "Put yourself out there by listing your services."
                  : "Post a job to find exactly who you're looking for."}
              </p>
              <p className="create-list">
                {userType === "1" ? "Waiting on Buyer" : "Create Casting Call"}
              </p>
            </div>
            <div className="col-md-4 card-icon">
              {userType === "1" ? (
                <img src={card4} className="logo" alt="Logo" />
              ) : (
                <img
                  src={cal}
                  className="logo"
                  alt="Logo"
                  style={{ width: "40px", height: "47px" }}
                />
              )}
            </div>
          </div>
        </div>

        <div
          onClick={() => setactiveSection(2)}
          className={userType === "1" ? "col-md-3" : "col-md-4"}
        >
          <div
            className={`row dashboard-card dashboard-card-new ${
              activeSection == 2 ? "active-card" : ""
            }`}
          >
            <div className="col-md-8">
              <h3>{userType === "1" ? "New Orders" : "Active Orders"}</h3>
              <p className="detail">
                {userType === "1"
                  ? "Browse through jobs posted by brands."
                  : "See what skills and talents are available for hire."}
              </p>
              <p className="create-list">
                {userType === "1" ? "Active Orders" : "View Listings"}
              </p>
            </div>
            <div className="col-md-4 card-icon">
              {userType === "1" ? (
                <img src={card5} className="logo" alt="Logo" />
              ) : (
                <img
                  src={shop}
                  className="logo"
                  alt="Logo"
                  style={{ width: "57px", height: "54px" }}
                />
              )}
            </div>
          </div>
        </div>
        {userType === "1" ? (
          <div onClick={() => setactiveSection(3)} className="col-md-3">
            <div
              className={`row dashboard-card dashboard-card-new ${
                activeSection == 3 ? "active-card" : ""
              }`}
            >
              <div className="col-md-12">
                <h3>Admin Change Requests</h3>
                <div className="col-md-9 padding-0">
                  <p className="detail">
                    Browse through jobs posted by brands.
                  </p>
                  <p className="create-list">in Admin Review</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          onClick={() => setactiveSection(4)}
          className={userType === "1" ? "col-md-3" : "col-md-4"}
        >
          <div
            className={`row dashboard-card dashboard-card-new ${
              activeSection == 4 ? "active-card" : ""
            }`}
          >
            <div className="col-md-8">
              <h3>{userType==="1"?"Potential Earnings":"Current budget"}</h3>
              <p className="cash-amount">$0</p>
              <p className="cash-out">$0 Cashed Out</p>
            </div>
            <div className="col-md-4 card-icon">
              {userType==="1"?(
              <img src={card3} className="logo" alt="Logo" />):(<img
                  src={money}
                  className="logo"
                  alt="Logo"
                  style={{ width: "57px", height: "54px" }}
                />)}
            </div>
          </div>
        </div>

        <div className="clear"></div>
        <div className="card-bottom"></div>

        {activeSection == 1 ? (
          userType === "1" ? (
            campaingStatus ? (
              <div className="col-md-12 dashboard-table">
                <div className="row margin-0">
                  <div className="col-md-10 dashboard-filter-input">
                    <div className="dashboard-search-icon">
                      {" "}
                      <img src={search} />
                    </div>
                    <div className="dashboard-search-input">
                      <input type="text" placeholder="Active Todos"></input>
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
                      <th width="4"></th>
                      <th>Listing</th>
                      <th>Orders</th>
                      <th>Marketplace status</th>
                      <th>Review status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {campaingStatus.map((key, index) => {
                      return (
                        <tr>
                          <td>
                            <img
                              onClick={() => listingMenu(index)}
                              className="dashboard-table-menu"
                              src={menu}
                            />
                            <ul
                              className={`listing-menu listing-menu-${index}`}
                            >
                              <li>
                                <MdIcons.MdEdit />
                                Edit Listing
                              </li>
                              <li
                                onClick={() => deleteList(index)}
                                className="del-menu"
                              >
                                <MdIcons.MdDelete />
                                Delete
                              </li>
                            </ul>
                          </td>
                          <td>
                            <div className="dashboard-table-user">
                              <img src={user} />
                            </div>

                            <div
                              className="con-name"
                              style={{ display: "inline" }}
                            >
                              Campaign Name
                            </div>
                            <p className="con-foll">Campaign Type</p>
                          </td>
                          <td>
                            <b>--</b>
                          </td>
                          <td>
                            <span>
                              {key == "Draft" ? (
                                <img src={draft} />
                              ) : key == "Active" ? (
                                <img src={active} />
                              ) : key == "In-Process" ? (
                                <img src={process} />
                              ) : key == "Disapproved" ? (
                                <img src={dissproved} />
                              ) : (
                                <img src={paused} />
                              )}
                            </span>
                          </td>
                          <td>
                            {index == 2 ? (
                              <img src={done} />
                            ) : index == 3 ? (
                              <img src={notTime} />
                            ) : (
                              <b>--</b>
                            )}
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
          ) : (
            <ReactTable2 data={data3} condition={"value3"} />
          )
        ) : activeSection == 2 ? (
          userType === "1" ? (
            campaingStatus ? (
              <div className="col-md-12 dashboard-table">
                <div className="row margin-0">
                  <div className="col-md-10 dashboard-filter-input">
                    <div className="dashboard-search-icon">
                      {" "}
                      <img src={search} />
                    </div>
                    <div className="dashboard-search-input">
                      <input
                        type="text"
                        placeholder="Admin Change Requests"
                      ></input>
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
                      <th width="4"></th>
                      <th>Listing</th>
                      <th>Orders</th>
                      <th>Marketplace status</th>
                      <th>Review status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {campaingStatus.map((key, index) => {
                      return (
                        <tr>
                          <td>
                            <img
                              onClick={() => listingMenu(index)}
                              className="dashboard-table-menu"
                              src={menu}
                            />
                            <ul
                              className={`listing-menu listing-menu-${index}`}
                            >
                              <li>
                                <MdIcons.MdEdit />
                                Edit Listing
                              </li>
                              <li className="del-menu">
                                <MdIcons.MdDelete />
                                Delete
                              </li>
                            </ul>
                          </td>
                          <td>
                            <div className="dashboard-table-user">
                              <img src={user} />
                            </div>

                            <div
                              className="con-name"
                              style={{ display: "inline" }}
                            >
                              Campaign Name
                            </div>
                            <p className="con-foll">Campaign Type</p>
                          </td>
                          <td>
                            <b>--</b>
                          </td>
                          <td>
                            <span>
                              {key == "Draft" ? (
                                <img src={draft} />
                              ) : key == "Active" ? (
                                <img src={active} />
                              ) : key == "In-Process" ? (
                                <img src={process} />
                              ) : key == "Disapproved" ? (
                                <img src={dissproved} />
                              ) : (
                                <img src={paused} />
                              )}
                            </span>
                          </td>
                          <td>
                            {index == 2 ? (
                              <img src={done} />
                            ) : index == 3 ? (
                              <img src={notTime} />
                            ) : (
                              <b>--</b>
                            )}
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
          ) : (
            <ReactTable2 data={data3} condition={"value4"} />
          )
        ) : activeSection == 3 ? (
          userType === "1" ? (
            campaingStatus ? (
              <div className="col-md-12 dashboard-table">
                <div className="row margin-0">
                  <div className="col-md-10 dashboard-filter-input">
                    <div className="dashboard-search-icon">
                      {" "}
                      <img src={search} />
                    </div>
                    <div className="dashboard-search-input">
                      <input type="text" placeholder="New Orders"></input>
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
                      <th width="4"></th>
                      <th>Listing</th>
                      <th>Orders</th>
                      <th>Marketplace status</th>
                      <th>Review status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {campaingStatus.map((key, index) => {
                      return (
                        <tr>
                          <td>
                            <img
                              onClick={() => listingMenu(index)}
                              className="dashboard-table-menu"
                              src={menu}
                            />
                            <ul
                              className={`listing-menu listing-menu-${index}`}
                            >
                              <li>
                                <MdIcons.MdEdit />
                                Edit Listing
                              </li>
                              <li className="del-menu">
                                <MdIcons.MdDelete />
                                Delete
                              </li>
                            </ul>
                          </td>
                          <td>
                            <div className="dashboard-table-user">
                              <img src={user} />
                            </div>

                            <div
                              className="con-name"
                              style={{ display: "inline" }}
                            >
                              Campaign Name
                            </div>
                            <p className="con-foll">Campaign Type</p>
                          </td>
                          <td>
                            <b>--</b>
                          </td>
                          <td>
                            <span>
                              {key == "Draft" ? (
                                <img src={draft} />
                              ) : key == "Active" ? (
                                <img src={active} />
                              ) : key == "In-Process" ? (
                                <img src={process} />
                              ) : key == "Disapproved" ? (
                                <img src={dissproved} />
                              ) : (
                                <img src={paused} />
                              )}
                            </span>
                          </td>
                          <td>
                            {index == 2 ? (
                              <img src={done} />
                            ) : index == 3 ? (
                              <img src={notTime} />
                            ) : (
                              <b>--</b>
                            )}
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
          ) : (
            <ReactTable2 data={data3} condition={"value5"} />
          )
        ) : activeSection == 4 ? (
          <TransactionPage />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Listing;
