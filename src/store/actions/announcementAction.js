// AnnouncementAction.js


import axios from 'axios';
import {
  fetchAnnouncementsRequest,
  fetchAnnouncementsSuccess,
  fetchAnnouncementsFailure,
  setSelectedAnnouncement,
  addAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} from '../reducers/announcementReducer';

export const getAnnouncements = () => async (dispatch) => {
  try {
    dispatch(fetchAnnouncementsRequest());
    const response = await axios.get('http://localhost:6280/api/Announcements/GetList?PageIndex=0&PageSize=100');
    console.log("REPONSE  ", response.data.items)
    dispatch(fetchAnnouncementsSuccess(response.data));
  } catch (error) {
    dispatch(fetchAnnouncementsFailure(error.message));
  }
};

export const getAnnouncementById = (id) => async (dispatch) => {
  try {
    dispatch(fetchAnnouncementsRequest());
    const response = await axios.get(`http://localhost:6280/api/Announcements/GetById?id=${id}`);
    dispatch(setSelectedAnnouncement(response.data));
  } catch (error) {
    dispatch(fetchAnnouncementsFailure(error.message));
  }
};

export const addNewAnnouncement = (announcement) => (dispatch) => {
  dispatch(addAnnouncement(announcement));
};

export const removeAnnouncement = (id) => (dispatch) => {
  dispatch(deleteAnnouncement(id));
};

export const updateExistingAnnouncement = (announcement) => (dispatch) => {
  dispatch(updateAnnouncement(announcement));
};
