import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function AboutModal({work,setWork}) {
  const {
    formState: { errors },
  } = useForm();
 
  const [activeLanguage, setactiveLanguage] = useState(0);
 

  useEffect(() => {}, []);

  return (
    <>
      <Modal
          className="social-update"
          show={work ? true : false}
          onHide={(e) => setWork(false)}
        >
          <Modal.Body>
            <div className="row modal-login work-modal">
              {work == 1 ? (
                <>
                  <h2>What type of work do you do?</h2>
                  <p>Your listing will appear under one of these categories. {activeLanguage}</p>

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
                      <input placeholder="Date of Birth" type="date"></input>
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
    </>
  );
}

export default AboutModal;
