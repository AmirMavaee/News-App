import { configureStore } from "@reduxjs/toolkit";
import articleReducers from "../features/Articles/ArticlesSlice";
import searchReducers from "../features/Search/SearchSlice"

const store = configureStore({
    reducer:{article: articleReducers , title:searchReducers}
})

export default store;