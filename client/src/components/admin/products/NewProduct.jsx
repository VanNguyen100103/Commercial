import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  newProduct,
  getAllProducts,
} from "../../../redux/actions/productActions";
import { clearErrors } from "../../../redux/slices/productSlice";
import { toast } from "react-toastify";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function NewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [vendor, setVendor] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const categories = [
    "Electronics",
    "Computers",
    "Smart Home",
    "Arts & Craft",
    "Automotive",
    "Baby",
    "Beauty and Personal Care",
    "Women's Fashion",
    "Men's Fashion",
    "Health and Household",
    "Home and Kitchen",
    "Industrial and Scientific",
    "Luggage",
    "Pet supplies",
    "Software",
    "Sports and Outdoor",
    "Tools & Home Improvement",
    "Toys and Games",
    "Video Games",
  ];
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.product);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success("Product created successfully");
    }
  }, [dispatch, error, success]);

  const onChange = (e) => {
    const files = Array.from(e.target.files);
    setImagesPreview([]);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, file]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const submitHande = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", name);
    formData.set("price", price);
    formData.set("description", description);
    formData.set("category", category);
    formData.set("stock", stock);
    formData.set("vendor", vendor);

    images.forEach((image) => {
      formData.append("images", image);
    });

    dispatch(newProduct(formData));
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h1>New Product</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form
              className="admin_product_form"
              onSubmit={submitHande}
              encType="multipart/form-data"
            >
              <Form.Group>
                <label htmlFor="product-name">Tên của sản phẩm: </label>
                <input
                  className="form-control"
                  id="product-name"
                  type="text"
                  placeholder="Nhập tên sản phẩm..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="product-price">Giá: </label>
                <input
                  className="form-control"
                  id="product-price"
                  type="text"
                  placeholder="Nhập giá sản phẩm..."
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="product-description">Mô tả: </label>
                <textarea
                  className="form-control"
                  rows={8}
                  id="product-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </Form.Group>
              <Form.Group>
                <label htmlFor="product-category">Danh mục: </label>
                <select
                  value={category}
                  id="product-category"
                  className="form-control"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
              </Form.Group>
              <Form.Group>
                <label htmlFor="product-stock">Trong kho: </label>
                <input
                  className="form-control"
                  id="product-stock"
                  type="text"
                  placeholder="Nhập số lượng kho..."
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="product-vendor">Nhà cung cấp: </label>
                <input
                  className="form-control"
                  id="product-vendor"
                  type="text"
                  placeholder="Nhập nhà cung cấp..."
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="avatar-upload">Ảnh: </label>
                <div className="d-flex align-items-center">
                  <div className="custom-file">
                    <input
                      className="custom-file-input"
                      id="custom-file"
                      name="images"
                      type="file"
                      onChange={onChange}
                      multiple={true}
                    />
                  </div>
                  {imagesPreview.map((img, index) => (
                    <img
                      key={index}
                      width={55}
                      height={55}
                      src={img}
                      alt="Image Preview"
                    />
                  ))}
                </div>
              </Form.Group>

              <button
                type="submit"
                className="auth_btn"
                disabled={loading ? true : false}
              >
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default NewProduct;
