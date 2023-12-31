// developersSlice.js
import { API_URL } from '@/config/config';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk for fetching developers
export const fetchDevelopers = createAsyncThunk('developers/fetchDevelopers', async () => {
    const apiEndpoint = `${API_URL}/user/getUsers/developers`;

    try {
        const response = await axios.get(apiEndpoint);
        if (response?.data?.status) {
            return response?.data?.data;
        } else {
            throw new Error('Error fetching developers');
        }
    } catch (error) {
        throw new Error(`Error fetching developers: ${error?.response?.data?.msg}`);
    }
});

const developersSlice = createSlice({
    name: 'developers',
    initialState: {
        profiles: [],
        isloading: false,
        error: null,
    },
    reducers: {
        addDeveloper: (state, action) => {
            state.profiles.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDevelopers.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchDevelopers.fulfilled, (state, action) => {
                state.isloading = false;
                state.profiles = action.payload;
            })
            .addCase(fetchDevelopers.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message;
            })
    },
});
export const { addDeveloper } = developersSlice.actions;
export default developersSlice.reducer;
