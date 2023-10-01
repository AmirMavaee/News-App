import { Avatar, Box, Grid, Typography } from "@mui/material";
import address from "../../assets/address.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import { getEndPointOfURL } from "../../helpers/functions";
import Layout from "../layout/Layout";
import PageTitle from "../shared/PageTitle";

const image = [address, email, phone];
const HeaderText = ["Address", "Email Us", "Call Now"];
const Text = [
  "Second Alley , Street Ghaem , Blv Rahmat , Shiraz , Iran",
  "ah.mavaee3831@gmail.com </br> hajamir228@gmail.com",
  "+98 930 686 0278 </br> +98 993 965 3550",
];

function ContactUs() {
  const title = getEndPointOfURL(window.location.href);

  return (
    <Layout>
      <PageTitle title={title} />
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
        <Grid container spacing={4} sx={{marginTop:"3rem"}}>
          {image.map((item, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <div style={{textAlign:'center' , color:"#fff" , boxShadow:"0 0 10px rgba(256,256,256,0.1)" , padding:"3rem 0"}}>
                <div
                  style={{
                    backgroundColor: "#484848",
                    display: "inline-block",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <Avatar
                    alt="image"
                    src={item}
                    sx={{ width: "70px", height: "70px" }}
                  ></Avatar>
                </div>
                <Typography
                  component="p"
                  variant="p"
                  sx={{ fontSize: "1.8rem" }}
                >
                  {HeaderText[index]}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "300",
                    lineHeight: "1.6",
                  }}
                  dangerouslySetInnerHTML={{__html: Text[index] }}
                >
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export default ContactUs;
