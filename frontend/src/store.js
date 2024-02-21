import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddlware) => getDefaultMiddlware(),
    devTools: true
});

export default store;