import React, {useEffect} from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions/productActions';


function ProductContainer() {
  const dispatch = useDispatch()
  const {products} = useSelector(state=>state.product)
  useEffect(() => {
    dispatch(getAllProducts())
 
  },[dispatch]
  )
  return (
    <div className='product container'>
      {products && products.map((product,index) => (
        <ProductCard product={product} key={index} />
      ))}
      </div>
  )
}

export default ProductContainer;
