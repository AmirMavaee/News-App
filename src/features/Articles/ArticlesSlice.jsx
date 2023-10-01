/* eslint-disable react-refresh/only-export-components */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Part1URL = "https://newsapi.org/v2/everything?q=";
const Part2URL = "&sortBy=publishedAt&apiKey=6b4139d69f17461d9135733f39f892f8";

// "7afae03ac29946918c2297931ed64e28",
// 6b4139d69f17461d9135733f39f892f8

const initialState = {
  loading: false,
  article: [],
  Error: "",
  apiKeyIndex: 0,
};

const fetchArticles = createAsyncThunk(
  "Article/fetchArticles",
  async (title = "everything") => {
    const response = await axios.get(`${Part1URL}${title}${Part2URL}`);
    if (response.data.totalResults === 0) {
      return (response.data.article = ["No Article"]);
    } else {
      const filterdByImage = response.data.articles.filter(
        (item) => item.urlToImage != null && item
      );
      let filter = [...filterdByImage];
      const array = filter.map((item) => ({ ...item, Type: title }));
      return array;
    }
  }
);

const ArticleSlice = createSlice({
  name: "Article",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.article = action.payload;
        state.Error = "";
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.article = [];
        state.Error = action.error.message;
      });
  },
});

export default ArticleSlice.reducer;
export { fetchArticles };
