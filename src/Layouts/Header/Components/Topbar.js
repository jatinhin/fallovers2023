import React from 'react';
import { useState,useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useNavigate  } from 'react-router-dom';

function Topabar({data,setisFilter,isFilter,refreshData,setrefreshData}) {
    
 const [topData,settopData] = useState(data);   
 let navigate = useNavigate();
  
console.log(topData.link,'linklinklink')

 console.log(topData,'topDatatopData')

 return (<div className="position-fixed  subheader">
                        <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap h-100">
                            <div className="d-flex align-items-center flex-wrap top-heading">
                                <h1 className="font-weight-bold mr-4  mb-0 page-heading">{topData.title}</h1>
                            </div>
                            <div className="d-flex align-items-center flex-wrap top-icon">
                                <ul className="list-inline d-flex align-items-center flex-nowrap mb-0 m_action_icons top-tool-icon">
                                 

                                  {topData.link ?   

                                   <li>    
                                  <Link to={topData.pagelink}>  
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add</Tooltip>}>
                                      <button  type="button" className="btn btn-icon btn-active-light btn-active-light-new p-0 w-40px h-40px transition-none border-0">
                                       <svg  viewBox="0 0 32 32"><g data-name="21-Add"><path d="M25 0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V7a7 7 0 0 0-7-7zm5 25a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5z"/><path d="M17 6h-2v9H6v2h9v9h2v-9h9v-2h-9V6z"/></g></svg>
                                      </button></OverlayTrigger></Link></li>  : <Link onClick={() =>  navigate(-1)}>  
                                     
                                     <OverlayTrigger placement="top" overlay={<Tooltip>Back</Tooltip>}>
                                      <button  type="button" className="btn btn-icon btn-active-light btn-active-light-new p-0 w-40px h-40px transition-none border-0">
                                          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11.62 3.81 7.43 8l4.19 4.19-1.53 1.52L4.38 8l5.71-5.71 1.53 1.52z"/></svg>
                                      </button></OverlayTrigger></Link> }

                                   
                                  {topData.filter ?   
                                    <li>
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Filter {isFilter ? 'Remove' : ''}</Tooltip>}>
                                        <button  onClick={(e)=>setisFilter(isFilter ? false : true)} type="button" className="btn btn-icon btn-active-light btn-active-light-new p-0 w-40px h-40px transition-none border-0">
                                            <span className="svg-icon svg-icon-5">
                                                
                                                {isFilter ? 

                                                 <svg viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" strokeWidth="4" d="M10,10,4,2H20l-6,8V22H10Z"/></svg>

                                                    :

                                                <svg  viewBox="0 0 20.196 20.208">
                                                    <path id="filter" d="M19.427,0H1.269A.769.769,0,0,0,.5.769,7.515,7.515,0,0,0,3.02,6.381l3.37,3a2.742,2.742,0,0,1,.919,2.048v7.5a.77.77,0,0,0,1.2.64l4.539-3.026a.77.77,0,0,0,.343-.64V11.424a2.742,2.742,0,0,1,.919-2.048l3.37-3A7.515,7.515,0,0,0,20.2.769.769.769,0,0,0,19.427,0ZM16.654,5.231l-3.37,3a4.282,4.282,0,0,0-1.436,3.2v4.065l-3,2V11.424a4.282,4.282,0,0,0-1.436-3.2l-3.37-3A5.977,5.977,0,0,1,2.089,1.539H18.608A5.975,5.975,0,0,1,16.654,5.231Zm0,0" transform="translate(-0.25 0.25)" fill="currentColor" stroke="currentColor" strokeWidth="0.5"></path>
                                                </svg>
                                               
                                                }

                                            </span>
                                        </button>
                                    </OverlayTrigger>  
                                    </li> : null }


                                 { topData.refresh ?  
                                    <li>
                                     <OverlayTrigger onClick={(e)=>setrefreshData} placement="top" overlay={<Tooltip>Refresh</Tooltip>}>
                                        <button  type="button" className="btn btn-icon btn-active-light btn-active-light-new p-0 w-40px h-40px transition-none border-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 3a8.959 8.959 0 0 0-7 3.339V4H3v6h6V8H6.274a6.982 6.982 0 1 1-1.054 5.751l-1.936.5A9 9 0 1 0 12 3z"/></svg>
                                        </button>
                                      </OverlayTrigger>  
                                    </li> : null }


                                </ul>
                            </div>
                        </div>
                    </div>);
}
export default Topabar
