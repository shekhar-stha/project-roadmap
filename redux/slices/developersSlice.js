// developersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'YOUR_API_URL';

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

// Async Thunk for adding a developer
export const addDeveloper = createAsyncThunk('developers/addDeveloper', async (formValues) => {
  try {
    const response = await axios.post(`${API_URL}/user/addUser`, formValues);
    if (response?.data?.status) {
      return response.data;
    } else {
      throw new Error('Error adding developer');
    }
  } catch (error) {
    throw new Error(`Error adding developer: ${error.message}`);
  }
});

const developersSlice = createSlice({
  name: 'developers',
  initialState: {
    profiles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevelopers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDevelopers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profiles = action.payload;
      })
      .addCase(fetchDevelopers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addDeveloper.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addDeveloper.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(addDeveloper.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default developersSlice.reducer;
