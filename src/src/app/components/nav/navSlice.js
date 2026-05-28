import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    isActive: false,
    // isSubsActive: {},
    activeIndex:0
  },
  reducers: {
    setActive: (state, action) => {
      state.isActive = action.payload;
    },
    setActiveIndex: (state, action) => {
        state.activeIndex = action.payload;
    },
    // setSubsActive: (state, action) => {
    //   const { index, value } = action.payload;
    //   if(state.isSubsActive[index] == null) state.isSubsActive[index] = {};
    //   state.isSubsActive[index] = value;
    // },
  },
});

export const {
    setActive,
    // setSubsActive,
    setActiveIndex
} = navigationSlice.actions;

export const isActiveState = (state) => state.navigation.isActive;
export const activeIndexState = (state) => state.navigation.activeIndex;
// export const isSubsActiveState = (state) => state.navigation.isSubsActive;

export default navigationSlice.reducer;
