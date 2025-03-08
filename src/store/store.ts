import { configureStore } from '@reduxjs/toolkit'
import configReducer from './configSlice'
import sidebarReducer from './sidebarSlice'
import languageReducer from './languageSlice'

export const store = configureStore({
  reducer: {
    config: configReducer,
    sidebar: sidebarReducer,
    language: languageReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch