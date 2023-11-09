import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import Header from "../include/Header";

function Castings() {
  const [castingCalls, setCastingCalls] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Adjust this to your preferred number of items per page

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fallovers.com/fallovers-api/api/v1/get-casting-calls?_page=${currentPage}&limit=${itemsPerPage}`,
        {
          method: "POST", // Change the method to POST
          headers: {
            "Content-Type": "application/json", // Set the content type if needed
            // Add any other headers as required (e.g., authentication headers)
          },
          body: JSON.stringify({}), // Include any request payload if needed
        }
      );
      const data = await response.json();
      setCastingCalls(data.castingCalls.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    // Fetch data from the API when the component mounts and whenever currentPage changes.
    fetchData();
  }, [currentPage]);


  return (
    <div>
        <Header/>
      {/* Render your casting calls data here */}
      <Stack direction={"row"}>
        {castingCalls.map((call, index) => (
          <Stack
            key={index}
            gap={2}
            mt={2}
            bgcolor={"white"}
            width={"235px"}
            borderRadius={"15px"}
            border={"1px solid lightgrey"}
          >
            <Stack direction={"row"} gap={2} pl={2.5} pt={2}>
              <Box width={"32px"} height={"30px"} sx={{ borderRadius: "50%" }}>
                <img
                  alt=""
                  style={{
                    width: "32px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "1px solid grey",
                  }}
                />
              </Box>
              <Stack>
                <Typography fontWeight={"bold"} color={"black"}>
                  {call.user_name}
                </Typography>
                <Typography>{call.campaign_title}</Typography>
              </Stack>
            </Stack>
            <Box>
              <img
                alt=""
                style={{ width: "235px", height: "172px" }}
              />
            </Box>
            <Stack direction={"row"} gap={8} pl={2}>
              <Box>
                <svg
                  width="84"
                  height="29"
                  viewBox="0 0 84 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.626302"
                    y="0.398916"
                    width="82.8465"
                    height="27.6283"
                    rx="13.8141"
                    fill="#E2E2E2"
                  />
                  <path
                    d="M16.5318 8.35022V10.0556"
                    stroke="#292D32"
                    stroke-width="0.8527"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.077 8.35022V10.0556"
                    stroke="#292D32"
                    stroke-width="0.8527"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.9728 12.3797H23.6366"
                    stroke="#292D32"
                    stroke-width="0.8527"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.9204 12.045V16.8771C23.9204 18.5825 23.0677 19.7194 21.0781 19.7194H16.5304C14.5408 19.7194 13.6881 18.5825 13.6881 16.8771V12.045C13.6881 10.3396 14.5408 9.20267 16.5304 9.20267H21.0781C23.0677 9.20267 23.9204 10.3396 23.9204 12.045Z"
                    stroke="#292D32"
                    stroke-width="0.8527"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.9032 15.0008H20.9083"
                    stroke="#292D32"
                    stroke-width="1.13693"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.9032 16.7074H20.9083"
                    stroke="#292D32"
                    stroke-width="1.13693"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.8025 15.0008H18.8076"
                    stroke="#292D32"
                    stroke-width="1.13693"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.8025 16.7074H18.8076"
                    stroke="#292D32"
                    stroke-width="1.13693"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6983 15.0008H16.7035"
                    stroke="#292D32"
                    stroke-width="1.13693"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6983 16.7074H16.7035"
                    stroke="#292D32"
                    stroke-width="1.13693"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M36.4629 10.5565C37.7787 10.5565 38.7529 10.9794 39.3855 11.825C39.8793 12.4846 40.1263 13.3286 40.1263 14.3569C40.1263 15.4698 39.8438 16.3949 39.2789 17.1323C38.6159 17.9983 37.6705 18.4313 36.4426 18.4313C35.2959 18.4313 34.3944 18.0524 33.7382 17.2947C33.153 16.5641 32.8604 15.6406 32.8604 14.5243C32.8604 13.5163 33.1107 12.6538 33.6113 11.9366C34.254 11.0166 35.2046 10.5565 36.4629 10.5565ZM36.5644 17.5281C37.454 17.5281 38.0967 17.2101 38.4925 16.5742C38.8916 15.9349 39.0912 15.2009 39.0912 14.3721C39.0912 13.496 38.8612 12.7908 38.4011 12.2563C37.9445 11.7218 37.3187 11.4546 36.5238 11.4546C35.7525 11.4546 35.1234 11.7202 34.6363 12.2512C34.1492 12.7789 33.9056 13.5586 33.9056 14.5903C33.9056 15.4157 34.1137 16.1125 34.5297 16.6808C34.9492 17.2456 35.6274 17.5281 36.5644 17.5281ZM41.2121 12.7789H42.0797V13.5501C42.3368 13.2322 42.6091 13.0039 42.8966 12.8652C43.1841 12.7265 43.5038 12.6571 43.8556 12.6571C44.6268 12.6571 45.1477 12.9261 45.4183 13.4639C45.5672 13.7582 45.6416 14.1793 45.6416 14.7273V18.2131H44.7131V14.7882C44.7131 14.4567 44.664 14.1895 44.5659 13.9865C44.4036 13.6482 44.1093 13.4791 43.6831 13.4791C43.4666 13.4791 43.289 13.5011 43.1503 13.5451C42.9 13.6195 42.6801 13.7683 42.4907 13.9916C42.3385 14.1709 42.2387 14.3569 42.1913 14.5497C42.1474 14.7391 42.1254 15.0114 42.1254 15.3666V18.2131H41.2121V12.7789ZM48.9143 12.6825C49.3405 12.6825 49.7126 12.7874 50.0305 12.9971C50.203 13.1155 50.3789 13.288 50.5582 13.5146V12.8297H51.4005V17.7716C51.4005 18.4617 51.299 19.0063 51.0961 19.4054C50.7172 20.1429 50.0018 20.5116 48.9498 20.5116C48.3646 20.5116 47.8724 20.3796 47.4733 20.1158C47.0741 19.8553 46.8509 19.446 46.8035 18.8879H47.7321C47.776 19.1315 47.864 19.3192 47.9959 19.4511C48.2022 19.6541 48.527 19.7555 48.9701 19.7555C49.6703 19.7555 50.1286 19.5086 50.3451 19.0148C50.4737 18.7238 50.5329 18.2046 50.5227 17.4571C50.34 17.7344 50.1202 17.9408 49.8631 18.0761C49.606 18.2114 49.2661 18.279 48.8432 18.279C48.2547 18.279 47.7388 18.071 47.2957 17.6549C46.856 17.2355 46.6361 16.5438 46.6361 15.5797C46.6361 14.6698 46.8576 13.9594 47.3008 13.4487C47.7473 12.9379 48.2851 12.6825 48.9143 12.6825ZM50.5582 15.4732C50.5582 14.8 50.4195 14.3011 50.1422 13.9764C49.8648 13.6516 49.5113 13.4893 49.0817 13.4893C48.439 13.4893 47.9993 13.7903 47.7625 14.3924C47.6373 14.7138 47.5748 15.1349 47.5748 15.6558C47.5748 16.2681 47.6982 16.7349 47.9452 17.0562C48.1955 17.3742 48.5303 17.5332 48.9498 17.5332C49.606 17.5332 50.0677 17.2372 50.335 16.6452C50.4838 16.3104 50.5582 15.9197 50.5582 15.4732ZM54.937 17.6245C55.5425 17.6245 55.9569 17.3962 56.1801 16.9395C56.4068 16.4795 56.5201 15.9687 56.5201 15.4072C56.5201 14.8998 56.4389 14.4871 56.2765 14.1692C56.0194 13.6685 55.5763 13.4182 54.9472 13.4182C54.389 13.4182 53.9831 13.6313 53.7294 14.0575C53.4757 14.4837 53.3489 14.9979 53.3489 15.6C53.3489 16.1784 53.4757 16.6605 53.7294 17.0461C53.9831 17.4317 54.3856 17.6245 54.937 17.6245ZM54.9725 12.6216C55.6727 12.6216 56.2647 12.855 56.7484 13.3218C57.2321 13.7886 57.474 14.4753 57.474 15.3818C57.474 16.2579 57.2609 16.9818 56.8347 17.5535C56.4084 18.1251 55.7471 18.411 54.8508 18.411C54.1032 18.411 53.5095 18.159 53.0698 17.6549C52.6301 17.1476 52.4102 16.4676 52.4102 15.6152C52.4102 14.7019 52.6419 13.9747 53.1053 13.4334C53.5687 12.8922 54.1911 12.6216 54.9725 12.6216ZM58.5649 12.8043H59.4934V18.2131H58.5649V12.8043ZM58.5649 10.7595H59.4934V11.7946H58.5649V10.7595ZM60.8786 12.7789H61.7462V13.5501C62.0033 13.2322 62.2756 13.0039 62.5631 12.8652C62.8506 12.7265 63.1703 12.6571 63.5221 12.6571C64.2933 12.6571 64.8142 12.9261 65.0848 13.4639C65.2337 13.7582 65.3081 14.1793 65.3081 14.7273V18.2131H64.3796V14.7882C64.3796 14.4567 64.3305 14.1895 64.2324 13.9865C64.0701 13.6482 63.7758 13.4791 63.3496 13.4791C63.1331 13.4791 62.9555 13.5011 62.8168 13.5451C62.5665 13.6195 62.3466 13.7683 62.1572 13.9916C62.005 14.1709 61.9052 14.3569 61.8578 14.5497C61.8139 14.7391 61.7919 15.0114 61.7919 15.3666V18.2131H60.8786V12.7789ZM68.5808 12.6825C69.007 12.6825 69.3791 12.7874 69.697 12.9971C69.8695 13.1155 70.0454 13.288 70.2247 13.5146V12.8297H71.067V17.7716C71.067 18.4617 70.9655 19.0063 70.7626 19.4054C70.3837 20.1429 69.6683 20.5116 68.6163 20.5116C68.0311 20.5116 67.5389 20.3796 67.1398 20.1158C66.7406 19.8553 66.5174 19.446 66.47 18.8879H67.3985C67.4425 19.1315 67.5305 19.3192 67.6624 19.4511C67.8687 19.6541 68.1935 19.7555 68.6366 19.7555C69.3368 19.7555 69.7951 19.5086 70.0116 19.0148C70.1402 18.7238 70.1993 18.2046 70.1892 17.4571C70.0065 17.7344 69.7867 17.9408 69.5296 18.0761C69.2725 18.2114 68.9326 18.279 68.5097 18.279C67.9212 18.279 67.4053 18.071 66.9622 17.6549C66.5225 17.2355 66.3026 16.5438 66.3026 15.5797C66.3026 14.6698 66.5241 13.9594 66.9673 13.4487C67.4138 12.9379 67.9516 12.6825 68.5808 12.6825ZM70.2247 15.4732C70.2247 14.8 70.086 14.3011 69.8087 13.9764C69.5313 13.6516 69.1778 13.4893 68.7482 13.4893C68.1055 13.4893 67.6658 13.7903 67.429 14.3924C67.3038 14.7138 67.2413 15.1349 67.2413 15.6558C67.2413 16.2681 67.3647 16.7349 67.6117 17.0562C67.862 17.3742 68.1968 17.5332 68.6163 17.5332C69.2725 17.5332 69.7342 17.2372 70.0015 16.6452C70.1503 16.3104 70.2247 15.9197 70.2247 15.4732Z"
                    fill="#2D2D2D"
                  />
                  <rect
                    x="0.626302"
                    y="0.398916"
                    width="82.8465"
                    height="27.6283"
                    rx="13.8141"
                    stroke="#E2E2E2"
                    stroke-width="0.648966"
                  />
                </svg>
              </Box>
              <Stack direction={"row"} gap={1}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.12356"
                    y="1.14421"
                    width="26.442"
                    height="25.838"
                    rx="12.919"
                    fill="#F8F8FF"
                  />
                  <path
                    d="M19.629 14.8184C19.629 17.7355 17.2616 20.1029 14.3445 20.1029C11.4275 20.1029 9.06003 17.7355 9.06003 14.8184C9.06003 11.9014 11.4275 9.53391 14.3445 9.53391C17.2616 9.53391 19.629 11.9014 19.629 14.8184Z"
                    stroke="#451DA2"
                    stroke-width="0.905915"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.3448 11.6468V14.6665"
                    stroke="#451DA2"
                    stroke-width="0.905915"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5323 8.0235H16.1559"
                    stroke="#451DA2"
                    stroke-width="0.905915"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="1.12356"
                    y="1.14421"
                    width="26.442"
                    height="25.838"
                    rx="12.919"
                    stroke="#DFD7FE"
                    stroke-width="0.735495"
                  />
                </svg>

                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.458349"
                    y="0.771322"
                    width="26.7648"
                    height="26.5285"
                    rx="13.2642"
                    fill="#EDEDED"
                  />
                  <path
                    d="M11.8447 15.4331C11.8447 16.2064 12.4382 16.8299 13.1755 16.8299H14.6803C15.3218 16.8299 15.8433 16.2844 15.8433 15.6129C15.8433 14.8815 15.5256 14.6237 15.052 14.4559L12.636 13.6166C12.1624 13.4487 11.8447 13.1909 11.8447 12.4595C11.8447 11.7881 12.3662 11.2426 13.0077 11.2426H14.5124C15.2498 11.2426 15.8433 11.866 15.8433 12.6394"
                    stroke="#016918"
                    stroke-width="0.899254"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.8412 10.4388V17.6328"
                    stroke="#016918"
                    stroke-width="0.899254"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.8397 20.0312C17.1506 20.0312 19.8347 17.3472 19.8347 14.0362C19.8347 10.7252 17.1506 8.04117 13.8397 8.04117C10.5287 8.04117 7.84465 10.7252 7.84465 14.0362C7.84465 17.3472 10.5287 20.0312 13.8397 20.0312Z"
                    stroke="#016918"
                    stroke-width="0.899254"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="0.458349"
                    y="0.771322"
                    width="26.7648"
                    height="26.5285"
                    rx="13.2642"
                    stroke="#E2E2E2"
                    stroke-width="0.648966"
                  />
                </svg>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>

      {/* Pagination controls */}
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={castingCalls.length < itemsPerPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Castings;
