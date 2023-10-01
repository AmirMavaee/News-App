/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { CgCalendarDates } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { filterDate, removeEmailFromAuthorName, shortenString } from "../../helpers/functions";

function PostChild({ data }) {
  return (
    <>
      <img
        src={data.urlToImage}
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />
      <p
        className="post-date"
        style={{
          color: "#fff",
          display: "flex",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <CiUser style={{ fontSize: "18px", marginRight: ".5rem" }} />
        <span
          style={{
            fontSize: "20px",
            fontWeight: "100",
            marginRight: "2rem",
            color: "#3756f7",
          }}
        >
          By {removeEmailFromAuthorName(data.author)}
        </span>
        <CgCalendarDates style={{ fontSize: "18px", marginRight: ".5rem" }} />
        <span
          style={{
            fontSize: "20px",
            fontWeight: "100",
            color: "#3756f7",
          }}
        >
          {filterDate(data.publishedAt)}
        </span>
      </p>
      <h1
        style={{
          color: "#fff",
          fontSize: "40px",
          fontWeight: "300",
          margin: "2rem 0",
        }}
        dangerouslySetInnerHTML={{
          __html: shortenString(data.title, 10),
        }}
      ></h1>
      <p
        style={{
          color: "#ddd",
          fontSize: "25px",
          marginBottom: "1.5rem",
          lineHeight: "1.7",
        }}
        dangerouslySetInnerHTML={{
          __html: shortenString(data.content, 100),
        }}
      ></p>
      <a href={data.url}>
        <Button variant="contained" sx={{ marginBottom: "5rem" }}>
          Read More
        </Button>
      </a>
    </>
  );
}

export default PostChild;
