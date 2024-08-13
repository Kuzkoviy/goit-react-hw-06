import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contactSlice'
import filterReducer from "./filterSlice";



const persistContactsConfig = {
    key: "contacts",
    storage,
  };


const persistedContactReducer = persistReducer(contactReducer, persistContactsConfig);

export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export const persistor = persistStore(store);