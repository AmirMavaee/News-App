import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: ""
}

const reducers = {
    searchTitle:(state , action)=>{
        state.title = action.payload
    }
}

const SearchSlice = createSlice({
    name:"search",
    initialState,
    reducers
})

export default SearchSlice.reducer;
export const {searchTitle} = SearchSlice.actions;