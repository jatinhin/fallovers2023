import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA } from "../../../../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import $ from "jquery";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import * as MdIcons from "react-icons/md";
import {
  active,
  card3,
  dissproved,
  done,
  draft,
  menu,
  notTime,
  paused,
  process,
  search,
  searchFilter,
  searchMenu,
  user,
} from "../../../../../Constants/Images";
import { useRef } from "react";
import CreateListing from "../CreateListing";
import { Link } from "react-router-dom";
import ReactTable2 from "../../../brand/parts/ReactTable2";
import { data3 } from "../../../brand/DummyData";
import TransactionPage from "../../../brand/parts/TransactionPage";

function Piches(props) {
  const {
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // setisLoading(true);
    GET_HOMEPAGE_DATA().then((res) => {
      //const { data } = res;
    });
  }, []);

  const [activeSection, setactiveSection] = useState(1);
  const [dropdown, setDropdown] = useState(false);
  const [campaingStatus, setcampaingStatus] = useState([
    "Draft",
    "Active",
    "In-Process",
    "Disapproved",
    "Paused",
  ]);

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


  const deleteList=(index)=>{  
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>{
           // const getList = campaingStatus.splice(index, 1);
             const getList = campaingStatus.filter((item,key) => key !== index);
             setcampaingStatus(getList);
          } 
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }
   const userData = JSON.parse(localStorage.getItem("userData"));
   const userType = userData
     ? userData.user_type || userData.access_token
     : null;

  return (
    <>
      <div className="row dashboard-card-outer">
        <div className="col-md-3">
          <div
            onClick={() => setactiveSection(1)}
            className={`row dashboard-card dashboard-card-new ${
              activeSection == 1 ? "active-card" : ""
            }`}
          >
            <div className="col-md-12">
              <h3>{userType === "1" ? "All Pitchs" : "Change Requests"}</h3>
              {userType === "1" ? (
                <p className="detail">
                  Put yourself out there by listing your services.
                </p>
              ) : (
                <h3 className="detail">--</h3>
              )}
              <p className="create-list">
                {userType === "1" ? "in Admin Review" : "-- in Admin Review"}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div
            onClick={() => setactiveSection(2)}
            className={`row dashboard-card dashboard-card-new ${
              activeSection == 2 ? "active-card" : ""
            }`}
          >
            <div className="col-md-12">
              <h3>
                {userType === "1" ? "Active Pitches" : "Active Casting Calls"}
              </h3>
              <p className="detail">
                {userType === "1"
                  ? " Put yourself out there by listing your services."
                  : "--"}
              </p>
              <p className="create-list">
                {" "}
                {userType === "1" ? " in Draft mode" : "-- in Draft mode"}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div
            onClick={() => setactiveSection(3)}
            className={`row dashboard-card dashboard-card-new ${
              activeSection == 3 ? "active-card" : ""
            }`}
          >
            <div className="col-md-12">
              <h3>Outstanding Pitches</h3>
              <p className="detail">
                {userType === "1"
                  ? "rowse through jobs posted by brands."
                  : "--"}
              </p>
              <p className="create-list">
                {userType === "1"
                  ? "in Draft Mode"
                  : "Working with -- Creators"}
              </p>
            </div>
          </div>
        </div>

        <div onClick={() => setactiveSection(4)} className="col-md-3">
          <div
            className={`row dashboard-card dashboard-card-new ${
              activeSection == 4 ? "active-card" : ""
            }`}
          >
            <div className="col-md-8">
              <h3>
                {userType === "1" ? "Potential Earnings" : "Current budget"}
              </h3>
              <p className="cash-amount">${userType==="1"?"0":"2000"}</p>
              <p className="cash-out">Between - Casting Calls</p>
            </div>
            <div className="col-md-4 card-icon">
              <img src={card3} className="logo" alt="Logo" />
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
                      <input type="text" placeholder="All Pitchs"></input>
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
                      <th>Casting call</th>
                      <th>Buyer</th>
                      <th>status</th>
                      <th>COMPENSATION</th>
                      <th>SUBMITTED AT</th>
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
                          <td className="buyer">
                            <div className="dashboard-table-user">
                              <img src={user} />
                            </div>
                            <span> Campaign Company Name</span>
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
                          <td>$1,600</td>
                          <td>
                            <b>--</b>
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
                      <input type="text" placeholder="Active Pitches"></input>
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
                      <th>Casting call</th>
                      <th>Buyer</th>
                      <th>status</th>
                      <th>COMPENSATION</th>
                      <th>SUBMITTED AT</th>
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
                          <td className="buyer">
                            <div className="dashboard-table-user">
                              <img src={user} />
                            </div>
                            <span> Campaign Company Name</span>
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
                          <td>$1,600</td>
                          <td>
                            <b>--</b>
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
                      <input
                        type="text"
                        placeholder="Outstanding Pitches"
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
                      <th>Casting call</th>
                      <th>Buyer</th>
                      <th>status</th>
                      <th>COMPENSATION</th>
                      <th>SUBMITTED AT</th>
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
                          <td className="buyer">
                            <div className="dashboard-table-user">
                              <img src={user} />
                            </div>
                            <span> Campaign Company Name</span>
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
                          <td>$1,600</td>
                          <td>
                            <b>--</b>
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

export default Piches;
