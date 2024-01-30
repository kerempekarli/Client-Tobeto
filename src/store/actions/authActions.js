// src/store/actions/authActions.js

import { login, logout } from '../reducers/authReducer';
import axiosInstance from '../../services/axiosHelper';

// Async giriş işlemi
export const loginAsync = (loginData) => async (dispatch) => {
  try {
    // Giriş servisi çağrılır
    const response = await axiosInstance.post('/Auth/login', loginData);

    if (response.status === 200) {
      // Giriş başarılı olduğunda state güncellenir
      dispatch(login(response.data));
    } else {
      // Hata durumunda istediğiniz işlemleri yapabilirsiniz
      console.error("Login failed:", response);
      // Giriş başarısız olduğunda kullanıcıya bilgi verebilir veya başka bir işlem gerçekleştirebilirsiniz.
      // Örneğin: dispatch(showErrorMessage('Login failed. Please try again.'));
    }
  } catch (error) {
    // Hata durumunu yönetmek için gerekli işlemler burada yapılabilir
    console.error("An error occurred while logging in:", error);
    // Hata durumunda kullanıcıya bilgi verebilir veya başka bir işlem gerçekleştirebilirsiniz.
    // Örneğin: dispatch(showErrorMessage('Login failed. Please try again.'));
  }
};

// Async çıkış işlemi
export const logoutAsync = () => async (dispatch) => {
   

      dispatch(logout());
};
