import { configureStore } from "@reduxjs/toolkit";

import tableReducer from './tableSlice.js'
export const store = configureStore({
    reducer : {
      table :  tableReducer,

    }
})