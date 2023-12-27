import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    isLoading: false,
}


export const loading = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        loadingStart: (state) => {
            state.isLoading = true;
        },
        loadingEnd: (state) => {
            state.isLoading = false;
        }
    }
})

export const { loadingStart, loadingEnd } = loading.actions;
export default loading.reducer;