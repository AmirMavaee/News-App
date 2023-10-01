import { useEffect } from "react";
//alice carousel
import { Box, ImageList, ImageListItem } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  filterDate,
  getSpecificData,
  shortenString,
} from "../../helpers/functions";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../features/Articles/ArticlesSlice";
//redux toolkit
//style
import "./BreakNews.css";
import { Link } from "react-router-dom";

function BreakNews() {
  const dispatch = useDispatch();
  let { article } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  article = getSpecificData(article, 4, 7);

  const items = article.map((item) => (
    <>
      <div>
        <ImageList className="imageList" variant="quilted">
          <ImageListItem className="imageItem">
            <img src={item.urlToImage} />
          </ImageListItem>
          <div>
            <h4>{filterDate(item.publishedAt)}</h4>
            <Link to={`/Blog/${item.title}`} style={{textDecoration:"none"}}><p>{shortenString(item.title, 4)}</p></Link>
          </div>
        </ImageList>
      </div>
    </>
  ));

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1030: { items: 3 },
  };
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
      <div style={{ marginBottom: "5rem" }}>
        <h3 className="header">Breaking News</h3>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls
          disableButtonsControls
          autoPlay
          infinite
          autoPlayInterval={2000}
          animationDuration={2000}
        />
      </div>
    </Box>
  );
}

export default BreakNews;
