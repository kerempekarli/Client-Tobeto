// coursesActions.js
import instance from "../../services/axiosHelper"
import {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  setSelectedCourse,
} from '../reducers/courseReducer';

// Bu fonksiyon, Courses listesini almak için kullanılır
export const getCourses = (pageIndex, pageSize) => async (dispatch) => {
  try {
    dispatch(fetchCoursesRequest());
    const response = await instance.get(
      `/Courses/GetList?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
    dispatch(fetchCoursesSuccess(response.data));
  } catch (error) {
    dispatch(fetchCoursesFailure(error.message));
  }
};

// Bu fonksiyon, belirli bir Course'un detaylarını almak için kullanılır
export const getCourseById = (id) => async (dispatch) => {
  try {
    dispatch(fetchCoursesRequest());
    const response = await instance.get(`/Courses/GetById?id=${id}`);
    dispatch(setSelectedCourse(response.data));
  } catch (error) {
    dispatch(fetchCoursesFailure(error.message));
  }
};

// Ek bir action eklemek isterseniz buraya ekleyebilirsiniz
