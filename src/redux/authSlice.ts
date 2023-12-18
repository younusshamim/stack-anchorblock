import {  createSlice } from '@reduxjs/toolkit'

interface AuthState {
  token: string;
}
const initialState: AuthState = {
  token:'',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedInUser: (state, action)=>{
      state.token = action.payload;
    }
  },
})

export const selectToken = (state: any) => state.auth.token;

export const { setLoggedInUser } = authSlice.actions
export default authSlice.reducer;