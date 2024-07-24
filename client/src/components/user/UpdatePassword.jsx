import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePasswordRequest, updatePasswordSuccess, updatePasswordFail, updatePasswordReset} from '../../redux/slices/userSlice'
import { useNavigate, NavLink } from 'react-router-dom'
import { toast } from "react-toastify";
import { clearErrors } from '../../redux/slices/authSlice.js';
import { authSelector } from '../../redux/selector.js';
import { updatePassword } from '../../redux/actions/userActions';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Loader from '../Loader.jsx';

function UpdatePassword() {
    const navigate = useNavigate()
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector)
    const { isUpdated, error, loading } = useSelector(state=> state.user);
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
      if(isUpdated) {
        toast.success("Password updated successfully");
        dispatch(updatePasswordReset());
      }
    }, [dispatch, isUpdated, error, navigate]);
    const submitHande = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.set("oldPassword", oldPassword);
      formData.set("newPassword", newPassword);
      dispatch(updatePassword(formData));
    };
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
                  <label htmlFor="currentpassword">Mật khẩu hiện tại: </label>
                  <input
                      className="form-control"
                      id="currentpassword"
                      type="password"
                      placeholder="Nhập mật khẩu hiện tại của bạn..."
                      value={oldPassword}
                      onChange={(e)=>setOldPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                  <label htmlFor="newpassword">Mật khẩu mới: </label>
                  <input
                      className="form-control"
                      id="newpassword"
                      type="password"
                      placeholder="Nhập mật khẩu mới của bạn..."
                      value={newPassword}
                      onChange={(e)=>setNewPassword(e.target.value)}
                />
              </Form.Group>
              <button type="submit" className="auth_btn" disabled={loading ? true : false}>
                Update Password
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

export default UpdatePassword
