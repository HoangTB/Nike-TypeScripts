import React from "react";
import "./Detail.css";
import { ToastContainer } from "react-toastify";
const Detail: React.FC = () => {
  return (
    <div className="container1 forms">
      <ToastContainer />
      {/* {isLoading && <Loading />} */}
      <div className="container">
        {/* {products &&
          products.map((product) => {
            return (
              <div className="row list-image gap-6" key={product.id}>
                <div className="col-8">
                  <div className="row row-cols-1 row-cols-md-2 g-1 listimage-detail">
                    <div className="col">
                      <div className="card">
                        <img
                          src={product.Images[0].image_1}
                          className="card-img-top image-zoom"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img
                          src={product.Images[0].image_2}
                          className="card-img-top image-zoom"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img
                          src={product.Images[0].image_3}
                          className="card-img-top image-zoom"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img
                          src={product.Images[0].image_4}
                          className="card-img-top image-zoom"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 content-right-detail">
                  <div className="content-detail">
                    <h3 className="text-danger">{product.name}</h3>
                    <h5 className="fst-italic pb-2">{product.type}</h5>
                    <h5>{product.price} $</h5>
                  </div>
                  <table className="table-size">
                    <thead>
                      <tr>
                        <th colSpan={3} className="pb-2">
                          Select Size
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 35.5") ? "selected" : "td"
                          }
                        >
                          EU 35.5
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 36") ? "selected" : "td"
                          }
                        >
                          EU 36
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 36.5") ? "selected" : "td"
                          }
                        >
                          EU 36.5
                        </td>
                      </tr>
                      <tr>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 37") ? "selected" : "td"
                          }
                        >
                          EU 37
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 37.5") ? "selected" : "td"
                          }
                        >
                          EU 37.5
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 38") ? "selected" : "td"
                          }
                        >
                          EU 38
                        </td>
                      </tr>
                      <tr>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 39") ? "selected" : "td"
                          }
                        >
                          EU 39
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 39.5") ? "selected" : "td"
                          }
                        >
                          EU 39.5
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 40") ? "selected" : "td"
                          }
                        >
                          EU 40
                        </td>
                      </tr>
                      <tr>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 40.5") ? "selected" : "td"
                          }
                        >
                          EU 40.5
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 41") ? "selected" : "td"
                          }
                        >
                          EU 41
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 41.5") ? "selected" : "td"
                          }
                        >
                          EU 41.5
                        </td>
                      </tr>
                      <tr className="btn-list">
                        {product?.quantity_inventory < 0 ? (
                          <th colSpan={3}>
                            <p
                              className=""
                              style={{ textAlign: "center", color: "red" }}
                            >
                              The product is currently sold out.
                            </p>
                          </th>
                        ) : (
                          <th
                            colSpan={3}
                            id="add-cart"
                            className="btn-add-cart"
                          >
                            <button onClick={handleAddToCart}>
                              Add to Cart
                            </button>{" "}
                            <button>Favourite</button>
                          </th>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })} */}

        <div className="row list-image gap-6">
          <div className="col-8">
            <div className="row row-cols-1 row-cols-md-2 g-1 listimage-detail">
              <div className="col">
                <div className="card">
                  <img
                    src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
                    className="card-img-top image-zoom"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
                    className="card-img-top image-zoom"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
                    className="card-img-top image-zoom"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
                    className="card-img-top image-zoom"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 content-right-detail">
            <div className="content-detail">
              <h3 className="text-danger">aaa</h3>
              <h5 className="fst-italic pb-2">bbb</h5>
              <h5>999 $</h5>
            </div>
            <table className="table-size">
              <thead>
                <tr>
                  <th colSpan={3} className="pb-2">
                    Select Size
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EU 35.5</td>
                  <td>EU 36</td>
                  <td>EU 36.5</td>
                </tr>
                <tr>
                  <td>EU 37</td>
                  <td>EU 37.5</td>
                  <td>EU 38</td>
                </tr>
                <tr>
                  <td>EU 39</td>
                  <td>EU 39.5</td>
                  <td>EU 40</td>
                </tr>
                <tr>
                  <td>EU 40.5</td>
                  <td>EU 41</td>
                  <td>EU 41.5</td>
                </tr>
                <tr className="btn-list">
                  <th colSpan={3} id="add-cart" className="btn-add-cart">
                    <button>Add to Cart</button> <button>Favourite</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
