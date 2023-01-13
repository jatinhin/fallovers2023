import React from 'react';
import { Link } from 'react-router-dom';

const Error = (match) => {
return (
<>
 
   <div
    id="pcoded"
    className="pcoded iscollapsed"
    nav-type="st2"
    theme-layout="vertical"
    vertical-placement="left"
    vertical-layout="wide"
    pcoded-device-type="desktop"
    vertical-nav-type="expanded"
    vertical-effect="shrink"
    vnavigation-view="view1"
    fream-type="theme1"
    layout-type="light"
>
     <div className="pcoded-overlay-box"></div>
       <div className="pcoded-container navbar-wrapper">

        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">

                <div className="modal fade" id="emp_request" tabIndex="-1" data-keyboard="false" data-backdrop="static" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" id="all-notification"></div>
                    </div>
                </div>

                 <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="page-body"  style={{textAlign:'center',marginTop:'10rem'}}>
                                 <div className="big-content">
                                    <h1>
                                        <Link to="/"  style={{fontSize:'5rem', fontWeight:'bold'}}>FALLOVERS</Link> </h1>
                                    </div>

                                     <h2>Oops! Error 404 not found.</h2>
                                     <p>The page you were looking for doesn't exist.
                                        <br/> We think the page may have moved.</p>
                                 </div>
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

export default Error
