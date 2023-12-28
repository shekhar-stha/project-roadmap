import { createSlice } from '@reduxjs/toolkit'
const storedLoginDetails = typeof window !== 'undefined' ? localStorage.getItem('loginDetails') : null;
const loginDetails = typeof window !== 'undefined' ? storedLoginDetails ? JSON.parse(storedLoginDetails) : null : null;

export const initialState = {
    isLoading: false,
    user: loginDetails?.data,
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