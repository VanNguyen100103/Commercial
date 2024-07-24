import React, {useEffect} from 'react'
import NewProduct from './NewProduct'
import ProductCard from '../../product/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../redux/actions/productActions'


function ListProduct() {
    const dispatch = useDispatch()
    const {products} = useSelector(state=>state.product)
    useEffect(() => {
      dispatch(getAllProducts())
    },[dispatch])
  return (
    <div>
        <div className="admin-products d-flex">
            {products && products.map((product,index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div>
        <h2>Thêm sản phẩm ở dưới</h2>
        <NewProduct/>
    </div>
  )
}

export default ListProduct
