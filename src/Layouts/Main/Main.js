import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import Home from './Home/Home';
import Login from './Login';

import { ToastContainer } from 'react-toastify';
import { Detector } from "react-detect-offline";
import { BASE_URL } from "../../actions/api";
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
       /// return <Login />

       return <Routes>
        <Route exact path="/" element={<Login />}></Route>
       </Routes>
    }
    else {
        console.log('else---------')
        return <Routes>
            <Route exact path="/" element={<Wrapper><Home /></Wrapper>}></Route>
            <Route exact path="/home" element={<Wrapper><Home /></Wrapper>}></Route>

        </Routes>}
}

export default MainCompomentRouter;