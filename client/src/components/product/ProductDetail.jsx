import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from 'react-slick';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

  const renderImages = () => {
    if (product.images && product.images.length > 0) {
      // Use a Set to ensure unique images
      const uniqueImages = [...new Set(product.images.map(image => image.url))];
      return uniqueImages.map((url, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <InnerImageZoom src={url} zoomSrc={url} zoomType="hover" />
        </div>
      ));
    } else {
      return (
        <div style={{ margin: '10px' }}>
          <InnerImageZoom src='../../assets/images/default_avatar.png' zoomSrc='../../assets/images/default_avatar.png' zoomType="hover" />
        </div>
      );
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='product-detail'>
      <h1>{product.name}</h1>
      <div style={{width: "40rem", height: "20rem", margin: "auto"}} className='product-images'>
        <Slider {...settings}>
          {renderImages()}
        </Slider>
      </div>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
