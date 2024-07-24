import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import Loader from '../Loader.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { login } from '../../redux/actions/userActions.js';
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from '../../redux/selector.js';
import { clearErrors } from '../../redux/slices/authSlice.js';


function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isAuthenticated, error, loading, user } = useSelector(authSelector);
  useEffect(() => {
    if(isAuthenticated) {
      navigate("/")
    }
    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
  },[dispatch, isAuthenticated, error, navigate])
  const submitHande = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <>
      {loading ? <Loader/>: 
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto text-center'>
              <h3 className='fw-bold fs-4'>Login</h3><br/>
              <Form className="auth_form" onSubmit={submitHande}>
                <Form.Group>
                  <input type="email" placeholder='Enter your email...' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group>
                  <input type="password" placeholder='Enter your password...'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <button type='submit' className="auth_btn">Login</button>
                <p>Don&apos;t have an account? <NavLink to={'/register'}>Create an account</NavLink></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      }
    </>
  )
}

export default Login
