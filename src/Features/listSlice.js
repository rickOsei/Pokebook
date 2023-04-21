import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFuelData = createAsyncThunk("cart/getFuelData", async () => {
  try {
    const { data } = await axios.get(
      "https://cedi-rates.herokuapp.com/api/v1/fuelPrices/"
    );
    // console.log(data.fuelPrices.data);
    return data.fuelPrices.data;
  } catch (err) {}
});

const initialState = {
  pokemonList: ["One", "Two", "Three"],
  search: "0",
};

const ListSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSearchItem: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFuelData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFuelData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.fuelData = action.payload;
    });
    builder.addCase(getFuelData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

const ListReducer = ListSlice.reducer;
export const { setSearchItem } = ListSlice.actions;

export default ListReducer;
