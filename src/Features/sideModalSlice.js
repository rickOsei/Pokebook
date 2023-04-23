import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSinglePokemonData = createAsyncThunk(
  "cart/getSinglePokemonData",
  async () => {
    try {
      const {
        data: { results },
      } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20");
      // console.log(results);
      return results;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  pokemonList: [],
  searchState: "",
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
      state.pokemonList = action.payload;
    });
    builder.addCase(getPokemonData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

const ListReducer = ListSlice.reducer;
export const { setSearchItem } = ListSlice.actions;

export default ListReducer;
