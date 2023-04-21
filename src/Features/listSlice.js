import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonData = createAsyncThunk("cart/getFuelData", async () => {
  try {
    const data = await axios.get("https://pokeapi.co/docs/v2#pokemon-section");

    return data;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  pokemonList: ["One", "Two", "Three"],
  searchState: "0",
  isLoading: true,
};

const ListSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSearchItem: (state, action) => {
      return {
        ...state,
        searchState: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.fuelData = action.payload;
    });
    builder.addCase(getPokemonData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

const ListReducer = ListSlice.reducer;
export const { setSearchItem } = ListSlice.actions;

export default ListReducer;
