import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import * as MdIcons from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Header from "../include/Header";
import Footer from "../include/Footer";
import {
  GET_CREATE_PROFILE,
  GET_HOMEPAGE_DATA,
} from "../../../actions/authenticationAction";
import {
  instagram,
  profileCircle,
  profile,
  Team,
} from "../../../Constants/Images";
import { Link, useParams } from "react-router-dom";
import AboutModal from "../common/AboutModal";

function EditProfile(props) {
  const [connections, setConnections] = useState([1, 2, 3, 4, 5, 6, 8, 7, 9]);
  const [tradingVideo, settradingVideo] = useState([]);
  const getParm = useParams();
  const [work, setWork] = useState(false);

  useEffect(() => {
    GET_CREATE_PROFILE(getParm.id).then((res) => {
      const { details } = res;
      console.log(details, "datadata");
      // setInfluencer(data.influencer);
    });
  }, []);
useEffect(() => {
GET_HOMEPAGE_DATA().then((res) => {
  const { data } = res;
  if (res.status == 200) {
    settradingVideo(data.latestVideo.uploads);
  }
});
  
}, [])

  // setisLoading(true);
  

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="popular-courses circle  carousel-shadow default-padding default-padding-20">
            <div className="container i-profile">
              <div className="row i-profile-section">
                <div className="col-md-12 heading-left">
                  <h1>Social</h1>
                </div>

                <div className="col-md-3 i-profile-left">
                  <div className="i-profile-pic align-center">
                    <img src={profile} />
                    <h2 className="margin-bottom-0">Deepak Pareek</h2>
                  </div>

                  <div className="i-profile-fallovers align-center">
                    20k -- Followers
                  </div>
                  <div className="i-profile-networks align-center">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <ul className="social-list i-profile-list">
                    <li onClick={() => setWork(3)}>
                      About <span>Add</span>
                    </li>
                    <li onClick={() => setWork(4)}>
                      Location <span>Add</span>
                    </li>
                  </ul>
                </div>

                <div className="col-md-8 i-profile-bio">
                  <div className="row">
                    <div className="col-md-6 padding-left-0">
                      <h2>Demographics</h2>
                    </div>
                    <div className="col-md-6 i-bio-edit">
                    </div>

                    <div className="clear"></div>

                    <form className="edit-form">
                      <div className="row">
                        <div className="col-md-6">
                          <div class="form-group">
                            <label>Gender*</label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div class="form-group">
                            <label>Age*</label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div class="form-group">
                            <label>ETHNICITY*</label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div class="form-group">
                            <label>RELATIONSHIP STATUS*</label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div class="form-group">
                            <label>EDUCATION*</label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div class="form-group">
                            <label>LANGUAGE*</label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div class="form-group">
                            <label>PETS*</label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div class="form-group">
                            <label>CHILDREN*</label>
                            <input type="text" />
                          </div>
                        </div>

                        <div className="col-md-6 align-right">
                          <div class="form-group">
                            <button className="btn-blue">Submit</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {work ? (
            <AboutModal work={work} setWork={setWork}/>
            ) : null}
            
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default EditProfile;
