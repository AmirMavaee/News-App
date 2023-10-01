import { Box, Button } from "@mui/material";
import Layout from "../layout/Layout";
import Error404 from "../../assets/error-404.png";
import PageTitle from "../shared/PageTitle";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";
import { getEndPointOfURL } from "../../helpers/functions";

function NotFoundPage() {
  const title = getEndPointOfURL(window.location.href);
  return (
    <Layout>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PageTitle title={title} />
        <Box component="img" src={Error404} className="image-404"></Box>
        <div className="text-container">
          <h1>Oops! Page Not Found!</h1>
          <h2>
            We’re sorry but we can’t seem to find the page you requested. This
            might be because you have typed the web address incorrectly.
          </h2>
        </div>
        <Link to="/">
          <Button variant="contained" className="gohome">
            Back To Home
          </Button>
        </Link>
      </Box>
    </Layout>
  );
}

export default NotFoundPage;
