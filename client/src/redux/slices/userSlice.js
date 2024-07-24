import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        loading: false,
        error: '',
        isUpdated: false
    },
    reducers: {
        updatePasswordRequest: (state,action) => {
            return {...state, loading: true}
        },
        updatePasswordSuccess: (state,action) => {
            return {...state, loading: false, isUpdated: action.payload}
        },
        updatePasswordFail: (state,action) => {
            return {...state, loading: false, error: action.payload}
        },
        updatePasswordReset: (state,action) => {
            return {...state, isUpdated: false}
        },
        updateProfileRequest: (state,action) => {
            return {...state, loading: true}
        },
        updateProfileSuccess: (state,action) => {
            return {...state, loading: false, isUpdated: action.payload}
        },
        updateProfileFail: (state,action) => {
            return {...state, loading: false, error: action.payload}
        },
        updateProfileReset: (state,action) => {
            return {...state, isUpdated: false}
        }
    }
})

export const { updatePasswordRequest, updatePasswordSuccess, updatePasswordFail, updatePasswordReset,updateProfileRequest, updateProfileSuccess, updateProfileFail, updateProfileReset } = userSlice.actions

export default userSlice.reducer