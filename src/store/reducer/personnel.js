import { createSlice } from '@reduxjs/toolkit'

export const personnelSlice = createSlice({
  name: 'personnel',
  initialState: {
    data: [],
  },
  reducers: {
    setPersonnels: (state, action) => {
      state.data = action.payload;
    },
    clearPersonnels: (state) => {
      state.data = [];
    },
  },
})

export const { setPersonnels, clearData } = personnelSlice.actions

export default personnelSlice.reducer