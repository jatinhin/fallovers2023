import React, { Component } from "react";
import MainCompomentRouter from "./Main/Main";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

class Layouts extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ToastContainer hideProgressBar={true} />
        <MainCompomentRouter />
      </BrowserRouter>
    );
  }
}

export default Layouts;
