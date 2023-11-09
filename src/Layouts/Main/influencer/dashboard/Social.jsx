import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA } from "../../../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import $ from "jquery";

import { edit, facebookPic } from "../../../../Constants/Images";
import { useRef } from "react";
import CreateListing from "./CreateListing";
import AboutModal from "../../common/AboutModal"
//AboutModal
function Social(props) {
  const {
    formState: { errors },
  } = useForm();

  const [work, setWork] = useState(false);

  useEffect(() => {
    // setisLoading(true);
    GET_HOMEPAGE_DATA().then((res) => {
      //const { data } = res;
    });
  }, []);

  const [dropdown, setDropdown] = useState(false);
  const [connection, setConnection] = useState([1, 2, 3, 5, 4, 8, 7, 9, 87, 5]);

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

 
  return (
    <>
      <div className="col-md-12 dashboard-card-outer">
        <div className="row">
          <div className="col-md-3  dashboard-social-left">
            <h2>Add Connection</h2>
            <ul>
              {connection.map((key) => {
                return (
                  <li>
                    <img src={facebookPic} />
                    <span>facebook</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-md-6 pending-info">
            <CreateListing link={'sign-up'} />
          </div>

          <div className="col-md-3 dashboard-social-right">
            <div className="social-right-icon"></div>
            <div className="social-right-name">Gopal Daiya</div>
            <div className="social-right-fallovers">55 Follovers</div>

            <ul className="social-list">
              <li>
                About <span onClick={() => setWork(3)}>Add</span>
              </li>
              <li>
                Location <span onClick={() => setWork(4)}>Add</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {work ? (
       <AboutModal work={work} setWork={setWork}/>
      ) : null}
    </>
  );
}

export default Social;
