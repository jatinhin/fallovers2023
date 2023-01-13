import React from 'react';
import { useState,useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Topabar from '../Header/Components/Topbar';

 function Forgotpassword(props) {

     useEffect(()  => { 
        
     }, []) 

    return (
      <>

   <div className='d-flex flex-column flex-column-fluid align-items-center justify-content-center w-100 bg-gray lex-column-login'>
    <div className="container container-small loginPage pading-0">
     <div className="flex-row-fluid flex-column-login">
      <div className="app-container pading-0">
      <div className="d-flex flex-root flex-column-login">
        <div className="d-flex flex-lg-row flex-column-fluid flex-column-login">

          <div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10 lex-column-login loginLeft">
            {/*begin::Wrapper*/}
            <div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px lex-column-login">
              <div className="py-20">
                {/*begin::Form*/}
                <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate="novalidate" data-kt-redirect-url="/metronic8/demo1/../demo1/index.html" action="#">
                  {/*begin::Body*/}
                  <div className="card-body">
                    {/*begin::Heading*/}
                    <div className="text-start mb-10">
                      {/*begin::Title*/}
                      <h1 className="text-dark mb-3 fs-3x login-heading" data-kt-translate="sign-in-title"> Forgot Password</h1>
                      <div className="text-gray-400  fs-6" data-kt-translate="general-desc">Fallovers access to continue</div>
                    </div>

                    <div className="fv-row mb-8 fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid">
                      {/*begin::Email*/}
                      <input type="text" placeholder="Email" name="email" autoComplete="off" data-kt-translate="sign-in-input-email" className="form-control form-control-solid" />
                      {/*end::Email*/}
                      <div className="fv-plugins-message-container invalid-feedback"><div data-field="email" data-validator="notEmpty">Email address is required</div></div></div>
                    

                    <div className="d-grid mb-10">
                      <button  className="btn btn-primary me-2 flex-shrink-0">
                        <span className="indicator-label" data-kt-translate="sign-in-submit">Submit</span>
                          <span className="indicator-progress">
                            <span data-kt-translate="general-progress">Please wait...</span>
                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                          </span>
                      </button>
                    </div>


                    <div className="text-gray-500 text-center fw-semibold fs-6">Already have an Account  
                       <Link to="/" className="link-primary fw-semibold"> Sign In</Link>
                    </div>
                  </div>
                </form>
               </div>
            </div>
            </div>


            <div className="d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat loginRight">
                <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
                </div>
            </div>
           </div>
        </div>
       </div>
     </div>
    </div>
    </div>
     </>
   )
}

export default Forgotpassword
