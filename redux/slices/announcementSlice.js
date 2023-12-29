// announcementSlice.js
import { API_URL } from '@/config/config';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAnnouncements = createAsyncThunk('announcements/fetchAnnouncements', async () => {
    const apiEndpoint = `${API_URL}/announcement/getAnnouncements`;

    try {
        const response = await axios.get(apiEndpoint);
        if (response?.data?.status) {
            return response?.data?.data;
        } else {
            throw new Error('Error fetching Announcements');
        }
    } catch (error) {
        throw new Error(`Error fetching developers: ${error?.response?.data?.msg}`);
    }
});

const announcementSlice = createSlice({
    name: 'announcements',
    initialState: {
        announcements: [],
        isloading: false,
        error: null,
    },
    reducers: {
        addAnnouncement: (state, action) => {
            state.announcements.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnnouncements.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchAnnouncements.fulfilled, (state, action) => {
                state.isloading = false;
                state.announcements = action.payload;
            })
            .addCase(fetchAnnouncements.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message;
            })
    },
});
export const { addAnnouncement } = announcementSlice.actions;
export default announcementSlice.reducer;
