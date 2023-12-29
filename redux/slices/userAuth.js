import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const getParsedLoginDetails = () => {
    const storedLoginDetails = localStorage.getItem('loginDetails');
    return storedLoginDetails ? JSON.parse(storedLoginDetails) : null;
};

export const initialState = {
    isLoading: false,
    user: getParsedLoginDetails()?.data || null,
    error: null
}


export const userAuth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
            state.user = null;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        },
        loginError: (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isLoading = false;
            state.user = null;
            state.error = null;
        },
        updateProfilePicture: (state, action) => {
            console.log('Updating profile picture with:', action.payload);
            state.user.photo = action.payload;
        }
    }
})

export const { loginStart, loginSuccess, loginError, logout, updateProfilePicture } = userAuth.actions;
export default userAuth.reducer;