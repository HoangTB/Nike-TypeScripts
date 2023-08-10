import React from "react";
import { Link } from "react-router-dom";
import "../ManProducts.css";
const Card: React.FC = () => {
  return (
    <>
      <div className="cursor-pointer position-relative">
        <Link className="fa-solid fa-circle-info detail-product-detail" to="" />
        <img
          className="mb-2 image-add"
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
          alt="..."
          style={{ width: "500px" }}
        />
        <div className="d-flex flex-column">
          {/* {e?.new === 1 ? <span className="text-warning">New Arrival</span> : ""} */}
          <span>hahah</span>
          <span className="text-muted">bbbbb</span>
          <span className="mt-2 ">999 $</span>
        </div>
      </div>
      <div className="cursor-pointer position-relative">
        <Link className="fa-solid fa-circle-info detail-product-detail" to="" />
        <img
          className="mb-2 image-add"
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
          alt="..."
          style={{ width: "500px" }}
        />
        <div className="d-flex flex-column">
          {/* {e?.new === 1 ? <span className="text-warning">New Arrival</span> : ""} */}
          <span>hahah</span>
          <span className="text-muted">bbbbb</span>
          <span className="mt-2 ">999 $</span>
        </div>
      </div>
      <div className="cursor-pointer position-relative">
        <Link className="fa-solid fa-circle-info detail-product-detail" to="" />
        <img
          className="mb-2 image-add"
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
          alt="..."
          style={{ width: "500px" }}
        />
        <div className="d-flex flex-column">
          {/* {e?.new === 1 ? <span className="text-warning">New Arrival</span> : ""} */}
          <span>hahah</span>
          <span className="text-muted">bbbbb</span>
          <span className="mt-2 ">999 $</span>
        </div>
      </div>
      <div className="cursor-pointer position-relative">
        <Link className="fa-solid fa-circle-info detail-product-detail" to="" />
        <img
          className="mb-2 image-add"
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
          alt="..."
          style={{ width: "500px" }}
        />
        <div className="d-flex flex-column">
          {/* {e?.new === 1 ? <span className="text-warning">New Arrival</span> : ""} */}
          <span>hahah</span>
          <span className="text-muted">bbbbb</span>
          <span className="mt-2 ">999 $</span>
        </div>
      </div>
    </>
  );
};

export default Card;
