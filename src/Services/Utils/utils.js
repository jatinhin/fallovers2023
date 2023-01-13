import { COUNTRY_LIST_API } from "../../Api";

export const countryPickerFun = () =>{
    return fetch(COUNTRY_LIST_API).then(res => res.json())
}
