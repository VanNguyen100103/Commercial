import axios from 'axios';
import { allProductsRequest, allProductsSuccess, allProductsFail, productDetailRequest, productDetailSuccess, productDetailFail, adminProductsRequest, adminProductsSuccess, adminProductsFail, newProductRequest, newProductSuccess, newProductFail, newProductReset } from '../slices/productSlice';

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch(allProductsRequest());
    const { data } = await axios.get('http://localhost:3000/api/v1/product/all');
    dispatch(allProductsSuccess({ products: data.products, productsCount: data.productCount }));
  } catch (err) {
    console.error('Error:', err.response.data.message); // Log error
    dispatch(allProductsFail(err.response.data.message));
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(productDetailRequest());
    const { data } = await axios.get(`http://localhost:3000/api/v1/product/${id}`);
    dispatch(productDetailSuccess({ product: data.product }));
  } catch (error) {
    console.error('Product Details API Error:', error.response ? error.response.data.message : error.message);
    dispatch(productDetailFail(error.response && error.response.data.message ? error.response.data.message : error.message));
  }
};

export const newProduct = (productData) => async (dispatch, getState) => {
  try{
    dispatch(newProductRequest());
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

    const { data } = await axios.post("http://localhost:3000/api/v1/admin/product/new", productData, config)
    dispatch(newProductSuccess({product: data.product, success: data.success}))
    
  }
  catch(error){
    dispatch(productDetailFail(error.response && error.response.data.message ? error.response.data.message : error.message));
  }
}