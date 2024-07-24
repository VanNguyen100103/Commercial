import { useState } from "react";
import booklogo from "../../assets/images/books_emoji_30px.png";
import potlogo from "../../assets/images/pot_30px.png";
import phonelogo from "../../assets/images/phonelink_ring_30px.png";
import toylogo from "../../assets/images/Horse Toy_30px.png";
import pocketlogo from "../../assets/images/passport_wallet_30px.png";
import hplogo from "../../assets/images/headphones_30px.png";
import ovenlogo from "../../assets/images/toaster_oven_30px.png";
import liplogo from "../../assets/images/lip_gloss_30px.png";
import mologo from "../../assets/images/motorcycle_30px.png";
import dresslogo from "../../assets/images/dress_30px.png";
import tlogo from "../../assets/images/t-shirt_30px.png";
import stacklogo from "../../assets/images/Stack of Money_30px.png";
import paylogo from "../../assets/images/split_payment_euro_30px.png";
import storelogo from "../../assets/images/online_store_30px.png";

import { NavLink } from "react-router-dom";
function Sidebar() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div
      className={`sidebar ${isShow ? "active" : ""}`}
      onClick={() => {
        setIsShow(!isShow);
      }}
    >
      <div className="category">
        <h3>Danh mục</h3>
        <div className="bookstore">
          <NavLink to={"/products"}>
            <img src={booklogo} alt="booklogo" />
            <h5>Nhà Sách Tiki</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink to={"/products"}>
            <img src={potlogo} alt="potlogo" />
            <h5>Nhà Cửa - Đời Sống</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink>
            <img src={phonelogo} alt="potlogo" />
            <h5>Điện Thoại - Máy Tính Bảng</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink>
            <img src={toylogo} alt="toylogo" />
            <h5>Đồ Chơi - Mẹ &amp; Bé</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink>
            <img src={hplogo} alt="headphonelogo" />
            <h5>Thiết Bị Số - Phụ Kiện Số</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink>
            <img src={ovenlogo} alt="ovenlogo" />
            <h5>Điện Gia Dụng</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink>
            <img src={liplogo} alt="liplogo" />
            <h5>Làm Đẹp - Sức Khỏe</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink>
            <img src={mologo} alt="motorlogo" />
            <h5>Ô Tô - Xe Máy - Xe Đạp</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink>
            <img src={dresslogo} alt="dresslogo" />
            <h5>Thời trang nữ</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink>
            <img src={tlogo} alt="t-shirtlogo" />
            <h5>Thời trang nam</h5>
          </NavLink>
        </div>
      </div>
      <div className="widget">
        <h3>Tiện ích</h3>
        <div className="bookstore">
          <NavLink>
            <img src={pocketlogo} alt="pocketlogo" />
            <h5>Ưu đãi thẻ, ví</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink>
            <img src={stacklogo} alt="stacklogo" />
            <h5>Đóng tiền, nạp thẻ</h5>
          </NavLink>
        </div>
        <div className="bookstore">
          <NavLink>
            <img src={paylogo} alt="paylaterlogo" />
            <h5>Mua trước, trả sau</h5>
          </NavLink>
        </div>
      </div>
      <div className="commerce">
        <NavLink to={"/order"}>
          <h3>
            <img src={storelogo} alt="storelogo" /> Bán hàng cùng Tiki
          </h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
