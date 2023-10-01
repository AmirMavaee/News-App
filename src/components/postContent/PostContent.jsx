/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../features/Articles/ArticlesSlice";

import Layout from "../layout/Layout";
import PostChild from "../post/PostChild";

function PostContent() {
  const dispatch = useDispatch();
  const { article } = useSelector((state) => state.article);
  const { title } = useParams();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);


  if ((article.length && article[0].Type !== "everything") || !article.length)
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
            color: "#FFF",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            backgroundColor: "rgb(33, 37, 41)",
          }}
        >
          Loading ...
        </Box>
      </div>
    );
  return (
    <Layout>
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
        {article.map(
          (item, index) =>
            item.title.includes(title) && (
              <div key={index}>
                <PostChild data={item} />
              </div>
            )
        )}
      </Box>
    </Layout>
  );
}

export default PostContent;
