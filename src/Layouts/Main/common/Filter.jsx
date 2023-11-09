import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import {
  Team,
  filterList,
  instagram,
  sortList,
} from "../../../Constants/Images";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { Typography } from "@mui/material";

function Filter({
  compensationFixed,
  compensationNegotiable,
  moreTag,
  setmoreTag,
  clearFilter,
  tradingVideo,
  activeTag,
  filterTags,
  setactiveTag,
  getInfluencer,
  sortListFilter,
  setsortFilter,
  sortFilter,
}) {
  const {
    formState: { errors },
  } = useForm();

  const [filter, setFilter] = useState(false);
  const [payout, setPayout] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
 

  useEffect(() => {}, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12 filter-section">
          <div className="row margin-0">
            <div className="col-md-12" style={{ padding: "0px 0px 15px 3px" }}>
              <ul
                className="trading-filter"
                style={{ display: "flex", direction: "row"}}
              >
                <li
                  onClick={() => setFilter(true)}
                  style={{ display: "flex", direction: "row", }}
                >
                  <FilterAltOutlinedIcon/>
                  <Typography>Filter</Typography>
                </li>
                <li
                  onClick={() => {
                    sortListFilter();
                    setsortFilter(sortFilter ? false : true);
                  }}
                  style={{ display: "flex", direction: "row" }}
                >
                  <FilterListOutlinedIcon/>
                  <Typography>Sort</Typography>
                  {/* <DateRangePicker initialSettings={{ startDate: '1/1/2023', endDate: '01/1/2050' }}>
        <button>Click Me To Open Picker!</button>
      </DateRangePicker> */}
                </li>
              </ul>

              {sortFilter ? (
                <div className="short-filter">
                  <ul>
                    <li>
                      <DateRangePicker
                        initialSettings={{
                          startDate: "1/1/2023",
                          endDate: "01/1/2050",
                        }}
                      >
                        <button>Date</button>
                      </DateRangePicker>
                    </li>
                    <li
                      onClick={() => {
                        setsortFilter(false);
                      }}
                    >
                      Clear Filter
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="col-md-10">
              <div className="row">
                <div
                  className="col-md-12 padding-left-5"
                  style={{ borderLeft: "2px solid rgb(211 208 212)" }}
                >
                  {filterTags && filterTags.length > 0 ? (
                    <ul className="trading-filter">
                      {filterTags.map((data) => {
                        return (
                          <li
                            onClick={() => {
                              setactiveTag(data.tag_category_id);
                              getInfluencer(data.tag_title, 1);
                            }}
                            className={
                              activeTag == data.tag_category_id
                                ? "active-filter-tag"
                                : ""
                            }
                          >
                            {data.tag_title}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        className="margin-top-0"
        show={filter}
        onHide={(e) => setFilter(false)}
      >
        <Modal.Body>
          <AiIcons.AiOutlineClose
            className="modal-close"
            onClick={(e) => setFilter(false)}
          />
          <div className="row modal-login modal-filter">
            <div className="col-md-10">
              <h2> Compensation Type </h2>
            </div>

            {/* <div className="col-md-2 deselect" onClick={()=>deselect()}>Deselect</div> */}

            <div className="col-md-6 radio-button">
              <label className="checkboxLable">
                <input
                  ref={compensationFixed}
                  className="compensation_type"
                  name="compensationType"
                  type="checkbox"
                  onClick={() =>
                    (compensationNegotiable.current.checked = false)
                  }
                />{" "}
                Fixed{" "}
              </label>
              <p className="margin-0">
                Discloses the amount you get paid up front so you know exactly
                what your budget is.
              </p>
            </div>

            <div className="col-md-6 radio-button">
              <label className="checkboxLable">
                <input
                  ref={compensationNegotiable}
                  className="compensation_type"
                  name="compensationType"
                  type="checkbox"
                  onClick={() => (compensationFixed.current.checked = false)}
                />{" "}
                Negotiable{" "}
              </label>
              <p className="margin-0">
                As part of the pitch process, you enter how much you wish to be
                compensated.
              </p>
            </div>

            {/* <div className="col-md-12 filter-row"></div>

              <div className="col-md-12">
                <h2>Compensation Range</h2>
              </div> */}

            <div className="col-md-12 filter-row"></div>

            <div className="col-md-12 text-left">
              <h2>Compensation Payout</h2>

              {payout &&
                payout.length > 0 &&
                payout.map(() => {
                  return (
                    <label className="checkboxLable">
                      <input type="checkbox" /> Cash
                    </label>
                  );
                })}
            </div>

            <div className="col-md-12 filter-row"></div>

            <div className="col-md-12 text-left">
              <h2>Tags</h2>

              {payout &&
                payout.length > 0 &&
                payout.map(() => {
                  return (
                    <label className="checkboxLable">
                      <input type="checkbox" /> LifeStyle
                    </label>
                  );
                })}

              {moreTag ? (
                <div className="more-tags">
                  {payout &&
                    payout.length > 0 &&
                    payout.map(() => {
                      return (
                        <label className="checkboxLable">
                          <input type="checkbox" /> LifeStyle
                        </label>
                      );
                    })}
                </div>
              ) : null}

              <div
                onClick={() => setmoreTag(moreTag ? false : true)}
                className="show-more"
              >
                Show More{" "}
                {moreTag ? (
                  <MdIcons.MdArrowDropUp />
                ) : (
                  <MdIcons.MdArrowDropDown />
                )}
              </div>
            </div>

            <div className="col-md-12 filter-row"></div>

            <div className="col-md-6">
              <p
                className="text-left cursor-pointer"
                onClick={() => {
                  clearFilter();
                  setFilter(false);
                }}
              >
                Clear All Filters
              </p>
            </div>

            <div className="col-md-6 text-right">
              <input
                onClick={() => {
                  setFilter(false);
                }}
                className="button-blue"
                type="button"
                value={"Update Results"}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Filter;
