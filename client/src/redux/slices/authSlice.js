import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        loading: false,
        isAuthenticated: false,
        error: '',
        accessToken: ''
    },
    reducers: {
        loginRequest: (state, action) => {
            return {...state, loading: true, isAuthenticated: false};
        },
        loginSuccess: (state, action) => {
            return {...state, loading: false, isAuthenticated: true, user: action.payload.user, accessToken: action.payload.accessToken};
        },
        loginFail: (state, action) => {
          return {...state, loading: false, isAuthenticated: false, error: action.payload, user: null}
        },
        clearErrors: (state, action) => {
            return {...state, error: null}
        },
        registerUserRequest: (state, action) => {
            return {...state, loading: true, isAuthenticated: false};
        },
        registerUserSuccess: (state,action) => {
            return {...state, loading: false, isAuthenticated: true, user: action.payload}
        },
        registerUserFail: (state, action) => {
            return {...state, loading: false, isAuthenticated: false, error: action.payload, user: null}
        },
        logoutSuccess: (state,action) => {
            return {loading: false, isAuthenticated: false, user: null};
        },
        logoutFail: (state,action) => {
            return {...state, error: action.payload}
        }
    }
})

export const { loginRequest, loginSuccess, loginFail, registerUserRequest, registerUserSuccess, registerUserFail, logoutSuccess, logoutFail, clearErrors } = authSlice.actions

export default authSlice.reducer