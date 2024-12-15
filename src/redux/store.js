import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers"; // Import your reducers

const store = configureStore({
  reducer, // This will combine your reducers automatically if you have multiple
});

export default store;
