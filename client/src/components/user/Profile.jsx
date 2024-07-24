import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Loader from '../Loader'
import { authSelector } from '../../redux/selector'

function Profile() {
    const { user, loading } = useSelector(authSelector)

  return (
    <>
      {loading ? <Loader/> : (
        <>
            <h2 className='mt-5 ml-5'>My Profile</h2>
            <div className="row justify-content-around mt-5 user-info">
                <div className="col-12 col-md-3">
                    <figure className="avatar avatar-profile">
                        <img src={user.avatar?.url} alt="" className="rounded-circle img-fluid" />
                        <NavLink to={'/me/update'} className='btn btn-primary btn-block my-5'>Edit Profile</NavLink>
                    </figure>
                </div>
                <div className="col-12 col-md-5">
                    <h4>Họ và tên</h4>
                    <p>{user.username}</p>
                    <h4>Địa chỉ email</h4>
                    <p>{user.email}</p>
                    <h4>Ngày đăng ký</h4>
                    <p>{String(user.createdAt).substring(0, 10)}</p>
                    {user.role !== 'admin' && (<NavLink to={'/orders/me'} className={'btn btn-danger btn-block'}>Đơn hàng của tôi</NavLink>)}
                    <NavLink style={{marginLeft: "12px"}} to={'/password/update'} className={'btn btn-danger btn-block'}>Thay đổi mật khẩu</NavLink>
                </div>
            </div>
      </>)}
    </>
  )
}

export default Profile
