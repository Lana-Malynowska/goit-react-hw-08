import { configureStore } from "@reduxjs/toolkit";
// import contactsReducer from "./contactsSlice";
// import filtersReducer from "./filtersSlice";
import { authReducer } from "./auth/slice";
import contactsReducer from "../redux/contacts/slice";
import filtersReducer from "./filters/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});
