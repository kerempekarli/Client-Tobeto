// src/store/actions/authActions.js

import { login, logout } from '../reducers/authReducer';
import axiosInstance from '../../services/axiosHelper';
import { useNavigate } from "react-router-dom";


export const loginUser = (credentials) => async (dispatch) => {

  
  try {
    // Simüle edilmiş bir API çağrısı. Gerçek projede bu kısım bir API'ye gerçek bir istek olmalı.
    const response = await axiosInstance.post('/Auth/login', credentials);

    if (!response.status === 200) {
      console.log("ERROR " , response);
      throw new Error('Login failed');
    }



    const data = response.data;

    // Asenkron işlemler burada gerçekleştirilebilir (örneğin, bir API çağrısı)
    // Örnek olarak, giriş başarılı olduğunu varsayalım:
    const user = {
      id: data.user.id,
      firstName: data.user.firstName,
      lastName: data.user.lastName,
      email: data.user.email,
      birthDate: data.user.birthDate,
      phoneNumber: data.user.phoneNumber,
      imagePath: data.user.imagePath,
    };

    dispatch(login({ user, token: data.token }));
  } catch (error) {
    // Hata durumunu yönetmek için gerekli işlemler burada yapılabilir
    console.error('Login failed:', error);
    // Hata durumunda kullanıcıya bilgi verebilir veya başka bir işlem gerçekleştirebilirsiniz.
    // Örneğin: dispatch(showErrorMessage('Login failed. Please try again.'));
  }
};

export const logoutUser = () => (dispatch) => {
  try {
    // Logout işlemi burada gerçekleştirilebilir
    dispatch(logout());
  } catch (error) {
    // Hata durumunu yönetmek için gerekli işlemler burada yapılabilir
    console.error('Logout failed:', error);
    // Hata durumunda kullanıcıya bilgi verebilir veya başka bir işlem gerçekleştirebilirsiniz.
    // Örneğin: dispatch(showErrorMessage('Logout failed. Please try again.'));
  }
};
