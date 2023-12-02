import React from "react";
import { useState, useEffect } from "react";
import { GET_CASTING_CARDS} from "../../actions/authenticationAction";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import Header from "./include/Header";
import FilterForm from "./common/FilterForm";
import NewCastingCalls from "./influencer/NewCastingCall";
import Scrolling from "./brand/parts/Scrolling";
import Footer from "./include/Footer";
import { useNavigate } from "react-router-dom";

function Casting() {

const itemsPerPage = 20;
const [loading, setLoading] = useState(true);
const [CardsData, setCardsData] = useState([]);
const [page, setPage] = useState(1);
const [pageCount, setPageCount] = useState(1);
const [total, setTotal] = useState();
const [categories, setCategories] = useState("")
const [filterForm, setfilterForm] = useState(false);
const navigate = useNavigate();
console.log("CardsData", CardsData);
console.log("page", page);
console.log("pageCount", pageCount);
const handlecardClicks=(id)=>{
  navigate(`/casting-call/${id}`);
}
const changePage = ({ selected }) => {
  setPage(selected+1);
  console.log("pagevalue",page)
  getdata(selected + 1);
window.scrollTo(200, 200);

};

 const getdata = async(PageNumber=null)=> {
    try {
      const response = await GET_CASTING_CARDS(PageNumber||page);
      setCardsData(response.data.data);
      setTotal(response.data.total);
      setCategories(response.data.category);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false); 
    }
  }

  
  useEffect(() => {
    // Only call getdata when the page or category changes
    getdata();
  }, []);
  useEffect(() => {
    const CardsDatacount = Math.ceil(total / itemsPerPage);
    setPageCount(CardsDatacount);
  }, [total]);
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  // const [dropdown, setDropdown] = useState(false);
  // const [activeForm, setactiveForm] = useState(0);
  // const [submitStatus, setsubmitStatus] = useState(0);



  


  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="popular-courses circle  carousel-shadow default-padding default-padding-20">
            <div className="container">
              <div className="row">
                <Scrolling categories={categories} />
                <div className="col-md-12">
                  <div style={{ clear: "both" }}></div>
                  <div
                    className="seperator seperator-top col-md-12"
                    style={{ marginTop: "22px" }}
                  >
                    <span className="border"></span>
                  </div>
                </div>

                <div className="col-md-12 heading-left">
                  <h2
                    style={{
                      color: "#4E76C9",
                      marginTop: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    All Casting Calls
                  </h2>
                </div>

                <div className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video trading-video">
                  <div className="col-md-12">
                    <div>
                      <NewCastingCalls
                        handlecardClicks={handlecardClicks}
                        loading={loading}
                        CardsData={CardsData}
                        pageCount={pageCount}
                        changePage={changePage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>

        <FilterForm filterForm={filterForm} setfilterForm={setfilterForm} />
      </ParallaxProvider>
    </>
  );
}

export default Casting;
