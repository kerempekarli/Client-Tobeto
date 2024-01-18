// src/store/actions/authActions.js

import { login, logout } from '../reducers/authReducer';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    // Asenkron işlemler burada gerçekleştirilebilir (örneğin, bir API çağrısı)
    // Örnek olarak, giriş başarılı olduğunu varsayalım:
    const user = { email: credentials.email, };
    dispatch(login(user));
  } catch (error) {
    // Hata durumunu yönetmek için gerekli işlemler burada yapılabilir
    console.error('Login failed:', error);
  }
};

export const logoutUser = () => (dispatch) => {
  // Logout işlemi burada gerçekleştirilebilir
  dispatch(logout());
};
