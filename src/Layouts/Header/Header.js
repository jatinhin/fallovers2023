import React, { Component, Suspense } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const HeaderManu = React.lazy(() => import("./Components/HeaderManu"));

export default class Header extends Component {
  constructor(props) {
    super(props);

    const access = JSON.parse(localStorage.getItem("access"));

    this.state = {
      roll: access[0].admin_roll,
    };
  }

  render() {
    return (
      <>
        <Navbar
          className="header-main fixed-top w-100 bg-white d-flex align-items-center justify-content-center border-bottom"
          expand="lg"
        >
          <div className="app-container d-flex align-items-center justify-content-between w-100 h-100">
            <div className="d-flex">
              <div className="app-logo">
                <Link to={"/home"} className="d-flex flex-shrink-1 header_logo">
                  <span className="logo_full_ d-lg-flex d-none">Fallovers</span>
                  <span className="logo_icon_ d-lg-none d-flex">
                    <svg
                      id="ugc-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="141.4"
                      height="141.4"
                      viewBox="0 0 141.4 141.4"
                    >
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M70.7,141.4a70.7,70.7,0,1,1,70.7-70.7,70.7,70.7,0,0,1-70.7,70.7Zm0-135.7a65,65,0,1,0,65,65A65,65,0,0,0,70.7,5.7Z"
                      />
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M-1125.6-519.2a62.008,62.008,0,0,1-24.289-4.9,62.412,62.412,0,0,1-10.6-5.753,62.853,62.853,0,0,1-9.235-7.62,62.85,62.85,0,0,1-7.62-9.235,62.4,62.4,0,0,1-5.753-10.6A62.009,62.009,0,0,1-1188-581.6a62.01,62.01,0,0,1,4.9-24.289,62.41,62.41,0,0,1,5.753-10.6,62.851,62.851,0,0,1,7.62-9.235,62.848,62.848,0,0,1,9.235-7.62,62.409,62.409,0,0,1,10.6-5.753A62.008,62.008,0,0,1-1125.6-644a62.032,62.032,0,0,1,24.286,4.909,62.428,62.428,0,0,1,10.6,5.754,62.874,62.874,0,0,1,9.234,7.619,62.863,62.863,0,0,1,7.62,9.234,62.428,62.428,0,0,1,5.754,10.6A62.031,62.031,0,0,1-1063.2-581.6a62.009,62.009,0,0,1-4.9,24.289,62.412,62.412,0,0,1-5.753,10.6,62.849,62.849,0,0,1-7.62,9.235,62.859,62.859,0,0,1-9.235,7.62,62.414,62.414,0,0,1-10.6,5.753A62.01,62.01,0,0,1-1125.6-519.2Zm-18.7-59.9v34l38.6-34h24.9V-607h-89.4v27.9Z"
                        transform="translate(1196.2 652.3)"
                      />
                    </svg>
                  </span>
                </Link>

                <span className="logo-label">
                  {this.state.roll == "A"
                    ? "Admin"
                    : this.state.roll == "BM"
                    ? "Business Manager"
                    : this.state.roll == "DM"
                    ? "Dispute Manager"
                    : "Accouting Manager"}
                </span>
              </div>
              <div className="d-lg-none d-flex align-items-center justify-content-center border-start mob_toggle_icon">
                <button
                  id="main_menu_toggle"
                  className="btn p-0 custom_burger_icon"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <HeaderManu />
            </Suspense>
          </div>
        </Navbar>
      </>
    );
  }
} 
