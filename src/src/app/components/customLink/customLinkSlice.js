import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state

// Define the initial state using that type
const initialState = {
    page: "/",
}

export const customLinkSlice = createSlice({
  name: 'customLink',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPage: (state, action) => {
        state.page = action.payload;
    },
  }
})

export const { setPage } = customLinkSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const pageState = (state) => state.customLink.page

export default customLinkSlice.reducer