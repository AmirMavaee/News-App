import "./Updates.css"
import {AiOutlineUser} from "react-icons/ai"
import { Box } from "@mui/material";
function Updates() {
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

    <div className="newsletterBg-container">
        <h1>Never miss any Update!</h1>
        <h3>Get the freshest headlines and updates sent uninterrupted to your inbox.</h3>
        <form>
            <input type="email" placeholder="Enter your email"/>
            <button type="submit">Subscribe</button>
            <span><AiOutlineUser/></span>
        </form>
    </div>
      </Box>
  );
}

export default Updates;
