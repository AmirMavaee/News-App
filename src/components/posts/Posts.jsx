import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchArticles } from "../../features/Articles/ArticlesSlice";
import { getSpecificData } from "../../helpers/functions";
import Layout from "../layout/Layout";
import PageTitle from "../shared/PageTitle";
import Category from "../shared/Category";
import Related from "../shared/Related";
import author from "../../assets/author.jpg";
import PostChild from "../post/PostChild";

function Posts() {
  const { Post } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let { article } = useSelector((state) => state.article);
  console.log(article);

  const PostValue = Post.split("@");

  useEffect(() => {
    dispatch(fetchArticles(PostValue[0]));
  }, [PostValue[0]]);

  const related = getSpecificData(
    article,
    parseInt(PostValue[1]),
    parseInt(PostValue[1]) + 5
  );
  article = getSpecificData(article, 0, PostValue[1]);

  if (article[0] === "No Article") {
    navigate("/404");
  } else if (
    (article.length && article[0].Type !== PostValue[0]) || !article.length
  )
    return (
      <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
        <Box
          sx={{
            backgroundColor: "rgb(33, 37, 41)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            color: "#fff",
          }}
        >
          Loading ...
        </Box>
      </Box>
    );

  return (
    <Layout>
      <PageTitle title={PostValue[0]} />
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
        <Grid container spacing={4} sx={{ marginTop: "3rem" }}>
          <Grid item xs={12} md={8}>
            {article.map((item, index) => (
              <PostChild key={index} data={item} />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  border: "1px solid #3c3c40",
                  padding: "3rem 1rem",
                  marginLeft: "auto",
                  color: "#fff",
                  backgroundColor: "#3c3c40",
                  textAlign: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <img
                  src={author}
                  className="author-img"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  component="p"
                  variant="p"
                  sx={{ fontSize: "1.5rem", marginTop: "1rem" }}
                >
                  Amir Mavaee
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    fontSize: "1rem",
                    color: "#cbcbcb",
                    margin: "1.5rem 0",
                  }}
                >
                  Hi! beautiful people. I`m an authtor of this blog. Read our
                  post - stay with us
                </Typography>
                <Link to="/ContactUs">
                  <Button variant="contained">Contact To Me</Button>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
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
                <Related data={related} />
              </Grid>
              <Grid
                xs={12}
                item
                sx={{
                  border: "1px solid #3c3c40",
                  padding: "2rem",
                  margin: "20px 0",
                  color: "#fff",
                  backgroundColor: "#3756f7",
                }}
              >
                <Typography
                  component="p"
                  variant="p"
                  sx={{ fontSize: "2.1rem" }}
                >
                  How We Can Help You!
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "300",
                    margin: "1.5rem 0",
                    lineHeight: "1.5",
                  }}
                >
                  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo viverra maecenas accumsan lacus vel
                  facilisis.
                </Typography>
                <Link to="/ContactUs">
                  <Button
                    variant="outlined"
                    sx={{ backgroundColor: "#2439a4", color: "#fff" }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Posts;
