import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "../Loader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { register } from '../../redux/actions/userActions.js';
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from '../../redux/selector.js';
import { clearErrors } from '../../redux/slices/authSlice.js';

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { username, email, password } = user;
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "../assets/images/default_avatar.png"
  );
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(authSelector);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/login");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate]);
  const submitHande = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("username", username);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);
    dispatch(register(formData));
  };
  const onChange = (e) => {
    if(e.target.name === "avatar"){
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }else{
        setUser({...user, [e.target.name]: e.target.value})
    }
  }
  return (
    <>
      {loading && <Loader />}
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto text-center">
              <h3 className="fw-bold fs-4">Register</h3>
              <br />
              <Form className="auth_form" onSubmit={submitHande} encType="multipart/form-data">
                <Form.Group>
                    <label htmlFor="username">Username: </label>
                    <input
                        className="form-control"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Nhập tên của bạn..."
                        value={username}
                        onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                    <label htmlFor="email">Email: </label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Nhập email của bạn..."
                        value={email}
                        onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                    <label htmlFor="password">Password: </label>
                    <input
                        className="form-control"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Nhập password của bạn..."
                        value={password}
                        onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                    <label htmlFor="avatar-upload">Avatar: </label>
                    <div className="d-flex align-items-center">
                        <div className="">
                            <figure className="avatar mr-3 item-rtl">
                                <img className="round-circle" src={avatarPreview} alt="Avatar Preview" />
                            </figure>
                        </div>
                        <div className="custom-file">
                            <input
                                className="custom-file-input"
                                id="custom-file"
                                name="avatar"
                                type="file"
                                onChange={onChange}
                                accept="images/*"
                            />
                        </div>
                    </div>
                </Form.Group>
                <button type="submit" className="auth_btn" disabled={loading ? true : false}>
                  Register
                </button>
                <p>
                  Already have an account? <NavLink to={"/login"}>Login</NavLink>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Register;
