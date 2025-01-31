// import {createStore} from "redux";
// import rootReducer from "./reducers.tsx";
import {configureStore} from "@reduxjs/toolkit";
import themeReducer from './themeSlice.tsx';
import countReducer from './countSlice.tsx';

// const store = createStore(rootReducer);
const store = configureStore({
    reducer: {
        theme: themeReducer,
        count: countReducer,
    }
});

export default store;