import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA } from "../../../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";

import { Team, card1, card2, card3 } from "../../../../Constants/Images";
import { useRef } from "react";
import { Link } from "react-router-dom";
import CreateListing from "./CreateListing";
import ListingCards from "../../brand/parts/ListingCards";

function Home(props) {
  const [castingList, setcastingList] = useState([
    "#FF818D",
    "#9071FF",
    "#016918",
    "#2D2D2D",
  ]);

  const {
    formState: { errors },
  } = useForm();

  const [work, setWork] = useState(false);
  const [activeLanguage, setactiveLanguage] = useState(0);
  const [dropdown, setDropdown] = useState(false);
 const scrolltoTop=()=>{
  window.scrollTo({ top: 0, behavior: "smooth" });
 }

  useEffect(() => {
    // setisLoading(true);
    GET_HOMEPAGE_DATA().then((res) => {
      //const { data } = res;
    });
  }, []);


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
 const userData = JSON.parse(localStorage.getItem("userData"));
 const userType = userData ? userData.user_type || userData.access_token : null;


  return (
    <>
      <div className="row dashboard-card-outer">
        <div className="col-md-4">
          <div className="row dashboard-card">
            <div className="col-md-8">
              <h3>Attract Brands</h3>
              <p className="detail">
                Put yourself out there by listing your services.
              </p>
              <p onClick={() => setWork(1)} className="create-list">
                <Link to={"/attract-brands"}> Create listing</Link>
              </p>
            </div>
            <div className="col-md-4 card-icon">
              <img src={card1} className="logo" alt="Logo" />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="row  dashboard-card">
            <div className="col-md-8">
              <h3>Find Work</h3>
              <p className="detail">Browse through jobs posted by brands.</p>
              <p className="create-list">
                <Link to="/casting-calls">Create listing</Link>
              </p>
            </div>
            <div className="col-md-4 card-icon">
              <img src={card2} className="logo" alt="Logo" />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="row dashboard-card">
            <div className="col-md-8">
              <h3>Pending Payout</h3>
              <p className="cash-amount">$0</p>
              <p className="cash-out">$0 Cashed Out</p>
            </div>
            <div className="col-md-4 card-icon">
              <img src={card3} className="logo" alt="Logo" />
            </div>
          </div>
        </div>

        <div className="clear"></div>
        <div className="card-bottom"></div>

        <div className="row dashboard-casting">
          <div className="col-md-12 heading-left">
            <h2>Casting Calls You Might Be Interested In</h2>
          </div>
{userType==="1"?(
  <>
          {castingList.map((key) => {
            return (
              <div className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video trading-video">
                <div className="col-md-3">
                  <div className="item">
                    <div className="info">
                      <div className="author-info">
                        <div className="thumb">
                          <a href="#">
                            <img src={Team} alt="Thumb" />
                          </a>
                        </div>
                        <div className="others">
                          <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
                          <div className="casting-call-type">
                            Influencer Marketing
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-img casting-calls"
                        style={{ background: key }}
                      >
                        Work with Evolv Technology Work with Evolv Technology
                      </div>
                      <div className="prodct-detail row">
                        <div className="col-md-7">
                          <div className="ongoing">
                            <MdIcons.MdCalendarMonth /> Ongoing
                          </div>
                        </div>
                        <div className="col-md-5 align-right">
                          <div className="outer-right outer-timer">
                            <MdIcons.MdOutlineTimer />
                          </div>
                          <div className="outer-right outer-doller">
                            <AiIcons.AiOutlineDollarCircle />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </>
        ):(
<ListingCards/>
        )}

          <div className="col-md-12 link-btn-right">
            <Link to="/casting-calls" onClick={scrolltoTop}>View all</Link>
          </div>

          {castingList.length == 0 ? (
            <div className="col-md-12 pending-info">
              <CreateListing />
            </div>
          ) : null}
        </div>
      </div>



      {work ? (
        <Modal
          className="social-update"
          show={work ? true : false}
          onHide={(e) => setWork(false)}
        >
          <Modal.Body>
            <div className="row modal-login work-modal">
              {work == 1 ? (
                <>
                  <h2 className="t-center">What type of work do you do?</h2>
                  <p>Your listing will appear under one of these categories.</p>

                  <ul>
                    <li className={ activeLanguage == 1 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(1); }} 
                    title="Influencer Marketing">Influencer Marketing</li>
                    <li className={ activeLanguage == 2 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(2) }} >Virtual Appearances</li>
                    <li className={ activeLanguage == 3 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(3) }} >Metaverse</li>
                    <li className={ activeLanguage == 4 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(4) }} >Metaverse</li>
                    <li className={ activeLanguage == 5 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(5) }} >Metaverse</li>
                    <li className={ activeLanguage == 6 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(6) }} >Metaverse</li>
                    <li onClick={(e) => setWork(2)}>Other</li>
                  </ul>
                </>
              ) : work == 2 ? (
                <>
                  <h2>What type of work do you do?</h2>
                  <p>Your listing will appear under one of these categories.</p>

                  <form>
                    <div>
                      <input type="text"></input>
                      <Link to="/casting-calls">
                        <button>Add Work Type</button>
                      </Link>
                    </div>
                  </form>
                </>
              ) : work == 3 ? (
                <>
                  <h2>Start filling out your profile</h2>
                  <p>
                    Put your best face forward! Your avatar will be seen in
                    search results as well as your public profile
                  </p>
                  <form>
                    <h2>Avatar</h2>

                    <div className="avtar-box">
                      <div className="avtar-pic"></div>
                    </div>

                  <h2>Overview</h2>
                    <div className="form-group">
                      <input placeholder="Name" type="text"></input>
                    </div>

                    <div className="form-group">
                      <input placeholder="Date of Birth" type="text"></input>
                    </div>

                    <div className="form-group">
                      <textarea placeholder="Biography"></textarea>
                    </div>

                    <Link to="/casting-calls">
                      <button>Save </button>
                    </Link>

                    <p className="work-modal-bottom-cont">
                      Date of birth will not be publicly shown; it will be used
                      to determine your age range when returning search results
                    </p>
                  </form>
                </>
              ) : work == 4 ? (
                <>
                  <h2>Add some basic information</h2>
                  <p>
                    Whether you're buying or selling, this will help the people
                    you're working with know more about you.
                  </p>
                  <form>
                    <div className="form-group">
                      <label>Location</label>
                      <select>
                        <option value={"Select country"}>Select country</option>
                        <option value={"India"}>India</option>
                        <option value={"Australia"}>Australia</option>
                        <option value={"switzerland"}>switzerland</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Spoken Language
                        <span className="maximum-selection">Maximum Selection 4</span>
                      </label>

                      <ul>
                    <li className={ activeLanguage == 1 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(1); }} 
                    title="Influencer Marketing">Influencer Marketing</li>
                    <li className={ activeLanguage == 2 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(2) }} >Virtual Appearances</li>
                    <li className={ activeLanguage == 3 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(3) }} >Metaverse</li>
                    <li className={ activeLanguage == 4 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(4) }} >Metaverse</li>
                    <li className={ activeLanguage == 5 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(5) }} >Metaverse</li>
                    <li className={ activeLanguage == 6 ? "active-language" : "" }  
                    onClick={() => { setactiveLanguage(6) }} >Metaverse</li>
                    <li onClick={(e) => setWork(2)}>Other</li>
                  </ul>
                    </div>

                    <Link to="/casting-calls">
                      <button>Save </button>
                    </Link>
                  </form>
                </>
              ) : null}
            </div>
          </Modal.Body>
        </Modal>
      ) : null}


    </>
  );
}

export default Home;
