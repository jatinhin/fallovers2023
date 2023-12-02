import axios from "axios";
import {
  BASE_URL,
  getCastingCalls,
  getCreatearProfile,
  getMarketplaceDetails,
  getcastingCalls,
  getcreateDetail,
  getcreateListing,
  getdashboardHome,
  getfilterListing,
  getmarketPlace,
  getmarketPlaceCards,
  homepageData,
  loginUrl,
  searchData,
} from "./api";
import { ERROR, SUCCESS } from "../Helpers";
// import { Navigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import { USER_AUTHENTICATED_LOGIN, DUMMY_DATA } from "../redux/reducersKeys";
//import { logUser } from "../actions/index";

export const GET_CATEGORY = () => {
  return axios.post(homepageData);
};

export const GET_HOMEPAGE_DATA = () => {
  return axios.post(homepageData);
};

export const storeDemoData = (param) => { console.log('bbbsss')
  return (dispatch) =>{
      dispatch({
        type: DUMMY_DATA,
        payload: "dsfsdfsd",
      });
  }
};

export const GET_CREATE_LISTING = (data) => {
  const formData = new FormData();
  formData.append("filter", data);
  return axios.post(getcreateListing, formData);
};

export const GET_CREATE_DETAIL = (id) => {
  const formData = new FormData();
  formData.append("filter", "");

  return axios.post(`${(getcreateDetail, formData)}/${id}`);
};

export const GET_CREATE_PROFILE = (id) => {
  return axios.post(`${getCreatearProfile}/${id}`);
};

export const GET_MARKET_PLACE = (data) => {
  const formData = new FormData();
  formData.append("filter", data);
  return axios.post(getmarketPlace, formData);
};

export const GET_FILTER_LISTING = () => {
  return axios.post(getfilterListing);
};

export const GET_CASTING_CALLS = () => {
  return axios.post(getcastingCalls);
};

export const GET_SEARCH_DATA = () => {
  return axios.post(searchData);
};

export const LOGOUT = (dispatch, navigate) => {
  dispatch({
    type: USER_AUTHENTICATED_LOGIN,
    payload: "",
  });

  navigate("/");
};

export const LOGIN = (data, setIsloading, dispatch, navigate) => {
  const formData = new FormData();
  formData.append("userEmail", data.loginEmail);
  formData.append("userPassword", data.loginPassword);
  formData.append("loginStatus", 1);

  axios.post(loginUrl, formData).then((response) => {
    setIsloading(false);
    if (response.status === 200) {
      if (response.data.status === true) {
        localStorage.setItem("user", response.data.data.user);
        dispatch({
          type: USER_AUTHENTICATED_LOGIN,
          payload: response.data.data.user,
        });

        navigate(`/${BASE_URL}/dashboard`);
        SUCCESS(response.data.msg);
      } else {
        ERROR(response.data.msg);
      }
    } else {
      ERROR("Not valid");
    }
  });
};
/////////////////////////////////////////////////
export const GET_MARKET_CARDS = (page) => {
  return axios.post(getmarketPlaceCards,{
    page: page,
  });
};
export const GET_CASTING_CARDS = async (page) => {
  return axios.post(getCastingCalls,{
    page: page,
  });
  
};
export const GET_MARKETPLACE_DETAILS = () => {
  return axios.post(getMarketplaceDetails);
};
export const GET_DASHBOARD_HOME=()=>{
  return axios.post(getdashboardHome);
}