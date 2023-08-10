import React from "react";
import "./Cart.css";
import { ToastContainer } from "react-toastify";
const Cart: React.FC = () => {
  return (
    <div className="shopping-cart">
      <ToastContainer />
      <div className="">
        <div className="content">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="items">
                <div className="row gap-3">
                  {/* {dataCart &&
                    dataCart.map((data) => {
                      quantityTotal += data.quantity;

                      priceTotal += data.Product.price * data.quantity;

                      return (
                        <div className="d-flex align-items-center justify-content-between">
                          <i
                            className="fa-solid fa-trash fs-5 cursor-pointer"
                            onClick={() => handleDelete(data.product_id)}
                          />
                          <div className="col-md-2">
                            <img
                              className="img-fluid mx-auto d-block image"
                              src={data?.Product?.image}
                              style={{ width: "100px" }}
                            />
                          </div>
                          <div className="col-md-8 d-flex ">
                            <div className="row align-items-center justify-content-between w-100">
                              <div className="col-md-5 product-name">
                                <div className="product-name ">
                                  <Link to={`/detail/${data.product_id}`}>
                                    {data.Product.name}
                                  </Link>
                                  <div className="product-info">
                                    <div>
                                      <span className="value">
                                        {data.Product.type}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <div>
                                      <span className="value">
                                        {data.size_product}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 quantity">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  value={data.quantity}
                                  onChange={(e) =>
                                    handleClickSize(e, data.product_id)
                                  }
                                >
                                  {" "}
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                </select>
                              </div>

                              <div className="col-md-4 price fw-bold">
                                <span className="">
                                  {(
                                    data.Product.price * data.quantity
                                  ).toLocaleString()}{" "}
                                  $
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })} */}
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="summary total-Cart">
                <div className="content-total">
                  <h3>Summary</h3>
                  <div className="d-flex justify-content-between">
                    <span className="text">Quantity: </span>
                    <span className="price">
                      {/* <b>{quantityTotal}</b> */}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between border-top mt-3 pt-3">
                    <span className="text">Total price: </span>
                    <span className="price">
                      {/* <b> {priceTotal.toLocaleString("de-De")} $</b> */}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="btn-checkout"
                    // onClick={handleToPayment}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
