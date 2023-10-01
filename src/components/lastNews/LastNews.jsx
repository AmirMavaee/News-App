import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticles } from "../../features/Articles/ArticlesSlice";
import {
  filterDate,
  getSpecificData,
  shortenString,
} from "../../helpers/functions";
import "./LastNews.css";

function LastNews() {
  const dispatch = useDispatch();
  let { article } = useSelector((state) => state.article);
  let { title } = useSelector((state) => state.title);

  if (title === undefined) {
    title = "everything";
  }

  useEffect(() => {
    dispatch(fetchArticles(title));
  }, []);

  console.log(article);

  article = getSpecificData(article, 0, 4);

  let value = 0;
  const imgFunc = () => {
    const Title = shortenString(article[value].title, 4);

    const image = (
      <div className="article-image-container">
        <img src={article[value].urlToImage} />
        <Link to={`/Blog/${Title}`}>
          <h1>{Title}</h1>
        </Link>
        <p>{filterDate(article[value].publishedAt)}</p>
      </div>
    );
    value++;
    return image;
  };

  if ((article.length && article[0].Type !== title) || !article.length) {
    document.body.style.overflow = "hidden";
    return (
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            color:"#FFF",
            top: "-114px",
            right: "0",
            left: "0",
            bottom: "0",
            backgroundColor:"rgb(33, 37, 41)"
          }}
        >
          Loading ...
        </Box>
      </div>
    );
  }

  document.body.style.overflow = "auto";
  return (
    <Box
      sx={{
        width: {
          xs: "90%",
          md: 950,
          lg: 1200,
        },
        margin: "0 auto",
      }}
    >
      <Grid container spacing={2} sx={{ marginBottom: "5rem" }}>
        <Grid item xs={12} md={6} sx={{ height: { xs: "100%", md: "550px" } }}>
          {article.length > 0 && imgFunc()}
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ height: { xs: "100%", md: "275px" } }}>
              {article.length > 0 && imgFunc()}
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ height: { xs: "100%", sm: "275px" } }}
            >
              {article.length > 0 && imgFunc()}
            </Grid>
            <Grid item xs={12} sm={6} sx={{ height: "275px" }}>
              {article.length > 0 && imgFunc()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LastNews;
