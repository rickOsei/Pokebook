import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "../Features/listSlice";
import ColorReducer from "../Features/colorSlice";

const rootReducer = combineReducers({
  pokemonList: ListReducer,
  generalColor: ColorReducer,
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
