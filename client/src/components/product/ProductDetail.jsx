import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ImageZoom from 'react-image-zoom';
import { getProductDetails } from '../../redux/actions/productActions';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    console.log('Product State:', product);
  }, [product]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  const imageUrl = product.images && product.images.length > 0 ? product.images[0].url : '../../assets/images/default_avatar.png';

  const zoomProps = {
    width: 400,
    height: 300,
    zoomWidth: 500,
    img: imageUrl // Ensure there's a default image
  };

  return (
    <div className='product-detail'>
      <h1>{product.name}</h1>
      <ImageZoom {...zoomProps} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
