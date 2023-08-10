import React, { useRef } from "react";
import Slider from "react-slick";
import "./SliderSecondary.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickSliderProps } from "../../../../types/Types";
import { Link } from "react-router-dom";
const SliderSecondary: React.FC = () => {
  const sliderRef = useRef<SlickSliderProps>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-end mr-10 mb-3">
        <h2 className="h2">Top of Nike</h2>
        <div className="slider-buttons">
          <button
            onClick={() => {
              sliderRef.current?.slickPrev();
            }}
            className="btn btn-light"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() => {
              sliderRef.current?.slickNext();
            }}
            className="btn btn-light"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {/* {cardData &&
          cardData?.map((product) => {
            if (product.price > 400) {
              return (
                <div
                  className="hover-opacity-70 duration-300 cursor-pointer position-relative p-2"
                  key={product.id}
                >
                  <img src={product.image} alt="..." className="img-fluid" />
                  <Link
                    class="fa-solid fa-circle-info detail-product"
                    to={`/detail/${product.id}`}
                  />
                  <div className="image-description mt-4 d-flex flex-column">
                    <div className="d-flex flex-column">
                      <span>{product.name}</span>
                      <span className="mr-10">{product.price} $</span>
                    </div>
                    <span className="opacity-50">{product.type}</span>
                  </div>
                </div>
              );
            }
          })} */}
        <div className="hover-opacity-70 duration-300 cursor-pointer position-relative p-2">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
            alt="..."
            className="img-fluid"
          />
          <Link className="fa-solid fa-circle-info detail-product" to="" />
          <div className="image-description mt-4 d-flex flex-column">
            <div className="d-flex flex-column">
              <span className="text-warning">New Arrival</span>
              <span>ABD</span>
              <span className="mr-10">969 $</span>
            </div>
            <span className="opacity-50">sss</span>
          </div>
        </div>
        <div className="hover-opacity-70 duration-300 cursor-pointer position-relative p-2">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
            alt="..."
            className="img-fluid"
          />
          <Link className="fa-solid fa-circle-info detail-product" to="" />
          <div className="image-description mt-4 d-flex flex-column">
            <div className="d-flex flex-column">
              <span className="text-warning">New Arrival</span>
              <span>ABD</span>
              <span className="mr-10">969 $</span>
            </div>
            <span className="opacity-50">sss</span>
          </div>
        </div>
        <div className="hover-opacity-70 duration-300 cursor-pointer position-relative p-2">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
            alt="..."
            className="img-fluid"
          />
          <Link className="fa-solid fa-circle-info detail-product" to="" />
          <div className="image-description mt-4 d-flex flex-column">
            <div className="d-flex flex-column">
              <span className="text-warning">New Arrival</span>
              <span>ABD</span>
              <span className="mr-10">969 $</span>
            </div>
            <span className="opacity-50">sss</span>
          </div>
        </div>
        <div className="hover-opacity-70 duration-300 cursor-pointer position-relative p-2">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
            alt="..."
            className="img-fluid"
          />
          <Link className="fa-solid fa-circle-info detail-product" to="" />
          <div className="image-description mt-4 d-flex flex-column">
            <div className="d-flex flex-column">
              <span className="text-warning">New Arrival</span>
              <span>ABD</span>
              <span className="mr-10">969 $</span>
            </div>
            <span className="opacity-50">sss</span>
          </div>
        </div>
        <div className="hover-opacity-70 duration-300 cursor-pointer position-relative p-2">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
            alt="..."
            className="img-fluid"
          />
          <Link className="fa-solid fa-circle-info detail-product" to="" />
          <div className="image-description mt-4 d-flex flex-column">
            <div className="d-flex flex-column">
              <span className="text-warning">New Arrival</span>
              <span>ABD</span>
              <span className="mr-10">969 $</span>
            </div>
            <span className="opacity-50">sss</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSecondary;
