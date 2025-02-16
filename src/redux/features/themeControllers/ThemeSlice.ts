import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changeLanguage, getLanguage } from "@/utils/changeLanguage";

import { ThemeState } from "./ThemeModal";

const intialIsState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoaded: false,
  isSent: false,
  isUpdated: false,
  isDeleted: false,
};

const initialState: ThemeState = {
  isState: intialIsState,
  isRTL: true,
  lang: "ar",
  appearance: "light",
};

// change Language
export const changeLang = createAsyncThunk(
  "theme/language",
  async (_, thunkAPI) => {
    try {
      await changeLanguage();
      return await getLanguage();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// change theme
export const changeThemeAppearance = createAsyncThunk(
  "theme/appearance",
  async (theme: string, thunkAPI) => {
    try {
      return theme;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    reset: (state) => {
      state.isRTL = true;
      state.lang = "ar";
      state.appearance = "light";
    },
  },

  extraReducers: (builder) => {
    builder
      // ------------------------------------------------------------------ //
      // change Language
      .addCase(changeLang.pending, (state) => {
        state.isState = { ...intialIsState, isLoading: true };
      })
      .addCase(changeLang.fulfilled, (state, action) => {
        state.lang = action.payload;
      })
      .addCase(changeLang.rejected, (state) => {
        state.isState = { ...intialIsState, isError: true };
      })

      // change Language
      .addCase(changeThemeAppearance.pending, (state) => {
        state.isState = { ...intialIsState, isLoading: true };
      })
      .addCase(changeThemeAppearance.fulfilled, (state, action) => {
        state.appearance = action.payload;
      })
      .addCase(changeThemeAppearance.rejected, (state) => {
        state.isState = { ...intialIsState, isError: true };
      });
  },
});

export const { reset } = themeSlice.actions;
export default themeSlice.reducer;
