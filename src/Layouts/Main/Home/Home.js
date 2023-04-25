import React, { Component, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {Logo} from '../../../Constants/Images'

class Home extends Component {
    render() {
        return <div className='d-flex flex-column flex-column-fluid align-items-center justify-content-center w-100 flex-position-center full-content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12'>
                                <div className='row h-100'>

                                    <div className='col'>
                                        <div className="card card-custom card-stretch border-0 gutter-b assets_tile">
                                            <div className="card-body d-flex flex-column p-xl-4">
                                                <div className="flex-grow-1">
                                                    <h5 className="text-light-alt">Deal</h5>
                                                    <div className="text-light-alt fw-bolder h1">223</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="card card-custom card-stretch border-0 gutter-b campaign">
                                            <div className="card-body d-flex flex-column p-xl-4">
                                                <div className="flex-grow-1">
                                                    <h5 className="text-light-alt">Total Bead</h5>
                                                    <div className="text-light-alt fw-bolder h1">04</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col col-ls-3'>
                                        <div className="card card-custom card-stretch border-0 gutter-b collection_tile">
                                            <div className="card-body d-flex flex-column p-xl-4">
                                                <div className="flex-grow-1">
                                                    <h5 className="text-light-alt"> Refund</h5>
                                                    <div className="text-light-alt fw-bolder h1">04</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col'>
                                        <div className="card card-custom card-stretch border-0 gutter-b campaign">
                                            <div className="card-body d-flex flex-column p-xl-4">
                                                <div className="flex-grow-1">
                                                    <h5 className="text-light-alt">Communication</h5>
                                                    <div className="text-light-alt fw-bolder h1">04</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                           
                            <div className='col-xl-6 col-sm-6'>
                                <div className="card card-custom gutter-b text-decoration-none">
                                    <div className="card-header pt-4 border-0">
                                        <h5 className="text-dark">Influencers (35)</h5>
                                    </div>
                                    <div className="card-body d-flex flex-column pt-0">
                                        <div className="table-responsive assets_table">
                                            <table className="table  align-middle gs-0 gy-3 my-0">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th className="fw-bold" style={{minWidth:70}}><small>Assets</small></th>
                                                        <th className="fw-bold" style={{minWidth:170}}><small>Author</small></th>
                                                        <th className="fw-bold" style={{minWidth:150}}><small>Created</small></th>
                                                        <th className="fw-bold" style={{minWidth:70}}><small>Type</small></th>
                                                        <th className="fw-bold" style={{minWidth:120}}><small>Folder Name</small></th>
                                                        <th className="fw-bold" style={{minWidth:70}}><small>Network</small></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-56 d-flex align-items-center justify-content-center flex-shrink-0 me-2 border rounded">
                                                                    <div className="symbol symbol-50">
                                                                        <img className="object-center-fit" src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=150" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden">
                                                                    <img className="object-center-fit" src="https://images.pexels.com/photos/355036/pexels-photo-355036.jpeg?h=350" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark mb-0"><strong>John Chavez</strong></p>
                                                                    <small className="mb-0 text-muted">@John_Chavez</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-uppercase"><small>04 AUG 2022 4:03PM</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>Image</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>New York Store</small></span>
                                                        </td>
                                                        <td className="pr-0 text-center">
                                                            <div className="w-100 block-center">
                                                                <span className="h-20px w-20px">
                                                                    <img className="img-fluid h-100" src="media/icons/social-icons/twitter.svg" alt="" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-56 d-flex align-items-center justify-content-center flex-shrink-0 me-2 border rounded">
                                                                    <div className="symbol symbol-50">
                                                                        <img className="object-center-fit" src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=150" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden">
                                                                    <img className="img-fluid" src="https://images.pexels.com/photos/355036/pexels-photo-355036.jpeg?h=350" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark mb-0"><strong>John Chavez</strong></p>
                                                                    <small className="mb-0 text-muted">@John_Chavez</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-uppercase"><small>04 AUG 2022 4:03PM</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>Image</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>New York Store</small></span>
                                                        </td>
                                                        <td className="pr-0 text-center">
                                                            <div className="w-100 block-center">
                                                                <span className="h-20px w-20px">
                                                                    <img className="object-center-fit" src="media/icons/social-icons/youtube.svg" alt="" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-56 d-flex align-items-center justify-content-center flex-shrink-0 me-2 border rounded">
                                                                    <div className="symbol symbol-50">
                                                                        <img className="object-center-fit" src="https://images.pexels.com/photos/13284755/pexels-photo-13284755.jpeg?auto=compress&cs=tinysrgb&w=180" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden">
                                                                    <img className="object-center-fit" src="https://randomuser.me/api/portraits/men/52.jpg" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark mb-0"><strong>John Chavez</strong></p>
                                                                    <small className="mb-0 text-muted">@John_Chavez</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-uppercase"><small>04 AUG 2022 4:03PM</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>Image</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>New York Store</small></span>
                                                        </td>
                                                        <td className="pr-0 text-center">
                                                            <div className="w-100 block-center">
                                                                <span className="h-20px w-20px">
                                                                    <img className="object-center-fit" src="media/icons/social-icons/facebook.svg" alt="" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-56 d-flex align-items-center justify-content-center flex-shrink-0 me-2 border rounded">
                                                                    <div className="symbol symbol-50">
                                                                        <img className="object-center-fit" src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=150" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden">
                                                                    <img className="object-center-fit" src="https://randomuser.me/api/portraits/men/52.jpg" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark mb-0"><strong>John Chavez</strong></p>
                                                                    <small className="mb-0 text-muted">@John_Chavez</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-uppercase"><small>04 AUG 2022 4:03PM</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>Image</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>New York Store</small></span>
                                                        </td>
                                                        <td className="pr-0 text-center">
                                                            <div className="w-100 block-center">
                                                                <span className="h-20px w-20px">
                                                                    <img className="object-center-fit" src="media/icons/social-icons/instagram.svg" alt="" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-56 d-flex align-items-center justify-content-center flex-shrink-0 me-2 border rounded">
                                                                    <div className="symbol symbol-50">
                                                                        <img className="object-center-fit" src="https://images.pexels.com/photos/13284755/pexels-photo-13284755.jpeg?auto=compress&cs=tinysrgb&w=180" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden">
                                                                    <img className="object-center-fit" src="https://i.pinimg.com/736x/bc/4b/bd/bc4bbd2ce6b43c390187869173b36130.jpg" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark mb-0"><strong>John Chavez</strong></p>
                                                                    <small className="mb-0 text-muted">@John_Chavez</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-uppercase"><small>04 AUG 2022 4:03PM</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>Image</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>New York Store</small></span>
                                                        </td>
                                                        <td className="pr-0 text-center">
                                                            <div className="w-100 block-center">
                                                                <span className="h-20px w-20px">
                                                                    <img className="img-fluid h-100" src="media/icons/social-icons/yelp.svg" alt="" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-xl-6  col-sm-6'>
                                <div className="card card-custom gutter-b text-decoration-none">
                                    <div className="card-header pt-4 border-0">
                                        <h5 className="text-dark">Brands (20)</h5>
                                    </div>
                                    <div className="card-body d-flex flex-column pt-0">
                                        <div className="table-responsive assets_table">
                                            <table className="table  align-middle gs-0 gy-3 my-0">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th className="fw-bold" style={{minWidth:70}}><small>Assets</small></th>
                                                        <th className="fw-bold" style={{minWidth:170}}><small>Author</small></th>
                                                        <th className="fw-bold" style={{minWidth:150}}><small>Created</small></th>
                                                        <th className="fw-bold" style={{minWidth:70}}><small>Type</small></th>
                                                        <th className="fw-bold" style={{minWidth:120}}><small>Folder Name</small></th>
                                                        <th className="fw-bold" style={{minWidth:70}}><small>Network</small></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-56 d-flex align-items-center justify-content-center flex-shrink-0 me-2 border rounded">
                                                                    <div className="symbol symbol-50">
                                                                        <img className="object-center-fit" src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=150" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden">
                                                                    <img className="object-center-fit" src="https://images.pexels.com/photos/355036/pexels-photo-355036.jpeg?h=350" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark mb-0"><strong>John Chavez</strong></p>
                                                                    <small className="mb-0 text-muted">@John_Chavez</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-uppercase"><small>04 AUG 2022 4:03PM</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>Image</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>New York Store</small></span>
                                                        </td>
                                                        <td className="pr-0 text-center">
                                                            <div className="w-100 block-center">
                                                                <span className="h-20px w-20px">
                                                                    <img className="img-fluid h-100" src="media/icons/social-icons/twitter.svg" alt="" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-56 d-flex align-items-center justify-content-center flex-shrink-0 me-2 border rounded">
                                                                    <div className="symbol symbol-50">
                                                                        <img className="object-center-fit" src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=150" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden">
                                                                    <img className="img-fluid" src="https://images.pexels.com/photos/355036/pexels-photo-355036.jpeg?h=350" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark mb-0"><strong>John Chavez</strong></p>
                                                                    <small className="mb-0 text-muted">@John_Chavez</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-uppercase"><small>04 AUG 2022 4:03PM</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>Image</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>New York Store</small></span>
                                                        </td>
                                                        <td className="pr-0 text-center">
                                                            <div className="w-100 block-center">
                                                                <span className="h-20px w-20px">
                                                                    <img className="object-center-fit" src="media/icons/social-icons/youtube.svg" alt="" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-56 d-flex align-items-center justify-content-center flex-shrink-0 me-2 border rounded">
                                                                    <div className="symbol symbol-50">
                                                                        <img className="object-center-fit" src="https://images.pexels.com/photos/13284755/pexels-photo-13284755.jpeg?auto=compress&cs=tinysrgb&w=180" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden">
                                                                    <img className="object-center-fit" src="https://randomuser.me/api/portraits/men/52.jpg" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark mb-0"><strong>John Chavez</strong></p>
                                                                    <small className="mb-0 text-muted">@John_Chavez</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-uppercase"><small>04 AUG 2022 4:03PM</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>Image</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>New York Store</small></span>
                                                        </td>
                                                        <td className="pr-0 text-center">
                                                            <div className="w-100 block-center">
                                                                <span className="h-20px w-20px">
                                                                    <img className="object-center-fit" src="media/icons/social-icons/facebook.svg" alt="" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-56 d-flex align-items-center justify-content-center flex-shrink-0 me-2 border rounded">
                                                                    <div className="symbol symbol-50">
                                                                        <img className="object-center-fit" src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=150" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden">
                                                                    <img className="object-center-fit" src="https://randomuser.me/api/portraits/men/52.jpg" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark mb-0"><strong>John Chavez</strong></p>
                                                                    <small className="mb-0 text-muted">@John_Chavez</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-uppercase"><small>04 AUG 2022 4:03PM</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>Image</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>New York Store</small></span>
                                                        </td>
                                                        <td className="pr-0 text-center">
                                                            <div className="w-100 block-center">
                                                                <span className="h-20px w-20px">
                                                                    <img className="object-center-fit" src="media/icons/social-icons/instagram.svg" alt="" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-56 d-flex align-items-center justify-content-center flex-shrink-0 me-2 border rounded">
                                                                    <div className="symbol symbol-50">
                                                                        <img className="object-center-fit" src="https://images.pexels.com/photos/13284755/pexels-photo-13284755.jpeg?auto=compress&cs=tinysrgb&w=180" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center mr-2">
                                                                <div className="symbol symbol-40 rounded-circle flex-shrink-0 me-2 overflow-hidden">
                                                                    <img className="object-center-fit" src="https://i.pinimg.com/736x/bc/4b/bd/bc4bbd2ce6b43c390187869173b36130.jpg" alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-dark mb-0"><strong>John Chavez</strong></p>
                                                                    <small className="mb-0 text-muted">@John_Chavez</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-uppercase"><small>04 AUG 2022 4:03PM</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>Image</small></span>
                                                        </td>
                                                        <td>
                                                            <span className=""><small>New York Store</small></span>
                                                        </td>
                                                        <td className="pr-0 text-center">
                                                            <div className="w-100 block-center">
                                                                <span className="h-20px w-20px">
                                                                    <img className="img-fluid h-100" src="media/icons/social-icons/yelp.svg" alt="" />
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card card-custom gutter-b publish_assets">
                                    <div className="card-body d-flex flex-column p-lg-4">
                                        <h5 className="mb-3 mb-lg-4 text-dark">Publish Your Assets</h5>
                                        <div className="row">
                                            <div className="publish_col">
                                                <Link to={'/home'} className="card card-custom gutter-b bg-primary text-decoration-none justify-content-center border-0 publish_btn_">
                                                    <div className="card-body flex-column block-center flex-grow-0 p-2">
                                                        <span className="svg-icon mb-2 w-100 block-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="51.518" height="33.827" viewBox="0 0 51.518 33.827">
                                                                <g id="browser-_1_" transform="translate(0 0)">
                                                                    <path id="Path_7020" data-name="Path 7020" d="M228.476-327.151c-.22.361-8.874,33.078-8.78,33.157a7.082,7.082,0,0,0,1.351.44c.911.236.209.283.272.141.236-.66,8.859-33,8.8-33.047A5.412,5.412,0,0,0,228.476-327.151Z" transform="translate(-198.606 327.161)" fill="#fff"/>
                                                                    <path id="Path_7021" data-name="Path 7021" d="M98.942-302.042c-3.817,3.817-6.942,7.021-6.942,7.1,0,.094,3.173,3.33,7.068,7.225l7.068,7.068,1.021-1.021.441-.515-6.5-6.553c-3.33-3.33-6.047-6.126-6.047-6.2s2.7-2.859,6-6.157l6.506-6.549-.4-.409a5.284,5.284,0,0,0-1.1-.942C105.979-309,102.775-305.874,98.942-302.042Z" transform="translate(-92 311.853)" fill="#fff"/>
                                                                    <path id="Path_7022" data-name="Path 7022" d="M318.006-308.058l-.4.4,6.5,6.555c3.3,3.3,6,6.078,6,6.157s-3.749,3.906-7.079,7.236l-5.568,5.527.542.509,1.021,1.021,7.068-7.068c3.9-3.9,7.068-7.131,7.068-7.225,0-.2-13.853-14.057-14.058-14.057A5.282,5.282,0,0,0,318.006-308.058Z" transform="translate(-281.645 311.853)" fill="#fff"/>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <p className="h6 text-center mb-0">Users</p>
                                                    </div>
                                                </Link>
                                            </div>
                                         
                                            <div className="publish_col">
                                                <Link to={'/home'} className="card card-custom gutter-b bg-primary text-decoration-none justify-content-center border-0 publish_btn_">
                                                    <div className="card-body flex-column block-center flex-grow-0 p-2">
                                                        <span className="svg-icon mb-2 w-100 block-center">
                                                            <svg id="noun_display_2112263_2_" data-name="noun_display_2112263 (2)" xmlns="http://www.w3.org/2000/svg" width="42.029" height="33.827" viewBox="0 0 42.029 33.827">
                                                                <g id="Group_5861" data-name="Group 5861">
                                                                    <path id="Path_10117" data-name="Path 10117" d="M39.526,32.407H6.5A4.387,4.387,0,0,1,2,28.146V8.261A4.387,4.387,0,0,1,6.5,4H39.526a4.387,4.387,0,0,1,4.5,4.261V28.146A4.387,4.387,0,0,1,39.526,32.407ZM6.5,5.825A2.353,2.353,0,0,0,3.987,8.261V28.146A2.549,2.549,0,0,0,6.5,30.581H39.526c.829,0,2.832-.812,2.516-2.436V8.261a2.57,2.57,0,0,0-2.516-2.436Z" transform="translate(-2 -4)" fill="#fff"/>
                                                                    <path id="Path_10118" data-name="Path 10118" d="M32.429,28.381H12.039A1.89,1.89,0,0,1,10,26.691,1.89,1.89,0,0,1,12.039,25h20.39a1.89,1.89,0,0,1,2.039,1.691A1.89,1.89,0,0,1,32.429,28.381Z" transform="translate(-1.22 5.446)" fill="#fff"/>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <p className="h6 text-center mb-0">Digital Screens</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="publish_col">
                                                <Link to={'/home'} className="card card-custom gutter-b bg-primary text-decoration-none justify-content-center border-0 publish_btn_">
                                                    <div className="card-body flex-column block-center flex-grow-0 p-2">
                                                        <span className="svg-icon mb-2 w-100 block-center">
                                                            <svg id="Group_7229" data-name="Group 7229" xmlns="http://www.w3.org/2000/svg" width="47.756" height="33.827" viewBox="0 0 47.756 33.827">
                                                                <g id="_8-Email" data-name="8-Email">
                                                                    <path id="Path_7023" data-name="Path 7023" d="M44.771,7H2.985A2.985,2.985,0,0,0,0,9.985V37.842a2.985,2.985,0,0,0,2.985,2.985H44.771a2.985,2.985,0,0,0,2.985-2.985V9.985A2.985,2.985,0,0,0,44.771,7Zm-.637,1.99L23.878,24.65,3.621,8.99ZM1.99,37.434V10.243L17.321,22.093Zm1.4,1.4L18.9,23.326,23.261,26.7a1,1,0,0,0,1.214,0l4.378-3.373L44.363,38.837Zm42.373-1.4L30.434,22.093,45.766,10.243Z" transform="translate(0 -7)" fill="#fff"/>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <p className="h6 text-center mb-0">Email Campaigns</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="publish_col">
                                                <Link to={'/home'} className="card card-custom gutter-b bg-primary text-decoration-none justify-content-center border-0 publish_btn_">
                                                    <div className="card-body flex-column block-center flex-grow-0 p-2">
                                                        <span className="svg-icon mb-2 w-100 block-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="31.356" height="34.426" viewBox="0 0 31.356 34.426">
                                                                <g id="noun_newsletter_986226" transform="translate(0.25 0.35)">
                                                                    <g id="Group_7921" data-name="Group 7921" transform="translate(0)">
                                                                    <path id="Path_10121" data-name="Path 10121" d="M21.172,11.1H7.5v8.245H21.172Zm-1.057,7.188H8.557V12.157H20.115Z" transform="translate(-4.258 -5.762)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1465" data-name="Rectangle 1465" width="7.682" height="1.057" transform="translate(3.383 15.041)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1466" data-name="Rectangle 1466" width="10.5" height="1.057" transform="translate(3.383 18.297)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1467" data-name="Rectangle 1467" width="13.037" height="1.057" transform="translate(3.383 21.554)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1468" data-name="Rectangle 1468" width="1.057" height="1.057" transform="translate(9.606 24.81)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1469" data-name="Rectangle 1469" width="1.057" height="1.057" transform="translate(7.798 24.81)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1470" data-name="Rectangle 1470" width="1.057" height="1.057" transform="translate(11.362 24.81)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1471" data-name="Rectangle 1471" width="1.057" height="1.057" transform="translate(3.383 24.81)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1472" data-name="Rectangle 1472" width="1.057" height="1.057" transform="translate(5.779 24.81)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1473" data-name="Rectangle 1473" width="1.057" height="1.057" transform="translate(14.977 24.81)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1474" data-name="Rectangle 1474" width="1.057" height="1.057" transform="translate(6.042 24.81)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1475" data-name="Rectangle 1475" width="1.057" height="1.057" transform="translate(13.169 24.81)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <path id="Path_10122" data-name="Path 10122" d="M33.756,29.136v-.365H29.378V23.09h2.867c.208,0,.365-.156.365-10.216a.451.451,0,0,0-.156-.313h0l-3.127-2.71V2.45L26.824,0,24.687,2.085,22.55,0,20.413,2.085,18.276,0,16.139,2.085,14,0,11.813,2.085,9.676,0,7.539,2.085,5.4,0,2.9,2.45V30.022a3.826,3.826,0,0,0,3.8,3.8H30.472a3.322,3.322,0,0,0,3.284-3.492C33.756,30.022,33.756,29.136,33.756,29.136Zm-1.928-7.3-4.9-4.378,4.9-3.8Zm-13.708-8.6H31.1l-4.9,3.8H22.967Zm-.1-.782,6.567-5.733,6.567,5.733Zm-.625,1.2,4.9,3.8-4.9,4.378Zm5.577,4.17h3.179l5,4.482H18.015ZM6.7,33.1a3.025,3.025,0,0,1-3.023-3.023V2.815l1.772-1.72L7.591,3.179,9.728,1.095l2.137,2.085L14,1.095l2.137,2.085,2.137-2.085,2.137,2.085L22.55,1.095l2.137,2.085,2.137-2.085L28.6,2.815V9.226L24.843,5.942a.473.473,0,0,0-.521,0l-7.61,6.619h0a.315.315,0,0,0-.156.313v9.851a.356.356,0,0,0,.365.365H28.492v5.681H10.145l-.573.1.1.417a4.023,4.023,0,0,1,.1.782A3.1,3.1,0,0,1,6.7,33.1Zm23.767,0H9a3.778,3.778,0,0,0,1.512-3.075,1.955,1.955,0,0,0-.052-.521H32.974v.834A2.541,2.541,0,0,1,30.472,33.1Z" transform="translate(-2.9)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1476" data-name="Rectangle 1476" width="1.057" height="1.057" transform="translate(20.245 20.468)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    <rect id="Rectangle_1477" data-name="Rectangle 1477" width="1.057" height="1.057" transform="translate(21.897 20.468)" fill="#fff" stroke="#fff" strokeWidth="0.5"/>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <p className="h6 text-center mb-0">Print Media</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="publish_col">
                                                <Link to={'/home'} className="card card-custom gutter-b bg-primary text-decoration-none justify-content-center border-0 publish_btn_">
                                                    <div className="card-body flex-column block-center flex-grow-0 p-2">
                                                        <span className="svg-icon mb-2 w-100 block-center">
                                                            <svg id="noun_ads_1775264" xmlns="http://www.w3.org/2000/svg" width="48.013" height="33.827" viewBox="0 0 48.013 33.827">
                                                                <g id="Group_7230" data-name="Group 7230" transform="translate(0 0)">
                                                                    <path id="Path_10119" data-name="Path 10119" d="M42.952,971.37a1.061,1.061,0,0,0-.17.034l-28.26,8.148a10.194,10.194,0,0,0-5.846,1.79,5.549,5.549,0,0,0,0,9.495,10.01,10.01,0,0,0,5.062,1.773l2.659,11.728a1.125,1.125,0,0,0,1.057.853h6a1.142,1.142,0,0,0,1.057-1.381l-2.369-8.983,20.641,5.949a1.144,1.144,0,0,0,1.4-1.04V972.461a1.138,1.138,0,0,0-1.227-1.091ZM42,973.909v24.359l-2.182-.631v-23.1Zm10.261.17a1.094,1.094,0,0,0-.477.171l-4.363,2.727a1.095,1.095,0,1,0,1.159,1.858l4.363-2.728a1.091,1.091,0,0,0-.682-2.028Zm-14.624,1.091v21.836l-21.817-6.29v-9.256Zm-24.067,6.716v8.4a7.925,7.925,0,0,1-3.613-1.227,3.382,3.382,0,0,1,0-5.949A7.923,7.923,0,0,1,13.568,981.887ZM47.9,984.461a1.092,1.092,0,1,0,.1,2.182h4.909a1.091,1.091,0,1,0,0-2.182H47.9Zm.051,7.62a1.091,1.091,0,0,0-.528,2.029l4.363,2.727a1.1,1.1,0,0,0,1.159-1.858l-4.363-2.727A1.1,1.1,0,0,0,47.946,992.081Zm-31.89.989,3.647,1.04,2.335,8.9H18.323Z" transform="translate(-6 -971.362)" fill="#fff"/>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <p className="h6 text-center mb-0">Social Ads</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default Home;