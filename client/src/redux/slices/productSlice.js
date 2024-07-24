import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        productsCount: 0,
        loading: false,
        error: '',
        success: false
    },
    reducers: {
        allProductsRequest: (state, action) => {
          return {loadig: true, products: []}
        },
        allProductsSuccess: (state, action) => {
            return {loading: false, products: action.payload.products, productsCount: action.payload.productsCount}
        },
        allProductsFail: (state, action) => {
           return {loading: false, error: action.payload}    
        },
        productDetailRequest: (state) => {
            state.loading = true;
        },
        productDetailSuccess: (state, action) => {
            state.loading = false;
            state.product = action.payload.product;
        },
        productDetailFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        adminProductsRequest: (state, action) => {
            return {loadig: true, products: []}
        },
        adminProductsSuccess: (state, action) => {
            return {loading: false, products: action.payload.products}
        },
        adminProductsFail: (state, action) => {
            return {loading: false, error: action.payload}    
        },
        newProductRequest: (state, action) => {
            return {...state, loading: true}
        },
        newProductSuccess: (state, action) => {
            return {loading: false, success: action.payload.success, product: action.payload.product}
        },
        newProductFail: (state, action) => {
            return {...state, error: action.payload}
        },
        newProductReset: (state, action) => {
            return {...state, success: false}
        },
        clearErrors: (state, action) => {
            state.error = null
        }

    }
})

export const { allProductsRequest, allProductsSuccess, allProductsFail, productDetailRequest, productDetailSuccess, productDetailFail, adminProductsRequest, adminProductsSuccess, adminProductsFail, newProductRequest, newProductSuccess, newProductFail, newProductReset, clearErrors } = productSlice.actions

export default productSlice.reducer