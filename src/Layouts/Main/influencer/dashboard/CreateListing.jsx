import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import { edit } from "../../../../Constants/Images";
import { Link } from "react-router-dom";

function CreateListing(props) {

  console.log(props.link,'pppppp')

  return (
    <>
      <div
        className="transactions-logo"
        style={{ margin: "0px AUTO 26px auto" }}
      >
        <img src={edit} />
      </div>

      <div className="transactions-title">
        It appears you don't have any listings
      </div>

      <div className="transactions-title-2">
        Create a listing today and show the world what you can do.
      </div>
      
      <Link to={props.link ? `/${props.link}` : '/'}> 
        <div className="transactions-btn">Ok, Lets do this</div>
      </Link>
    </>
  );
}

export default CreateListing;
