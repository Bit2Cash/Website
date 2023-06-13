import React from "react";
import Slider from "react-slick";
import WOW from "wowjs";
class SimpleSlider extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        <div className="wow bounceInLeft" data-wow-duration="2s">
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-1.png")}
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-2.png")}
            ></img>
          </div>
        </div>
        <div className="wow bounceInUp" data-wow-duration="2s">
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-3.png")}
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-4.png")}
            ></img>
          </div>
        </div>
        <div className="wow bounceInDown" data-wow-duration="2s">
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-5.png")}
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-6.png")}
            ></img>
          </div>
        </div>
        <div className="wow bounceInRight" data-wow-duration="2s">
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-7.png")}
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-8.png")}
            ></img>
          </div>
        </div>
        <div className="wow bounceInLeft" data-wow-duration="2s">
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-1.png")}
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/aliados/aliado-2.png")}
            ></img>
          </div>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
