
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}
//persistor
const persistedReducer = persistReducer(persistConfig, userReducer)

//Store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)