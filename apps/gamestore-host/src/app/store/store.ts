import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer } from "./rootReducer";

export function makeStore() {
  const store = configureStore({
    reducer: rootReducer,
  });

  setupListeners(store.dispatch);

  return store;
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
