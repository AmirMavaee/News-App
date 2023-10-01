import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../features/Articles/ArticlesSlice";
import {
  getSpecificData,
} from "../../helpers/functions";
import "./HighLights.css";
import Shared from "../shared/Shared";
import comestic from "../../assets/comestic.jpg";
import Category from "../shared/Category";
import Related from "../shared/Related";

function HighLights() {
  const dispatch = useDispatch();
  let { article } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  const related = getSpecificData(article, 13, 18);
  article = getSpecificData(article, 7, 13);

  return (
    <>
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
        <Typography
          component="p"
          variant="p"
          className="header-text"
          sx={{ fontSize: { xs: "1.8rem", sm: "2rem" }, color: "#fff" }}
        >
          Today&apos;s Top Highlights
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={8}>
            <Grid
              container
              spacing={2}
              sx={{ border: "1px solid #3c3c40;", paddingRight: "16px" }}
            >
              {article.map((item, index) => (
                <React.Fragment key={index}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ mb: "2rem", pb: "1rem" }}
                    className="post"
                  >
                    <Shared item={item} article={article} />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Grid container spacing={2}>
              <Grid
                xs={12}
                item
                sx={{
                  border: "1px solid #3c3c40",
                  padding: "16px",
                  marginLeft: "auto",
                  color: "#fff",
                }}
              >
                <Category />
              </Grid>
              <Grid
                xs={12}
                item
                sx={{
                  border: "1px solid #3c3c40",
                  padding: "16px",
                  margin: "20px 0",
                }}
              >
                <Related data={related}/>
              </Grid>
              <Grid xs={12} item style={{ padding: "0" }}>
                <div className="comestic-img-container">
                  <img
                    src={comestic}
                    style={{ width: "100%", height: "400px" }}
                    alt="Comestic"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HighLights;
