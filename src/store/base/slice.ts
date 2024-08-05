import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface baseState {
  globalLoading: boolean;
}

const initialState: baseState = {
  globalLoading: false,
};

const baseSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getBaseState: (state) => state,
    showLoading: (state, action: PayloadAction<boolean>) => {
      state.globalLoading = action.payload;
    },
  },
});

export const { getBaseState, showLoading } = baseSlice.actions;
export default baseSlice.reducer;
