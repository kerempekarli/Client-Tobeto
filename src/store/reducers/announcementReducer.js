import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  announcements: [],
  selectedAnnouncement: null,
  loading: false,
  error: '',
};

const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    fetchAnnouncementsRequest: (state) => {
      state.loading = true;
    },
    fetchAnnouncementsSuccess: (state, action) => {
      state.loading = false;
      state.announcements = action.payload;
      state.error = '';
    },
    fetchAnnouncementsFailure: (state, action) => {
      state.loading = false;
      state.announcements = [];
      state.error = action.payload;
    },
    setSelectedAnnouncement: (state, action) => {
      state.selectedAnnouncement = action.payload;
    },
    addAnnouncement: (state, action) => {
      state.announcements.push(action.payload);
    },
    deleteAnnouncement: (state, action) => {
      state.announcements = state.announcements.filter(
        (announcement) => announcement.id !== action.payload
      );
    },
    updateAnnouncement: (state, action) => {
      const index = state.announcements.findIndex(
        (announcement) => announcement.id === action.payload.id
      );

      if (index !== -1) {
        state.announcements[index] = action.payload;
      }
    },
  },
});

export const {
  fetchAnnouncementsRequest,
  fetchAnnouncementsSuccess,
  fetchAnnouncementsFailure,
  setSelectedAnnouncement,
  addAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} = announcementSlice.actions;

export default announcementSlice.reducer;
