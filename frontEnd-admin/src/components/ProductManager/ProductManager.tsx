import React, { useEffect, useRef, useState } from "react";
import "./ProductManager.css";
import { IProducts, ProductsServer } from "../../models/Product";
const ProductManager: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadings, setIsLoadings] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const idDelete = useRef();
  const idUpdate = useRef();
  const [isShowFormEdit, setIsShowFormEdit] = useState(false);
  const [isShowFormCreate, setIsShowFormCreate] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);
  const [products, setProduct] = React.useState<Array<IProducts>>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 10;
  useEffect(() => {
    ProductsServer.getProduct()
      .then((product) => setProduct(product))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Tính toán sản phẩm hiển thị trên trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const handleDeleteProduct = async (id: number) => {
    idDelete.current = id;
    setIsShow(!isShow);
    setIsLoadings(false);
  };

  const handleCancel = () => {
    setIsShow(false);
    setIsLoadings(false);
  };
  const handleLoading = (id: number) => {
    setIsLoading(!isLoading);
    setIsLoadings(false);
  };

  const handleEdit = async (id: number) => {
    setIsShowFormEdit(!isShowFormEdit);
    idUpdate.current = id;
    const values = await Products.getProductById(id);
    setDataEdit(values);

    setIsLoadings(false);
  };

  const handleCreate = () => {
    setIsShowFormCreate(!isShowFormCreate);

    setIsLoadings(false);
  };
  return (
    <div className="content-user">
      {/* {isLoadings && <Loading />}
      {isShow && (
        <ConfirmDelete
          handleCancel={handleCancel}
          idDelete={idDelete.current}
          handleLoading={handleLoading}
        />
      )}
      {isShowFormEdit && (
        <FormUpdate
          handleEdit={handleEdit}
          idUpdate={idUpdate.current}
          dataEdit={dataEdit}
          handleLoading={handleLoading}
        />
      )}
      {isShowFormCreate && (
        <FormCreate handleCreate={handleCreate} handleLoading={handleLoading} />
      )} */}
      <div className="table-content">
        <div className="wrappers-title">
          <h1 className="title-page">PRODUCT-MANAGER</h1>
          <button className="btn btn-info btn-create">CREATE</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>TYPE</th>
              <th>PRICE</th>
              <th>QUANTITY INVENTORY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts &&
              currentProducts?.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      <img
                        title="..."
                        src={product.image}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.type}</td>
                    <td>$ {product.price}</td>
                    <td>{product.quantity_inventory}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        // onClick={() => handleEdit(product.id)}
                      >
                        EDIT
                      </button>{" "}
                      {""}{" "}
                      <button
                        className="btn btn-danger"
                        // onClick={() => handleDeleteProduct(product.id)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {Array.from({
          length: Math.ceil(products.length / productsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            className={`btn btn-pagination ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;
