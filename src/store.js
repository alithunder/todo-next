import { create } from 'zustand'

export const useAppStore = create((set) => ({
  row: [],
  inputValue : "",
  setRow : (row) => set({row}),
  setInputValue : (inputValue) => set({inputValue}),
}))