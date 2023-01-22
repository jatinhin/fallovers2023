import axios from "axios";
import { encode } from "js-base64";
import {
  homepageData,
  loginUrl,
} from "./api";



export const GET_HOMEPAGE_DATA = () => {
  return axios.post(homepageData);
};

export const LOGIN = (data) => {
  const formData = new FormData();
  formData.append("username", data.email);
  formData.append("password", data.password);
  return axios.post(loginUrl, formData);
};
