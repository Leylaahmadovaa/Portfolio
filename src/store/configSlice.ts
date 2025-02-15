import { createSlice } from '@reduxjs/toolkit'

export interface ConfigState {
  value: boolean
}

const initialState: ConfigState = {
  value: false,
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    check: (state) => {
      state.value = !state.value;
    }    
  },
})


export const { check } = configSlice.actions

export default configSlice.reducer