import { combineReducers } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import authSlice from './slices/authSlice'
import userSlice from './slices/userSlice'

export const rootReducer = combineReducers({product: productSlice, auth: authSlice, user: userSlice})
