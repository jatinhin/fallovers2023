import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import WhiteBtn from "../utils/WhiteBtn";
import SearchIcon from "@mui/icons-material/Search";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import one from "../../assets/one.png";
const Reacttable = ({ data }) => {
  const columns = [
    {
      name: "Compaign Name",
      cell: (row) => (
        <Stack direction={"row"} gap={2}>
          <img
            src={one} // Replace 'imageUrl' with the actual property that contains the image URL in your data
            style={{ width: "50px", height: "50px" }} // Adjust the width and height as needed
          />
          <Stack alignItems={"center"} justifyContent={"center"}>
            {row.name}
          </Stack>
        </Stack>
      ),
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <Stack
        direction={"row"}
          width={"55px"}
          height={"16px"}
          bgcolor={row.color}
          color={"white"}
          borderRadius={"6px"}
        >
          <ControlPointIcon sx={{p:"2px"}} />
          <Typography color={"white"}>{row.Status}</Typography>
        </Stack>
      ),
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Find Creators",
      selector: (row) => row.Find,
      sortable: true,
    },
    {
      name: "CC interested",
      selector: (row) => row.cc,
      sortable: true,
    },
    {
      name: "proposals accepted",
      selector: (row) => row.proposal,
      sortable: true,
    },
    {
      name: "Investment",
      selector: (row) => row.investment,
      sortable: true,
    },
  ];
  
  const customStyles = {
    head: {
      style: {
        fontWeight: "bold",
        color: "grey",
        textTransform: "uppercase",
        fontSize: "12px",
      },
    },
    cells: {
      style: {
        fontSize: "14px", // Set the font size for cells
        fontWeight: "normal", // Set the font weight for cells
      },
    },
  };
  const [records, setrecords] = useState(data);
  const handleFilter = (event) => {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setrecords(newData);
  };
  return (
    <Stack gap={4}>
      <Stack direction={"row"} gap={2}>
        <Stack position={"relative"} alignItems={"center"} direction={"row"}>
          <Stack position={"absolute"} p={1} color={"grey"}>
            <SearchIcon />
          </Stack>
          <input
            type="text"
            placeholder="Search by Campaigns"
            onChange={handleFilter}
            style={{
              width: "680px",
              backgroundColor: "#F8F8FF",
              border: "1px solid #DFD7FE",
              paddingLeft: "2.5rem",
              borderRadius: "4px",
            }}
          ></input>
        </Stack>
        <WhiteBtn
          sx={{
            width: "160px",
            bgcolor: "#603AFA",
            color: "white",
            borderRadius: "4px",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#603AFA",
            },
          }}
        >
          <ControlPointIcon sx={{ pr: "3px" }} /> Post A Campaign
        </WhiteBtn>
      </Stack>
      <DataTable columns={columns} data={records} customStyles={customStyles} />
    </Stack>
  );
};

export default Reacttable;
