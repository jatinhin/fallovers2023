import React, { Component, Suspense } from 'react';
import { Link } from 'react-router-dom';
const AsideMenu = React.lazy(() => import('./AsideMenu'));

export default class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //isActiveAside: false,
        };
    }
      
    componentDidMount() {
        var menuToggle = document.getElementById("main_menu_toggle");
        if(menuToggle){
            menuToggle.addEventListener("click", this.toogleMenu);
        }
    }
    toogleMenu = () => {
        var rootEle = document.getElementById('ugc-suit-main');
        if(rootEle){
            rootEle.classList.toggle('aside-on');
        }
    };
    render() {
        return <>
                <aside className="sidebar-menu-main py-3 bg-white">
                    <div className="sidebar-menu">
                        <Suspense fallback={<div>Loading...</div>}>
                            <AsideMenu />
                        </Suspense>
                        <hr className="mt-4 mb-4"/>         
                        <ul className="sidebar-menu-list list-unstyled mb-0 pe-4">
                            <li className="sidebar-menu-items mb-2">
                                <Link to={'/home'} className="d-flex align-items-center text-primary fw-bold text-decoration-none"> 
                                    <span className="svg-icon menu-icon d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="symbol-20" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0H24V24H0z"/>
                                            <g><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z" fill="currentColor"/></g>
                                        </svg>
                                    </span>
                                    <span className="ms-2 menu-text">Support</span>    
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="aside-overlay" onClick={this.toogleMenu}></div>
            </>
    }
}