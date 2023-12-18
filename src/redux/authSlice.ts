import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const handleRegister = createAsyncThunk(
  'auth/handleRegister',
  async ({ email, password }: { email: string; password: string }) => {
    console.log('Hi');
    // return await onRegister(email, password);
  }
);

interface AuthState {
  isLoggedIn: boolean;
  token: string;
  isLoading: boolean;
  error: string;
}
const initialState: AuthState = {
  isLoggedIn: false,
  token:'',
  isLoading: false,
  error: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // builder.addCase(handleRegister.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = '';
    // });

    // builder.addCase(handleRegister.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = '';
    // });

    // builder.addCase(handleRegister.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message || 'An error occurred';
    // });
  },
})

// export const {  } = authSlice.actions
export default authSlice.reducer;