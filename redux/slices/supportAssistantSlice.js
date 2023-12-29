// supportAssistantsSlice.js
import { API_URL } from '@/config/config';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk for fetching supportAssistants
export const fetchSupportAssistants = createAsyncThunk('supportAssistants/fetchSupportAssistants', async () => {
    const apiEndpoint = `${API_URL}/user/getUsers/supportAssistants`;

    try {
        const response = await axios.get(apiEndpoint);
        if (response?.data?.status) {
            return response?.data?.data;
        } else {
            throw new Error('Error fetching data');
        }
    } catch (error) {
        throw new Error(`Error fetching data: ${error?.response?.data?.msg}`);
    }
});

const supportAssistantsSlice = createSlice({
    name: 'supportAssistants',
    initialState: {
        profiles: [],
        isloading: false,
        error: null,
    },
    reducers: {
        addSupportAssistants: (state, action) => {
            state.profiles.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSupportAssistants.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchSupportAssistants.fulfilled, (state, action) => {
                state.isloading = false;
                state.profiles = action.payload;
            })
            .addCase(fetchSupportAssistants.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message;
            })
    },
});
export const { addSupportAssistants } = supportAssistantsSlice.actions;
export default supportAssistantsSlice.reducer;
