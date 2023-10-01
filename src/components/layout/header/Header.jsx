import { useEffect, useState } from "react";
//MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
//photo
import Bloggar from "../../../assets/BloggarWhite.png";
//style
import "./Header.css";
//icon (react-icon)
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { searchTitle } from "../../../features/Search/SearchSlice";

import { Link } from "react-router-dom";
function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchTitle());
  }, []);

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
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", boxShadow: "0" }}
        >
          <Toolbar className="toolbar">
            <Button
              className="btn-menu"
              sx={{
                maxWidth: "35px",
                maxHeight: "35px",
                minWidth: "35px",
                minHeight: "35px",
                padding: "6px",
                bgcolor: "#3756f7",
              }}
              variant="contained"
            >
              <FaBars className="hamber-menu"/>
            </Button>
            <Link className="bloggar" href="#">
              <Box component="img" alt="Bloggar Photo" src={Bloggar} />
            </Link>
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li className="pages">
                <Link>
                  Pages
                  <ul className="pages-menu">
                    <li className="pages-item">
                      <Link to="/ContactUs">Contact Us</Link>
                    </li>

                    <li className="pages-item">
                      <Link to="/404">Error 404</Link>
                    </li>

                    <li className="pages-item">
                      <Link to="/Login">Log In</Link>
                    </li>

                    <li className="pages-item">
                      <Link to="/SignUp">Register</Link>
                    </li>
                  </ul>
                </Link>
              </li>

              <li>
                <Link to="/Lifestyle@10">Lifestyle</Link>
              </li>
              <li>
                <Link to="/Foods@8">Foods</Link>
              </li>
              <li>
                <Link to="/Business@14">Business</Link>
              </li>
              <li>
                <Link to="/Travel@17">Travel</Link>
              </li>
              <li>
                <Link to="/Sports@13">Sports</Link>
              </li>
            </ul>

            <Box className="icon-container" component="div">
              {showSearchBar ? (
                <AiOutlineClose
                  className="search-icon"
                  onClick={() => {
                    setShowSearchBar(false);
                  }}
                />
              ) : (
                <BsSearch
                  className="search-icon"
                  onClick={() => {
                    setShowSearchBar(true);
                  }}
                />
              )}
              <Box
                component="div"
                className={`search-bar ${showSearchBar ? "" : "hidden"}`}
              >
                <form>
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  ></input>
                  <Link to={`/${value}@15`}>
                    <BsSearch
                      className="search-bar-icon"
                      onClick={() => {
                        dispatch(searchTitle(value));
                        setShowSearchBar(false);
                      }}
                    />
                  </Link>
                </form>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
