/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  filterDate,
  removeEmailFromAuthorName,
  shortenString,
} from "../../helpers/functions";
import "./Shared.css";

function Shared({ item, article }) {
  return (
    <div className="post-item">
      <div
        style={{
          overflow: "hidden",
          display: "table",
          borderRadius: "10px",
          height: "230px",
          width: "100%",
        }}
      >
        <img
          src={item.urlToImage}
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "230px",
            borderRadius: "10px",
            display: "table-row",
            transition: ".3s",
          }}
        />
      </div>
      <Link to={`/Blog/${item.title}`} style={{ textDecoration: "none" }}>
        <Typography component="p" variant="p" className="title">
          {shortenString(item.title, 6)}
        </Typography>
      </Link>
      <Typography
        component="p"
        variant="p"
        sx={{
          fontWeight: "100",
          fontSize: "1.1rem",
          color: "#003aae",
          margin: "1rem 0",
        }}
      >
        By {removeEmailFromAuthorName(item.author)}
        <span className="date">{filterDate(item.publishedAt)}</span>
      </Typography>
      {article.length == 6 && (
        <Typography
          component="p"
          variant="p"
          sx={{ fontWeight: "300", fontSize: "1.2rem", color: "#fff" }}
          dangerouslySetInnerHTML={{ __html: shortenString(item.content, 25) }}
        ></Typography>
      )}
    </div>
  );
}

export default Shared;
