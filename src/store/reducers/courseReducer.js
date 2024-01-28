// coursesReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  selectedCourse: null,
  loading: false,
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    fetchCoursesRequest: (state) => {
      state.loading = true;
    },
    fetchCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
      state.error = null;
    },
    fetchCoursesFailure: (state, action) => {
      state.loading = false;
      state.courses = [];
      state.error = action.payload;
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    // Ek bir reducer veya action eklemek isterseniz buraya ekleyebilirsiniz
  },
});

export const {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  setSelectedCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;
