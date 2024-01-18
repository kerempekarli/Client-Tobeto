import axios from 'axios';
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  setSelectedCategory,
  addCategory,
  deleteCategory,
  updateCategory,
} from '../reducers/categoryReducer';

export const getCategories = () => async (dispatch) => {
  try {
    dispatch(fetchCategoriesRequest());
    const response = await axios.get('http://localhost:6280/api/Categories/GetAll');
    dispatch(fetchCategoriesSuccess(response.data));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error.message));
  }
};

export const getCategoryById = (id) => async (dispatch) => {
  try {
    dispatch(fetchCategoriesRequest());
    const response = await axios.get(`http://localhost:6280/api/Categories/GetById?id=${id}`);
    dispatch(setSelectedCategory(response.data));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error.message));
  }
};

export const addNewCategory = (category) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:6280/api/Categories/Add', category);
    dispatch(addCategory(response.data));
  } catch (error) {
    // Handle error
  }
};

export const removeCategory = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:6280/api/Categories/Delete?id=${id}`);
    dispatch(deleteCategory(id));
  } catch (error) {
    // Handle error
  }
};

export const updateExistingCategory = (category) => async (dispatch) => {
  try {
    const response = await axios.put('http://localhost:6280/api/Categories/Update', category);
    dispatch(updateCategory(response.data));
  } catch (error) {
    // Handle error
  }
};
