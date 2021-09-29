import sleep from '@/services/api/fakeApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAsyncExample = createAsyncThunk(
  'posts/fetchAsyncExample',
  async () => {
    await sleep(4000)
    return { teste: 'teste api async' }
  },
)

const store = createSlice({
  name: 'apiExample',
  initialState: {
    isError: false,
    isFetching: false,
    isSuccess: false,
    data: {},
  },
  reducers: {
    populateData(state, payload) {
      state = { ...state, isError: false, isFetching: false, ...payload }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAsyncExample.pending, (state) => {
        state.isFetching = true
        state.data = {}
      })
      .addCase(fetchAsyncExample.fulfilled, (state, action) => {
        state.isFetching = false
        state.isSuccess = true
        state.isError = false
        state.data = action.payload
      })
      .addCase(fetchAsyncExample.rejected, (state, action) => {
        state.isFetching = false
        state.isSuccess = false
        state.isError = true
        state.data = action.error
      })
  },
})

export default store.reducer
