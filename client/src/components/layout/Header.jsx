import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../redux/selector';
import { logout } from '../../redux/actions/userActions';
import { toast } from 'react-toastify';


function Header() {
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, loading } = useSelector(authSelector);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const logoutHandle = () => {
    dispatch(logout());
    toast.success('Logout user successfully.')
  }
  

  return (
    <div className='header'>
      <div className='header-logo'>
        <NavLink to={'/'}>
          <img src={'https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png'} alt='logo' />
        </NavLink>
      </div>
      <div className='header-between'>
        <div className="header-search">
          <img className="icon-search" src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png" alt="icon-search" />
          <input type="text" data-view-id="main_search_form_input" placeholder="Giao nhanh 2H &amp; đúng khung giờ" className="styles__InputRevamp-sc-6cbqeh-2 IXqBC" onChange={(e) => setSearch(e.target.value)} />
          <button data-view-id="main_search_form_button" className="styles__ButtonRevamp-sc-6cbqeh-3 LdVUr">Tìm kiếm</button>
        </div>
        <ul className="header-hint">
          <li><NavLink to={'/'} className={(navClass) => navClass.isActive ? 'navActive' : ''}>điện gia dụng</NavLink></li>
          <li><NavLink to={'/order'} className={(navClass) => navClass.isActive ? 'navActive' : ''}>xe cộ</NavLink></li>
          <li><NavLink to={'/'} className={(navClass) => navClass.isActive ? 'navActive' : ''}>mẹ &amp; bé</NavLink></li>
          <li><NavLink to={'/'} className={(navClass) => navClass.isActive ? 'navActive' : ''}>khỏe đẹp</NavLink></li>
          <li><NavLink to={'/'} className={(navClass) => navClass.isActive ? 'navActive' : ''}>nhà cửa</NavLink></li>
          <li><NavLink to={'/nha-sach-tiki/c8322?from=header_keyword'}>sách</NavLink></li>
          <li><NavLink to={'/the-thao-da-ngoai/c1975?from=header_keyword'}>thể thao</NavLink></li>
        </ul>
      </div>
      <div className="header-info">
        <ul className="header-user">
          <li>
            <NavLink rel="nofollow" to={'/'}>
              <img src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png" alt="header_menu_item_home" /> Trang chủ
            </NavLink>
          </li>
          <li>
            {user ? (
              <div className="ml-4 dropdown d-inline" onMouseLeave={closeDropdown}>
                <button className='btn dropdown-toggle' type='button' onClick={toggleDropdown} aria-haspopup='true' aria-expanded={dropdownOpen}>
                  <figure className="avatar avatar-nav">
                    <img className='rounded-circle' src={user.avatar && user.avatar.url} alt={user.username} />
                  </figure>
                  <span>{user && user.username}</span>
                </button>
                {dropdownOpen && (
                  <div className="dropdown-menu show" aria-labelledby='dropDownMenuButton'>
                    {user && user.role !== 'admin' ? (
                      <NavLink className={'dropdown-item'} to={'/orders/me'}>Orders</NavLink>
                    ) : (
                      <NavLink className={'dropdown-item'} to={'/admin/dashboard'}>Dashboard</NavLink>
                    )}
                    <NavLink className={'dropdown-item'} to={'/me'}>Profile</NavLink>
                    <NavLink onClick={logoutHandle} className={'dropdown-item text-danger'} to={'/'}>Logout</NavLink>
                  </div>
                )}
              </div>
            ) : !loading && <NavLink to={'/login'}>Tài khoản</NavLink>}
          </li>
          <li>
            <NavLink to={'/cart'}>
              <img className="cart-icon" src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png" alt="header_header_img_Cart" />
              <div className="cart-count"><span className="Userstyle__ItemCartQtyRevamp-sc-6e6am-16 jbrHBQ">0</span></div>
            </NavLink>
          </li>
        </ul>
        <div className="header-address">
          <img src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png" alt="header-icon-location" />
          <h5>Giao đến:</h5>
          <NavLink to={'/order'}>TP.HCM, Q.Bình Thạnh, P.25</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
