import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    showMenu: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
    closeMenu: (state) => {
      state.showMenu = false;
    },
  },
})

export const { toggleMenu, closeMenu } = globalSlice.actions

export default globalSlice.reducer