import { createSlice } from '@reduxjs/toolkit'

export interface LanguageState {
  value: string
}

const initialState: LanguageState = {
  value: "EN",
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    change: (state,action) => {
      state.value = action.payload;
    }    
  },
})


export const { change } = languageSlice.actions

export default languageSlice.reducer