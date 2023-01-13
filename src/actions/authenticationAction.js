import axios from "axios";
import { encode } from "js-base64";
import {
  loginUrl,
} from "./api";

export const LOGIN = (data) => {
  const formData = new FormData();
  formData.append("username", data.email);
  formData.append("password", data.password);
  return axios.post(loginUrl, formData);
};
