import { NavLink } from 'react-router-dom'
import visalogo from '../../assets/images/Old_Visa_Logo.svg.png'
import masterlogo from '../../assets/images/MasterCard_Logo.svg.png'
import paypallogo from '../../assets/images/paypal.png'
import jcblogo from '../../assets/images/images.jpg'
import momologo from '../../assets/images/circle-logo-4fec3edddde4c441255fc90563a2ffda.png'
import vnpay from '../../assets/images/vnpay.png'
import facelogo from '../../assets/images/1aa2dfffb771804794266f7a239f0e3d.png'
import youtubelogo from '../../assets/images/youtube.png'
import zalogo from '../../assets/images/zalo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="block">
        <h4>Hỗ trợ khách hàng</h4>
        <p className="hotline">Hotline: <NavLink href="tel:1900-6035">1900-6035</NavLink><br/><span className="small-text">(1000 đ/phút, 8-21h kể cả T7, CN)</span></p>
        <NavLink to={'/'}>Các câu hỏi thường gặp</NavLink><br/>
        <NavLink rel="noreferrer" href="https://tiki.vn/lien-he/gui-yeu-cau" className="small-text" target="_blank">Gửi yêu cầu hỗ trợ</NavLink><br/>
        <NavLink rel="noreferrer" href="https://hotro.tiki.vn/s/article/lam-the-nao-de-toi-dat-hang-qua-website-tiki" className="small-text" target="_blank">Hướng dẫn đặt hàng</NavLink><br/>
        <NavLink rel="noreferrer" href="https://hotro.tiki.vn/s/article/cac-hinh-thuc-giao-hang-tai-tiki" className="small-text" target="_blank">Phương thức vận chuyển</NavLink><br/>
        <NavLink rel="noreferrer" href="https://hotro.tiki.vn/s/article/chinh-sach-doi-tra-san-pham" className="small-text" target="_blank">Chính sách đổi trả</NavLink><br/>
        <NavLink rel="noreferrer" href="https://tiki.vn/khuyen-mai/huong-dan-tra-gop" className="small-text" target="_blank">Hướng dẫn trả góp</NavLink><br/>
        <NavLink rel="noreferrer" href="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tu-nuoc-ngoai" className="small-text" target="_blank">Chính sách hàng nhập khẩu</NavLink>
        <p className="security">Hỗ trợ khách hàng: <NavLink href="mailto:hotro@tiki.vn">hotro@tiki.vn</NavLink></p>
        <p className="security">Báo lỗi bảo mật: <NavLink href="mailto:security@tiki.vn">security@tiki.vn</NavLink></p>
      </div>
      <div className="block">
        <h4>Về Tiki</h4>
        <NavLink rel="noreferrer" href="https://tiki.vn/thong-tin/gioi-thieu-ve-tiki" className="small-text" target="_blank">Giới thiệu Tiki</NavLink><br/>
        <NavLink rel="noreferrer" href="https://tiki.vn/blog/" className="small-text" target="_blank">Tiki Blog</NavLink><br/>
        <NavLink rel="nofollow noreferrer" href="https://tuyendung.tiki.vn/" className="small-text" target="_blank">Tuyển dụng</NavLink><br/>
        <NavLink rel="noreferrer" href="https://tiki.vn/bao-mat-thanh-toan" className="small-text" target="_blank">Chính sách bảo mật thanh toán</NavLink><br/>
        <NavLink rel="noreferrer" href="https://tiki.vn/bao-mat-thong-tin-ca-nhan" className="small-text" target="_blank">Chính sách bảo mật thông tin cá nhân</NavLink><br />
        <NavLink rel="nofollow noreferrer" href="https://hotro.tiki.vn/s/article/chinh-sach-giai-quyet-khieu-nai" className="small-text" target="_blank">Chính sách giải quyết khiếu nại</NavLink><br />
        <NavLink rel="nofollow noreferrer" href="https://hotro.tiki.vn/s/article/dieu-khoan-su-dung" className="small-text" target="_blank">Điều khoản sử dụng</NavLink><br />
        <NavLink rel="nofollow noreferrer" href="https://hotro.tiki.vn/s/article/tiki-xu-la-gi" className="small-text" target="_blank">Giới thiệu Tiki Xu</NavLink><br />
        <NavLink rel="noreferrer" href="https://tiki.vn/khuyen-mai/tiki-tiep-thi-lien-ket" className="small-text" target="_blank">Tiếp thị liên kết cùng Tiki</NavLink><br />
        <NavLink rel="noreferrer" href="https://tiki.vn/khuyen-mai/ban-hang-doanh-nghiep" className="small-text" target="_blank">Bán hàng doanh nghiệp</NavLink>
      </div>
      <div className="block">
        <h4>Hợp tác và liên kết</h4>
        <NavLink rel="noreferrer" href="https://tiki.vn/quy-che-hoat-dong-sgdtmdt" className="small-text" target="_blank">Quy chế hoạt động Sàn GDTMĐT</NavLink><br/>
        <NavLink rel="noreferrer" href="https://tiki.vn/khuyen-mai/ban-hang-cung-tiki" className="small-text" target="_blank">Bán hàng cùng Tiki</NavLink><br />
        <h4>Chứng nhận bởi</h4>
        <div className="certificate">
          <NavLink><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="bo-cong-thuong-2"/></NavLink>
          <NavLink><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" height="32" width="83" alt="bo-cong-thuong"/></NavLink>
          <NavLink><img src="https://images.dmca.com/Badges/dmca_protected_sml_120y.png?ID=388d758c-6722-4245-a2b0-1d2415e70127" alt="DMCA.com Protection Status" width="32" height="32"/></NavLink>
        </div>
      </div>
      <div className="block payment-information">
        <h4>Phương thức và thanh toán</h4>
        <NavLink><img src={visalogo} alt="visalogo"/></NavLink>
        <NavLink><img src={masterlogo} alt="mastercardlogo"/></NavLink>
        <NavLink><img src={paypallogo} alt="paypalogo"/></NavLink><br/>
        <NavLink><img src={jcblogo} alt="jcblogo"/></NavLink>
        <NavLink><img src={momologo} alt="momologo"/></NavLink>
        <NavLink><img src={vnpay} alt="vnpaylogo"/></NavLink>
      </div>
      <div className="block">
        <h4>Kết nối với chúng tôi</h4>
        <NavLink><img src={facelogo} alt="facebooklogo"/></NavLink>
        <NavLink><img src={youtubelogo} alt="youtubelogo" /></NavLink>
        <NavLink><img src={zalogo} alt="zalologo" style={{transform: 'scale(0.7)'}}/></NavLink>
        <h4>Tải ứng dụng trên điện thoại</h4>
        <div className="mobile">
          <NavLink><img style={{width: '80px', height: '80px'}} src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" width="80" height="80" alt="tiki-qr"/></NavLink>
          <NavLink><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" style={{width: '122px', height: '36px'}} alt="tiki-app-store"/></NavLink><br />
          <NavLink><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" style={{width: '122px', height: '36px'}} alt="tiki-google-play"/></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer
