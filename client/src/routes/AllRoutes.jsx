import React from 'react'
import { Home, Cart} from '../pages'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Login from '../components/user/Login'
import Register from '../components/user/Register'
import ProductDetail from '../components/product/ProductDetail'
import Profile from '../components/user/Profile'
import UpdateProfile from '../components/user/UpdateProfile'
import UpdatePassword from '../components/user/UpdatePassword'
import Dashboard from '../components/admin/Dashboard'
import ListProduct from '../components/admin/products/ListProduct'
import ListOrder from '../components/admin/orders/ListOrder'
import ListUser from '../components/admin/user/ListUser'
import NewProduct from '../components/admin/products/NewProduct'


function AllRoutes() {
    const routes = [
        {path: '/', element: <Home/> },
        {path: '/cart', element: <Cart/> },
        {path: "/product/:id", element: <ProductDetail/>},
        {path: "/login", element: <Login/>},
        {path: "/register", element: <Register/>},
        {path: '/me',  element:  <Profile />},
        {path: '/me/update', element: <ProtectedRoute element={UpdateProfile} />},
        {path: "/password/update",  element: <ProtectedRoute element={UpdatePassword} />},
        {path: '/admin/dashboard', element: <ProtectedRoute element={Dashboard} isAdmin={true} /> },
        {path: '/admin/orders', element: <ProtectedRoute element={ListOrder} isAdmin={true} /> },
        {path: '/admin/products', element: <ProtectedRoute element={ListProduct} isAdmin={true} /> },
        {path: '/admin/products', element: <ProtectedRoute element={ListUser} isAdmin={true} /> },
        {path: '/admin/product', element: <ProtectedRoute element={NewProduct} isAdmin={true} /> },
    ]
  return (
    <Routes>
        {routes.map((route,index)=>(<Route key={index} path={route.path} element={route.element}/>))}
    </Routes>
  )
}

export default AllRoutes
