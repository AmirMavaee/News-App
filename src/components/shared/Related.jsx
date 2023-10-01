/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { filterDate, shortenString } from "../../helpers/functions";

function Related({ data }) {
  return (
    <>
      <Typography
        className="related-post"
        component="h2"
        variant="p"
        sx={{
          fontWeight: "300",
          position: "relative",
          paddingBottom: "1.3rem",
          color: "#fff",
        }}
      >
        Related Posts
      </Typography>
      {data.map((item, index) => (
        <>
          <React.Fragment key={index}>
            <div style={{ display: "flex", margin: "25px 0" }}>
              <img
                src={item.urlToImage}
                style={{
                  width: "85px",
                  height: "85px",
                  borderRadius: "7px",
                  marginRight: "1rem",
                }}
              />
              <div>
                <h4
                  style={{
                    fontWeight: "100",
                    marginBottom: ".8rem",
                    color: "#fff",
                  }}
                >
                  {filterDate(item.publishedAt)}
                </h4>
                <Link to={`/Blog/${item.title}`} style={{textDecoration:"none"}}>
                  <p style={{ color: "#fff" }}>
                    {shortenString(item.title, 6)}
                  </p>
                </Link>
              </div>
            </div>
          </React.Fragment>
        </>
      ))}
    </>
  );
}

export default Related;
