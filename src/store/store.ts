import { configureStore } from '@reduxjs/toolkit'
import configReducer from './configSlice'
import sidebarReducer from './sidebarSlice'

export const store = configureStore({
  reducer: {
    config: configReducer,
    sidebar: sidebarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch