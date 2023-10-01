import { Typography } from "@mui/material";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Category() {
  const category = [
    "Lifestyle",
    "Inspiration",
    "Fashion",
    "Photography",
    "Travel",
    "Business",
  ];
  const valueNumber = ["10", "08", "13", "15", "17", "14"];
  return (
    <>
      <Typography
        className="post-category"
        component="h2"
        variant="p"
        sx={{
          fontWeight: "300",
          position: "relative",
          paddingBottom: "1.3rem",
        }}
      >
        Post Categories
      </Typography>
      <ul>
        {category.map((item, index) => (
          <React.Fragment key={index}>
            <Link to={`/${item}@${valueNumber[index]}`} style={{ textDecoration: "none" , color:"#fff" }}>
              <li className="category-item">
                <MdKeyboardArrowRight />
                <span style={{ flexGrow: "1" }}>{item}</span>
                <span>{valueNumber[index]}</span>
              </li>
            </Link>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default Category;
