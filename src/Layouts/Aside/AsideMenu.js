import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

export default class AsideMenu extends Component {
    constructor(props) {
        super(props);
    
        const access = JSON.parse(localStorage.getItem("access"));
    
        this.state = {
          roll: access[0].admin_roll,
        };
      }
    render() {
        return (
                <ul className="sidebar-menu-list list-unstyled mb-0 pe-4">
                    <li className="sidebar-menu-items mb-2">
                        <NavLink to="/home" className="d-flex align-items-center fw-bold text-decoration-none" activeclassname="active">
                            <span className="svg-icon menu-icon d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="symbol-20" viewBox="0 0 22 19.648">
                                    <path fill="none" d="M0 0H24V24H0z"/>
                                    <g><path id="Path_2323" data-name="Path 2323" d="M6,19H18V9.157L12,3.7,6,9.157Zm13,2H5a1,1,0,0,1-1-1V11H1L11.327,1.612a1,1,0,0,1,1.346,0L23,11H20v9A1,1,0,0,1,19,21ZM7.5,13h2a2.5,2.5,0,1,0,5,0h2a4.5,4.5,0,0,1-9,0Z" transform="translate(-1 -1.352)" fill="#313a53"></path></g>
                                </svg>
                            </span>
                            <span className="ms-2 menu-text">Dashboard</span>
                        </NavLink>
                    </li>


                {this.state.roll == "A" ? <>

                    <li className="sidebar-menu-items mb-2">
                        <NavLink  to="/commission-setting" className="menu-toggle d-flex align-items-center fw-bold text-decoration-none justify-content-between" activeclassname="active"> 
                            <span className="svg-icon menu-icon d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="symbol-20" viewBox="0 0 24 24" width="24" height="24">
                                    <g><path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM8 19h12v-8H8v8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14h2z" fill="#313a53"/></g>
                                </svg>
                            </span>
                            <span className="ms-2 menu-text flex-grow-1">Master</span>    
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="12" width="12" className="menu-arrow fill-primary">
                                <path fill="none" d="M0 0H24V24H0z"/>
                                <g><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor"/></g>
                            </svg>
                        </NavLink>
                        <div className="menu-submenu">
                            <ul className="submenu-nav list-unstyled mt-2 mb-0">

    
                                <li className="submenu-nav-item">
                                    <NavLink to="/commission-setting" className="d-flex align-items-center fw-bold text-decoration-none"> 
                                        <span className="submenu-item d-flex overflow-hidden symbol-22 sub-menu">
                                            <svg viewBox="0 0 320 512" height="12" width="12" className="menu-arrow fill-primary ">
                                                <path fill="none" d="M0 0H24V24H0z"/>
                                                <g><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor"/></g>
                                            </svg>
                                        </span>
                                        <span className="ms-2 menu-text">Commission</span>    
                                    </NavLink >
                                </li>

                                <li className="submenu-nav-item">
                                    <NavLink to="/email-verify" className="d-flex align-items-center fw-bold text-decoration-none"> 
                                        <span className="submenu-item d-flex overflow-hidden symbol-22 sub-menu">
                                            <svg viewBox="0 0 320 512" height="12" width="12" className="menu-arrow fill-primary ">
                                                <path fill="none" d="M0 0H24V24H0z"/>
                                                <g><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor"/></g>
                                            </svg>
                                        </span>
                                        <span className="ms-2 menu-text">Email verify</span>    
                                    </NavLink >
                                </li>
                            </ul>
                        </div>
                    </li>


                    <li className="sidebar-menu-items mb-2">
                        <NavLink  to="/list-category" className="menu-toggle d-flex align-items-center fw-bold text-decoration-none justify-content-between" activeclassname="active"> 
                            <span className="svg-icon menu-icon d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="symbol-20" viewBox="0 0 24 24" width="24" height="24">
                                    <g><path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM8 19h12v-8H8v8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14h2z" fill="#313a53"/></g>
                                </svg>
                            </span>
                            <span className="ms-2 menu-text flex-grow-1">Creator Tags</span>    
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="12" width="12" className="menu-arrow fill-primary">
                                <path fill="none" d="M0 0H24V24H0z"/>
                                <g><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor"/></g>
                            </svg>
                        </NavLink>
                        <div className="menu-submenu">
                            <ul className="submenu-nav list-unstyled mt-2 mb-0">

                                <li className="submenu-nav-item">
                                    <NavLink to="/social-media" className="d-flex align-items-center fw-bold text-decoration-none"> 
                                        <span className="submenu-item d-flex overflow-hidden symbol-22 sub-menu">
                                            <svg viewBox="0 0 320 512" height="12" width="12" className="menu-arrow fill-primary">
                                                <path fill="none" d="M0 0H24V24H0z"/>
                                                <g><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor"/></g>
                                            </svg>
                                        </span>
                                        <span className="ms-2 menu-text">Social Media</span>    
                                    </NavLink >
                                </li>


                                <li className="submenu-nav-item">
                                    <NavLink to="/list-category" className="d-flex align-items-center fw-bold text-decoration-none"> 
                                        <span className="submenu-item d-flex overflow-hidden symbol-22 sub-menu">
                                            <svg viewBox="0 0 320 512" height="12" width="12" className="menu-arrow fill-primary">
                                                <path fill="none" d="M0 0H24V24H0z"/>
                                                <g><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor"/></g>
                                            </svg>
                                        </span>
                                        <span className="ms-2 menu-text">Category</span>    
                                    </NavLink >
                                </li>

                               


                                <li className="submenu-nav-item">
                                    <NavLink to="/list-sub-category" className="d-flex align-items-center fw-bold text-decoration-none"> 
                                        <span className="submenu-item d-flex overflow-hidden symbol-22 sub-menu">
                                            <svg viewBox="0 0 320 512" height="12" width="12" className="menu-arrow fill-primary">
                                                <path fill="none" d="M0 0H24V24H0z"/>
                                                <g><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor"/></g>
                                            </svg>
                                        </span>
                                        <span className="ms-2 menu-text">Sub Category</span>    
                                    </NavLink >
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="sidebar-menu-items mb-2">
                        <NavLink to="/manager-list" className="d-flex align-items-center fw-bold text-decoration-none" activeclassname="active">
                            <span className="svg-icon menu-icon d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="symbol-20" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0H24V24H0z"/>
                                    <g><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#313a53"/></g>
                                </svg>
                            </span>
                            <span className="ms-2 menu-text">Manager</span>    
                        </NavLink>
                    </li> </> : null }


                    <li className="sidebar-menu-items mb-2">
                        <NavLink  to="/influencer" className="menu-toggle d-flex align-items-center fw-bold text-decoration-none justify-content-between" activeclassname="active"> 
                            <span className="svg-icon menu-icon d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="symbol-20" viewBox="0 0 24 24" width="24" height="24">
                                    <g><path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM8 19h12v-8H8v8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14h2z" fill="#313a53"/></g>
                                </svg>
                            </span>
                            <span className="ms-2 menu-text flex-grow-1">Users</span>    
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="12" width="12" className="menu-arrow fill-primary">
                                <path fill="none" d="M0 0H24V24H0z"/>
                                <g><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor"/></g>
                            </svg>
                        </NavLink>
                        <div className="menu-submenu">
                            <ul className="submenu-nav list-unstyled mt-2 mb-0">
                                <li className="submenu-nav-item">
                                    <NavLink to="/influencer" className="d-flex align-items-center fw-bold text-decoration-none"> 
                                        <span className="submenu-item d-flex overflow-hidden symbol-22 sub-menu">
                                        <svg viewBox="0 0 320 512" height="12" width="12" className="menu-arrow fill-primary">
                                                <path fill="none" d="M0 0H24V24H0z"/>
                                                <g><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor"/></g>
                                            </svg>
                                        </span>
                                        <span className="ms-2 menu-text">Influencer</span>    
                                    </NavLink >
                                </li>

                                <li className="submenu-nav-item">
                                    <NavLink to="/brands" className="d-flex align-items-center fw-bold text-decoration-none"> 
                                        <span className="submenu-item d-flex overflow-hidden symbol-22 sub-menu">
                                            <svg viewBox="0 0 320 512" height="12" width="12" className="menu-arrow fill-primary">
                                                <path fill="none" d="M0 0H24V24H0z"/>
                                                <g><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" fill="currentColor"/></g>
                                            </svg>
                                         </span>
                                        <span className="ms-2 menu-text">Brands</span>    
                                    </NavLink >
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
    );
}
}
