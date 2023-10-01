import { Box, Grid, Typography } from "@mui/material";
import BloggarWhite from "../../../assets/BloggarWhite.png";

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import React from "react";

function Footer() {
  const tags = [
    "Travel",
    "Bussiness",
    "Lifestyle",
    "Marketing",
    "Medical",
    "sports",
    "Career",
    "Foods",
  ];

  return (
    <footer style={{ marginTop: "8rem" }}>
      <div style={{ backgroundColor: "#191a1f" }}>
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
          <Grid container spacing={4} sx={{paddingBottom:'2rem'}}>
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{ fontWeight: "100", fontSize: "1.2rem" }}
            >
              <Box
                component="img"
                src={BloggarWhite}
                sx={{ marginBottom: "1rem" }}
              />
              <Typography
                component="p"
                variant="p"
                sx={{ color: "#fff", marginBottom: "10px" }}
              >
                i am Amir Mavaee
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{ color: "#fff", marginBottom: "10px" }}
              >
                I am 19 Years Old
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{ color: "#fff", marginBottom: "10px" }}
              >
                I am Front End Developer By React.js and Next.js
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{ color: "#fff", marginBottom: "10px" }}
              >
                This News Site is Practice With Real API and React Functional
                Component
              </Typography>
              <Typography component="p" variant="p" sx={{ color: "#fff" }}>
                My Email : ah.mavaee3831@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Typography
                component="p"
                variant="p"
                sx={{ color: "#fff", fontSize: "22px", marginBottom: "2rem" }}
              >
                Important Link
              </Typography>
              <ul
                style={{
                  listStyleType: "none",
                  color: "#fff",
                  fontWeight: "100",
                  fontSize: "1.1rem",
                }}
              >
                <li style={{ marginBottom: "1.5rem" }}>News</li>
                <li style={{ marginBottom: "1.5rem" }}>Career</li>
                <li style={{ marginBottom: "1.5rem" }}>Technology</li>
                <li style={{ marginBottom: "1.5rem" }}>StartUps</li>
                <li>Gadgets</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Typography
                component="p"
                variant="p"
                sx={{ color: "#fff", fontSize: "22px", marginBottom: "2rem" }}
              >
                Browse by Tag
              </Typography>
              <Grid container spacing={2}>
                {tags.map((tag , index) => (
                  <React.Fragment key={index}>
                    <Grid item xs={4}>
                      <div
                        style={{
                          padding: "13px",
                          color: "#fff",
                          backgroundColor: "hsla(0,0%,100%,.1)",
                          fontWeight: "100",
                          fontSize: "1.1rem",
                          borderRadius: "5px",
                        }}
                      >
                        {tag}
                      </div>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Typography
                component="p"
                variant="p"
                sx={{ color: "#fff", fontSize: "22px", marginBottom: "2rem" }}
              >
                Social Media
              </Typography>
              <ul
                style={{
                  listStyleType: "none",
                  color: "#fff",
                  fontWeight: "100",
                  fontSize: "1.1rem",
                }}
              >
                <li
                  style={{
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineInstagram style={{ marginRight: "5px" }} />
                  Instagram
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BiLogoTelegram style={{ marginRight: "5px" }} />
                  Telegram
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineTwitter style={{ marginRight: "5px" }} />
                  Twitter
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <AiOutlineLinkedin style={{ marginRight: "5px" }} />
                  Linkedin
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div style={{backgroundColor:"#000" , padding:"20px 0" , textAlign:"center" , color:"#fff"}}>Copyright © 2023 Bloggar by Amir Hossein Mavaee. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
