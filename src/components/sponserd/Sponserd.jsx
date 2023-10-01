import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../features/Articles/ArticlesSlice";
import { getSpecificData } from "../../helpers/functions";
import Shared from "../shared/Shared";

function Sponserd() {
  const dispatch = useDispatch();
  let { article } = useSelector((state) => state.article);
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  article = getSpecificData(article, 18, 22);
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
          sx={{
            fontSize: { xs: "1.8rem", sm: "2rem" },
            marginTop: "3rem",
            color: "#fff",
          }}
        >
          Sponsored News
        </Typography>
        <Grid container spacing={2}>
          {article.map((item) => (
            <React.Fragment key={item.title}>
              <Grid item xs={12} md={6} lg={3}>
                <Shared item={item} article={article} />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Sponserd;
