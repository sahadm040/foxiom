import { createSlice } from "@reduxjs/toolkit";
import { allList, SingleView } from "../api/post.route";
const initialState = {
  data: null,
  postViewArray: [],
  postView: {},
};
const postSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: {
    [allList.pending]: () => {
      console.log("allList pending");
    },
    [allList.fulfilled]: (state, action) => {
      console.log("allList fulfilled");
      state.postViewArray = action.payload;
    },
    [allList.rejected]: () => {
      console.log("allList rejected");
    },
    [SingleView.pending]: () => {
      console.log("singleView pending");
    },
    [SingleView.fulfilled]: (state, action) => {
      console.log("singleView fulfilled");
      state.postView = action.payload;
    },
    [SingleView.rejected]: () => {
      console.log("singleView rejected");
    },
  },
});

export default postSlice.reducer;
