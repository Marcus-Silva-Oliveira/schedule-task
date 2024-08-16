import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalsID } from '../types';

export interface baseState {
  globalLoading: boolean;
  showModalID: ModalsID;
}

const initialState: baseState = {
  globalLoading: false,
  showModalID: ModalsID.none,
};

const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    getBaseState: (state) => state,
    showLoading: (state, action: PayloadAction<boolean>) => {
      state.globalLoading = action.payload;
    },
    enableModal: (state, action: PayloadAction<ModalsID>) => {
      state.showModalID = action.payload;
    },
  },
});

export const { getBaseState, showLoading, enableModal } = baseSlice.actions;
export default baseSlice.reducer;
