import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonData = createAsyncThunk(
  "cart/getPokemonData",
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
  pokemonName: "",
  searchState: "",
  isLoading: true,
  isModalOpen: false,
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
    setPokemonName: (state, action) => {
      return {
        ...state,
        pokemonName: action.payload,
      };
    },
    openModal: (state, action) => {
      return {
        ...state,
        isModalOpen: true,
      };
    },
    closeModal: (state, action) => {
      return {
        ...state,
        isModalOpen: false,
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
export const { setSearchItem, setPokemonName, openModal, closeModal } =
  ListSlice.actions;

export default ListReducer;
