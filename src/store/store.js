import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "../Features/listSlice";

const rootReducer = combineReducers({
  pokemonList: ListReducer,
  // Auth: AuthReducer,
  // ratesData: ratesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
