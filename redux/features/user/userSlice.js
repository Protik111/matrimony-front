import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  userInfo: {},
  userInfoDatas: null,
  userPreferences: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

//createProfile
export const createProfile = createAsyncThunk(
  "user/createProfile",
  async (data, thunkAPI) => {
    const { ...otherData } = data;
    try {
      return await userService.createProfile(otherData);
    } catch (error) {
      let message = null;
      if (error.response && error.response.data && error.response.data.errors) {
        message = error.response.data.errors;
      } else {
        message = error.response.data.errors.message;
      }

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//loaduserData
export const loadUserData = createAsyncThunk(
  "user/loadUserData",
  async (_data, thunkAPI) => {
    try {
      return await userService.loadUserData();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//updateProfile
export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (data, thunkAPI) => {
    try {
      return await userService.updateProfile(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.userInfo = null;
      state.userPreferences = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        (state.userInfoDatas = action.payload.data), (state.isLoading = false);
        state.isSuccess = true;
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.userInfoDatas = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(loadUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadUserData.fulfilled, (state, action) => {
        (state.userInfo = action.payload.data), (state.isLoading = false);
        state.isSuccess = true;
      })
      .addCase(loadUserData.rejected, (state, action) => {
        state.userInfo = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        (state.userInfo = action.payload.data), (state.isLoading = false);
        state.isSuccess = true;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.userInfo = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
