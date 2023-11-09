import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA } from "../../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { c1 } from "../../../Constants/Images";
import { useRef } from "react";

function Networks(props) {
  const {
    formState: { errors },
  } = useForm();

  const [socialMedia, setsocialMedia] = useState([]);

  useEffect(() => {
    // setisLoading(true);
    GET_HOMEPAGE_DATA().then((res) => {
      const { data } = res;
      if (res.status == 200) {
        console.log(data);
        setsocialMedia(data.socialmedia);
      }
    });
  }, []);

  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <>
      {socialMedia && socialMedia.length > 0 ? (
        <div className={`collab-by-platform ${props.title ? "section-margin" : ''}`}>
          <div className="container">
            <div className="col-md-12 heading-center">
              <h2>{props.title}</h2>
            </div>

            <div className="clear" />
            <div
              className="row callab-platform margin-0"
              style={{ padding: "18px" }}
            >
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 5,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {socialMedia.map(() => {
                  return (
                    <div
                      className="col-md-12 icon carousel-item"
                      style={{ padding: "0px", border: "0px" }}
                    >
                      <img src={c1} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Networks;
