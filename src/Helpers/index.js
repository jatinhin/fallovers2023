import { toast } from "react-toastify";


export const SUCCESS=(response) =>{
     toast.success(response, {
        theme: "dark",
        position: "bottom-center",
      });
  }

  export const ERROR=(response) =>{
    toast.error(response, {
       theme: "dark",
       position: "bottom-center",
     });
 }

 export const WARNING=(response) =>{
    toast.warning(response, {
       theme: "dark",
       position: "bottom-center",
     });
 }


