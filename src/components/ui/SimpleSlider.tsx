import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SimpleSliderProps {
  children: React.ReactNode;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SimpleSlider;
