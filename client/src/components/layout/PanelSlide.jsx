import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg'

function PanelSlide() {
    const imgArray = [slide1, slide2, slide3];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <div className='panel-container'> 
            <Slider className='panel-slide' {...settings}>
                {imgArray.map((img, index) => (
                    <img key={index} src={img} alt={`Slide ${index + 1}`} />
                ))}
            </Slider>
        </div>
    );
}

export default PanelSlide;
