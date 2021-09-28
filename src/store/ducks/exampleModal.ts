import { createSlice } from '@reduxjs/toolkit'

const store = createSlice({
  name: 'modal-example',
  initialState: {
    show: false,
  },
  reducers: {
    showModal(state) {
      state.show = true
    },
    hideModal(state) {
      state.show = false
    },
  },
})

export const { showModal, hideModal } = store.actions

export default store.reducer
