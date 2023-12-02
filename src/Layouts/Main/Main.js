/* eslint-disable */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Home from "../Main/Home";
import Login from "./Login";
import SignUp from "./SignUp";
import CastingCall from "./casting-call";
import Todaystrading from "./Todaystrading";
//import InfluencerList from './influencer/InfluencerList';
//import Dashboard from './Dashboard';

import Dashboard from "./influencer/Dashboard";
import InfluencerList from "./influencer/InfluencerList";
import CreatemarketPlace from "./brand/CreatemarketPlace";
import ManagedServices from "./brand/ManagedServices";
import CastingCalls from "./influencer/CastingCalls";
import CreateListing from "./influencer/CreateListing";
import MarketingResoures from "./resoures/MarketingResoures";
import OurWork from "./resoures/OurWork";
import Partners from "./resoures/Partners";
import BrandGraph from "./others/BrandGraph";
import ContactSupport from "./others/ContactSupport";
import KnowledgeBase from "./others/KnowledgeBase";
import ArticlesFeatured from "./resoures/ArticlesFeatured";
import ProductUpdate from "./resoures/productUpdate";
import Articles from "./resoures/Articles";
import InquiryThanks from "./resoures/InquiryThanks";

import AttractBrands from "./influencer/dashboard/AttractBrands";
import ActiveTodos from "./influencer/dashboard/Listings/ActiveTodos";
import AdminChangeRequests from "./influencer/dashboard/Listings/AdminChangeRequests";
import NewOrders from "./influencer/dashboard/Listings/NewOrders";
import ActivePitches from "./influencer/dashboard/Pitches/ActivePitches";
import AllPitches from "./influencer/dashboard/Pitches/AllPitches";
import OutstandingPitches from "./influencer/dashboard/Pitches/OutstandingPitches";
import CompletedPurchases from "./influencer/dashboard/Transactions/CompletedPurchases";
import CompletedSales from "./influencer/dashboard/Transactions/CompletedSales";
import EditProfile from "./influencer/EditProfile";

import PartnersTalent from "./resoures/PartnersTalent";
import PartnersSolutions from "./resoures/PartnersSolutions";

import { Detector } from "react-detect-offline";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MarketplaceDetail from "./brand/MarketplaceDetail";
import Profile from "./influencer/Profile";
import { useSelector } from "react-redux";
import Signin from "./Sign-in";
import Marketplace from "./brand/pages/Marketplace";
import Dashboardp from "./brand/pages/Dashboardp"
import NewCastingCall from "./influencer/NewCastingCall";
import Castings from "./influencer/Castings";
import Castingdetail from "./brand/parts/Castingdetail";
import Page from "./brand/parts/Page1";
import Modals from "./brand/parts/Buttons";
import Variants from "./brand/parts/Shimmer";
import ThreeCards from "./brand/parts/ThreeCards";
import Sliderr from "./brand/parts/Sliderr";
import MultipleItems from "./brand/parts/Sliderr";
import SliderShimmer from "./brand/parts/SliderShimmer";
import Faltu from "./others/Faltu";
import PostACampaign from "./brand/pages/PostACampaign";
const Wrapper = ({ children }) => {
  let navigate = useNavigate();

  //  if(localStorage.getItem('user')==null){
  //        navigate('/login');
  //    }
 const isAuthenticated = localStorage.getItem("apiResponseData");
  var pageName = window.location.pathname;

  pageName = pageName.split("/");
  //console.log('pageName', pageName)
  const SubHeaderPages = ["home", ""];
  const ActiveSubheader = SubHeaderPages.includes(pageName[2]);

  const AfterLogin = ["login", "forgot-password"];
  const AfterLoginPage = AfterLogin.includes(pageName[2]);

  return (
    <>
      <div
        className={`app-page d-flex flex-column flex-column-fluid flex-column align-items-stretch h-100`}
      >
        {!isAuthenticated ? (
          <>
            <Header />
            <Aside />
          </>
        ) : null}

        <main className="main_content">{children}</main>

        <Detector
          style={{ display: "none" }}
          render={({ online }) => (
            <div className={online ? "net-online" : "net-offline"}>
              {online ? "" : "Network Problem"}
            </div>
          )}
        />
      </div>
      {/* <div
        className={
          !AfterLoginPage
            ? `app-page d-flex flex-column flex-column-fluid flex-column align-items-stretch 
    h-100 ${!ActiveSubheader ? " has-subheader" : ""} ${
                pageName[2] == "home" ? `app-page-home` : ""
              }`
            : null
        }
      >
        {!AfterLoginPage ? (
          <>
            <Header />
            <Aside />
          </>
        ) : null}

        <main className="main_content">{children}</main>

        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>

      <Detector
        style={{ display: "none" }}
        render={({ online }) => (
          <div className={online ? "net-online" : "net-offline"}>
            {online ? "" : "Network Problem"}
          </div>
        )}
      /> */}
    </>
  );
};

function MainCompomentRouter() {
  const loginuser = useSelector((state) => state.authenticated);
  const isAuthenticated = localStorage.getItem("apiResponseData");
  //console.log(loginuser.userData.user_id,'loginuseraaaaa')
  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route path="/page1" element={<Page />} />
          <Route exact path="/sign-in" element={<Login />}></Route>
          <Route exact path="/sign-up" element={<SignUp />}></Route>
        </>
      ) : (
        <>
          {/* <Route exact path="/" element={<Wrapper><Home /></Wrapper>}></Route> */}
          <Route
            exact
            path="/home"
            element={
              <Wrapper>
                <Home />
              </Wrapper>
            }
          ></Route>
          <Route exact path="/sign-up" element={<SignUp />}></Route>
          <Route exact path="/casting-call" element={<CastingCall />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </>
      )}
      <Route exact path="/" element={<Home id={"home"} />}></Route>

      <Route exact path="/trading-video" element={<Todaystrading />}></Route>
      <Route exact path="/create-listing" element={<CreateListing />}></Route>
      <Route
        exact
        path="/create-listing/:type/:parm"
        element={<CreateListing />}
      ></Route>
      <Route exact path="/casting-calls" element={<CastingCalls />}></Route>
      <Route exact path="/market-place" element={<CreatemarketPlace />}></Route>
      <Route
        exact
        path="/managed-service"
        element={<ManagedServices />}
      ></Route>
      <Route
        exact
        path="/influencer-marketing-resources"
        element={<MarketingResoures />}
      ></Route>
      <Route exact path="/our-work" element={<OurWork />}></Route>
      <Route exact path="/partners" element={<Partners />}></Route>
      <Route
        exact
        path="/influencer-search"
        element={<InfluencerList />}
      ></Route>
      <Route exact path="/brand-graph" element={<BrandGraph />}></Route>
      <Route
        exact
        path="/contact-support"
        element={<ContactSupport topMenu={true} />}
      ></Route>
      <Route exact path="/knowledge-base" element={<KnowledgeBase />}></Route>
      <Route
        exact
        path="brand/market-place-detail"
        element={<MarketplaceDetail />}
      ></Route>
      <Route exact path="/influencer-profile/:id" element={<Profile />}></Route>
      <Route
        exact
        path="/partners-information-talent"
        element={<PartnersTalent />}
      ></Route>
      <Route
        exact
        path="/partners-information-solutions"
        element={<PartnersSolutions />}
      ></Route>
      <Route exact path="/attract-brands" element={<AttractBrands />}></Route>
      <Route exact path="/waiting-on-buyer" element={<ActiveTodos />}></Route>
      <Route exact path="/active-orders" element={<NewOrders />}></Route>
      <Route
        exact
        path="/in-admin-review"
        element={<AdminChangeRequests />}
      ></Route>
      <Route exact path="/all-pitches" element={<AllPitches />}></Route>
      <Route exact path="/active-pitches" element={<ActivePitches />}></Route>
      <Route
        exact
        path="/outstanding-pitches"
        element={<OutstandingPitches />}
      ></Route>
      <Route
        exact
        path="/completed-purchases"
        element={<CompletedPurchases />}
      ></Route>
      <Route exact path="/completed-sales" element={<CompletedSales />}></Route>
      <Route exact path="/edit-profile" element={<EditProfile />}></Route>
      <Route exact path="/inquiry-thanks" element={<InquiryThanks />}></Route>
      <Route exact path="/articles" element={<Articles />}></Route>
      <Route exact path="/product-update" element={<ProductUpdate />}></Route>
      <Route
        exact
        path="/articles-featured"
        element={<ArticlesFeatured />}
      ></Route>
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <Route path="/brand/marketplace" element={<Marketplace />} />
      <Route
        path="/brand/marketplace/:user_id"
        element={<MarketplaceDetail />}
      />
      <Route path="/brand/marketplace/chat" element={<Faltu />} />
      <Route path="/brand/dashboard" element={<Dashboardp />} />
      <Route path="/brand/Casting-detail" element={<Castingdetail />} />
      <Route path="/shimmer" element={<SliderShimmer />} />
      {/* <Route path="/chat" element={<Faltu />} /> */}
      <Route path="/brand/postacampaign" element={<PostACampaign />} />
      <Route exact path="/casting-call" element={<CastingCall />}></Route>
      <Route exact path="/casting-call/:id" element={<Castingdetail />}></Route>
      <Route exact path="/casting-call/:id/chat" element={<Faltu />}></Route>
      <Route exact path="/casting-call/chat" element={<Faltu />}></Route>
    </Routes>
  );
}

export default MainCompomentRouter;
