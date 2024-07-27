import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface testeState {
  users: string[];
}

const initialState: testeState = {
  users: ['a', 'b', 'c'],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: (state) => {
      state.users;
    },
    setUsers: (state, action: PayloadAction<string[]>) => {
      state.users = action.payload;
    },
  },
});

export const { getUsers, setUsers } = userSlice.actions;
export default userSlice.reducer;
