import { createSlice } from '@reduxjs/toolkit'

export interface sidebarState {
  value: boolean
}

const initialState: sidebarState = {
  value: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    isOpened: (state) => {
      state.value = !state.value;
    }    
  },
})


export const { isOpened } = sidebarSlice.actions

export default sidebarSlice.reducer