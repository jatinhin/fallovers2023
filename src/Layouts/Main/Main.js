import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import Home from '../Main/Home';
import Login from './Login';
import SignUp from './SignUp';
import CastingCall from './casting-call';
//import InfluencerList from './influencer/InfluencerList';
//import Dashboard from './Dashboard';

import Dashboard from './influencer/Dashboard';
import InfluencerList from './influencer/InfluencerList';
import CreatemarketPlace from './brand/CreatemarketPlace';
import ManagedServices from './brand/ManagedServices';
import CastingCalls from './influencer/CastingCalls';
import CreateListing from './influencer/CreateListing';
import MarketingResoures from './resoures/MarketingResoures';
import OurWork from './resoures/OurWork';
import Partners from './resoures/Partners';
import BrandGraph from './others/BrandGraph';
import ContactSupport from './others/ContactSupport';
import KnowledgeBase from './others/KnowledgeBase';


import { ToastContainer } from 'react-toastify';
import { Detector } from "react-detect-offline";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Wrapper = ({ children }) => { 

    let navigate = useNavigate();

    //  if(localStorage.getItem('user')==null){
    //        navigate('/login');  
    //    }

    var pageName = window.location.pathname;
    
    pageName = pageName.split("/");
    //console.log('pageName', pageName)
    const SubHeaderPages = ["home", ""];
    const ActiveSubheader =  SubHeaderPages.includes(pageName[2]);
    
    const AfterLogin = ["login", "forgot-password"];
    const AfterLoginPage =  AfterLogin.includes(pageName[2]);

    return <><div className={ !AfterLoginPage ? `app-page d-flex flex-column flex-column-fluid flex-column align-items-stretch 
    h-100 ${!ActiveSubheader  ? ' has-subheader' : ''} ${pageName[2]=='home' ? `app-page-home` : ''}` : null}>
              
            { !AfterLoginPage ? 
            
                <>
                    <Header />
                     <Aside />
                  </> : null}
                
                <main className="main_content">
                    {children}
                </main>


         

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
            theme="colored" />
        </div>

        <Detector style={{display:"none"}}
        render={({ online }) => ( 
            <div className={online ? "net-online" : "net-offline"}>
            {online ? "" : "Network Problem"}
        </div>
        )} />

    </>
}


function MainCompomentRouter() { 
    const [token, setToken] = useState(localStorage.getItem("access"))
 
    if(!token) {
        console.log('if---------')

       return <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/sign-in" element={<Login />}></Route>
        <Route exact path="/sign-up" element={<SignUp />}></Route>
        <Route exact path="/casting-call" element={<CastingCall />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/create-listing" element={<CreateListing />}></Route>
        <Route exact path="/casting-calls" element={<CastingCalls />}></Route>
        <Route exact path="/market-place" element={<CreatemarketPlace />}></Route>
        <Route exact path="/managed-service" element={<ManagedServices />}></Route>
        <Route exact path="/influencer-marketing-resources" element={<MarketingResoures />}></Route>
        <Route exact path="/our-work" element={<OurWork />}></Route>
        <Route exact path="/partners" element={<Partners />}></Route>
        <Route exact path="/influencer-search" element={<InfluencerList />}></Route>
        <Route exact path="/brand-graph" element={<BrandGraph />}></Route>
        <Route exact path="/contact-support" element={<ContactSupport />}></Route>
        <Route exact path="/knowledge-base" element={<KnowledgeBase />}></Route>

       </Routes>
    }
    else {
        console.log('else---------')
        return <Routes>
            <Route exact path="/" element={<Wrapper><Home /></Wrapper>}></Route>
            <Route exact path="/home" element={<Wrapper><Home /></Wrapper>}></Route>
            <Route exact path="/sign-up" element={<SignUp />}></Route>
            <Route exact path="/casting-call" element={<CastingCall />}></Route>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>

        </Routes>}
}

export default MainCompomentRouter;