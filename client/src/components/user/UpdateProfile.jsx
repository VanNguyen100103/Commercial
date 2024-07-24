import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileRequest, updateProfileSuccess, updateProfileFail, updateProfileReset } from '../../redux/slices/userSlice'
import { useNavigate, NavLink } from 'react-router-dom'
import { toast } from "react-toastify";
import { clearErrors } from '../../redux/slices/authSlice.js';
import { authSelector } from '../../redux/selector.js';
import { updateProfile } from '../../redux/actions/userActions';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Loader from '../Loader.jsx';


function UpdateProfile() {
    const navigate = useNavigate()
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState(
      "../assets/images/default_avatar.png"
    );
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector)
    const { isUpdated, error, loading } = useSelector(state=> state.user);
    useEffect(() => {
      if (user) {
        setUserName(user.username);
        setEmail(user.email);
        setAvatarPreview(user.avatar.url);
      }
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
      if(isUpdated) {
        toast.success("User updated successfully");
        dispatch(updateProfileReset());
      }
    }, [dispatch, isUpdated, error, navigate]);
    const submitHande = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.set("username", username);
      formData.set("email", email);
      formData.set("avatar", avatar);
      dispatch(updateProfile(formData));
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
      }
    }
  return (
    <>
    {loading && <Loader />}
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto text-center">
            <h3 className="fw-bold fs-4">Update Profile</h3>
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
                      onChange={(e)=>setUserName(e.target.value)}
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
                      onChange={(e)=>setEmail(e.target.value)}
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
                Update
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
  )
}

export default UpdateProfile
