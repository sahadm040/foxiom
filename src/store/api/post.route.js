import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosInstance/axiosInstance";

// ----------------------------------- all characters api------------------------------------/

export const allList = createAsyncThunk("allPosts", async () => {
  const response = await axiosApi.get("posts");
  console.log("response", response.data);
  return response.data;
});

// ----------------------------------- single character api------------------------------------/

export const SingleView = createAsyncThunk("SingleView", async (id) => {
  const response = await axiosApi.get(`posts/${id}`);
  console.log("response", response);
  return response.data;
});
