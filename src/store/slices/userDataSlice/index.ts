'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/api/methods/models';

const initialData: User = {
  exp: 0,
  iat: 0,
  sub: ''
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    data: initialData,
    isLoading: false
  },
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    resetUserData: (state) => {
      state.data = initialData;
    }
  }
});

export const { setUserData, setLoading, resetUserData } = userDataSlice.actions;
