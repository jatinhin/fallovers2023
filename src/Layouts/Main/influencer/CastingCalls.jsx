import React, { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { Team } from "../../../Constants/Images";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { GET_CASTING_CALLS } from "../../../actions/authenticationAction";
import FilterForm from "../common/FilterForm";
import Filter from "../common/Filter";
import NewCastingCalls from "./NewCastingCall";

function CastingCalls(props) {
  const [castingList, setcastingList] = useState([
    "#FF818D",
    "#9071FF",
    "#016918",
    "#2D2D2D",
    "#3A87FA",
    "#FF818D",
    "#9071FF",
    "#2D2D2D",
  ]);

  const [filter, setFilter] = useState([]);
  const [castingCalls, setcastingCalls] = useState([]);
  const [filterForm, setfilterForm] = useState(false);
  const [activeTag, setactiveTag] = useState(null);
  const [moreTag, setmoreTag] = useState(false);
  const [sortFilter, setsortFilter] = useState(false);
  const [filterTags, setfilterTags] = useState([]);
  const compensationFixed = useRef();
  const compensationNegotiable = useRef();

  const getListing = (data = "") => {
    GET_CASTING_CALLS().then((res) => {
      console.log(res, "resresres");
      const { data } = res;
      if (res.status == 200) {
        console.log(data);
        setFilter(data.category);
        setfilterTags(data.filter);
        setcastingCalls(data.category);
      }
    });
  };

  useEffect(() => {
    getListing();
    // setisLoading(true);
  }, []);

  const getInfluencer = (data) => {
    getListing(data);
  };

  const sortListFilter = () => {
    //alert('A')
  };

  const clearFilter = () => {};

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="popular-courses circle carousel-shadow">
            <div className="container">
              <Filter
                clearFilter={clearFilter}
                moreTag={moreTag}
                setmoreTag={setmoreTag}
                compensationNegotiable={compensationNegotiable}
                compensationFixed={compensationFixed}
                activeTag={activeTag}
                setactiveTag={setactiveTag}
                getInfluencer={getInfluencer}
                setsortFilter={setsortFilter}
                sortFilter={sortFilter}
                filterTags={filterTags}
                sortListFilter={sortListFilter}
              />

              <div className="col-md-12">
                <div style={{ clear: "both" }}></div>
                <div
                  className="seperator seperator-top col-md-12"
                  style={{ marinTop: "22px" }}
                >
                  <span className="border"></span>
                </div>
              </div>

              <div className="col-md-12 heading-left">
                <h2
                  style={{
                    color: "#4E76C9",
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                >
                  All Casting Calls
                </h2>
                <NewCastingCalls/>
              </div>

              
            </div>

            {castingList && castingList.length > 0 && 5 == 5 ? (
              <div className="row arrow">
                <div className="col-md-6 arrow-left">
                  <span>
                    <MdIcons.MdKeyboardArrowLeft />
                  </span>
                </div>
                <div className="col-md-6 arrow-right">
                  <span>
                    <MdIcons.MdKeyboardArrowRight />
                  </span>
                </div>
              </div>
            ) : null}
          </div>
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default CastingCalls;
