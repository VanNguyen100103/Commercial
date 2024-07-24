import axios from 'axios'
import { loginRequest, loginSuccess, loginFail, registerUserRequest, registerUserSuccess, registerUserFail , logoutSuccess, logoutFail,clearErrors } from '../slices/authSlice'
import { updatePasswordRequest, updatePasswordSuccess, updatePasswordFail, updatePasswordReset,updateProfileRequest, updateProfileSuccess, updateProfileFail, updateProfileReset } from '../slices/userSlice'


export const login = (email, password) => async (dispatch) => {
  try{
    dispatch(loginRequest())
    const config = {
        headers: {'Content-Type': "application/json"},
    }
    const { data } = await axios.post("http://localhost:3000/api/v1/auth/login", {email, password}, config)
    dispatch(loginSuccess({user: data.user, accessToken: data.accessToken}))
  }catch(err){
    dispatch(loginFail(err.response.data.message));
  }
}

export const register = (userData) => async (dispatch) => {
  try{
    dispatch(registerUserRequest())
    const config = {
        headers: {'Content-Type': "multipart/form-data"},
    }
    const { data } = await axios.post("http://localhost:3000/api/v1/auth/register", userData ,config)
    dispatch(registerUserSuccess(data.user))
  }catch(err){
    dispatch(registerUserFail(err.response.data.message));
  }
}

export const logout = (userData) => async (dispatch) => {
  try{
    await axios.get("http://localhost:3000/api/v1/auth/logout")
    dispatch(logoutSuccess())
  }catch(err){
    dispatch(logoutFail(err.response.data.message));
  }
}


export const updateProfile = (userData) => async (dispatch, getState) => {
  try {
    dispatch(updateProfileRequest());
    const {
      auth: { accessToken }
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${accessToken}`
      },
      withCredentials: true
    };
    const { data } = await axios.put("http://localhost:3000/api/v1/auth/me/update", userData, config);
    dispatch(updateProfileSuccess(data.user));
  } catch (err) {
    dispatch(updateProfileFail(err.response.data.message));
  }
};


export const updatePassword = (userData) => async (dispatch, getState) => {
  try {
    dispatch(updatePasswordRequest());
    const {
      auth: { accessToken }
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${accessToken}`
      },
      withCredentials: true
    };
    const { data } = await axios.put("http://localhost:3000/api/v1/auth/password/update", userData, config);
    dispatch(updatePasswordSuccess(data.user));
  } catch (err) {
    dispatch(updatePasswordFail(err.response.data.message));
  }
};
