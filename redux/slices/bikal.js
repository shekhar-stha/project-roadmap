import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  'customer/fetchData',
  async () => {
    const res = await axios.get('/user/getAllUser');
    return res.data;
  }
);

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    editData: (state, action) => {
      const { id, newData } = action.payload;
      const index = state.data.findIndex(data => data.id === Number(id));
      if (index !== -1) {
        state.data[index] = newData;
      }
    },
    deleteData: (state, action) => {
      const id = action.payload;
      const index = state.data.findIndex(data => data.id === Number(id));
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addData, editData, deleteData } = customerSlice.actions;

export default customerSlice.reducer;