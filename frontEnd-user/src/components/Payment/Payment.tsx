import React, { useEffect, useState } from "react";
import "./Payment.css";
import Thanks from "../Modal/Thanks/Thanks";
import { useDispatch } from "react-redux";
import { IErrorsPayment } from "../../types/Types";
import { IOrderDetail, OrderDetail } from "../../models/OrderDetail";
import { Order } from "../../models/Order";
import { HistoryAPI, IHistory } from "../../models/History";
import { Products } from "../../models/Product";
import { updateState } from "../../store/slice/UpdateProSlice";

const Payment: React.FC = () => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errors, setErrors] = useState<IErrorsPayment>({});
  const dispatch = useDispatch();
  const [dataArr, setDataArr] = useState([]);
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const userValue = localStorage.getItem("user");
  const user = userValue ? JSON.parse(userValue) : undefined;
  useEffect(() => {
    Products.getProductMerger(user.id).then((data: any) =>
      setDataArr(data[0]?.OrderDetails)
    );
  }, []);

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userValue = localStorage.getItem("user");
    const user = userValue ? JSON.parse(userValue) : undefined;
    let isValid = true;
    const errors: IErrorsPayment = {};
    if (fullName.trim() === "") {
      isValid = false;
      errors.fullName = "Please enter your Full name";
    }

    if (email.trim() === "") {
      isValid = false;
      errors.email = "Please enter your email";
    } else if (!validateEmail(email)) {
      isValid = false;
      errors.email = "Please enter a valid email";
    }
    if (address.trim() === "") {
      isValid = false;
      errors.address = "Please enter your address";
    }

    if (phone.trim() === "") {
      isValid = false;
      errors.phone = "Please enter your phone";
    }
    setErrors(errors);
    if (isValid) {
      OrderDetail.getOrderDetailById(user.id).then(
        (dataDetail: IOrderDetail[]) => {
          dataDetail?.map(async (e: any) => {
            console.log(e.product_id);
            return Order.getOrderById(user.id)
              .then(async (order: any) => {
                let historyValue: IHistory = {
                  quantity: e.quantity,
                  size_product: e.size_product,
                  fullName: fullName,
                  email: email,
                  address: address,
                  phone: phone,
                  status: 2,
                  order_date: order[0].order_date,
                  order_id: Number(e.order_id),
                  product_id: Number(e.product_id),
                };
                HistoryAPI.createHistory(historyValue);
                const product: any = await Products.getProductById(
                  e.product_id
                );

                let updateInventory = product.quantity_inventory - e.quantity;

                Products.updateProduct(e.product_id, {
                  quantity_inventory: updateInventory,
                } as any);
              })
              .then(() => {
                // const updateInventory = {
                //   quantity_inventory:
                // }
                // Products.getProductById(e.product_id).then((data) => {
                //   console.log(data);
                // });
                // Products.updateProduct(e.product_id);
              });
          });
        }
      );
      // OrderDetail.deleteOrderDetailByHistory(user.id);
      dispatch(updateState());
      setIsShowForm(!isShowForm);
    }
  };

  const handleCloseForm = () => {
    setIsShowForm(false);
  };
  return (
    <div className="container">
      {isShowForm && (
        <Thanks dataArr={dataArr} handleCloseForm={handleCloseForm} />
      )}
      <form action="" onSubmit={handlePayment}>
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>
            <div className="inputBox">
              <span>full name :</span>
              <input
                type="text"
                placeholder="Truong Bao Hoang"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>
            <div className="inputBox">
              <span>email :</span>
              <input
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="inputBox">
              <span>address :</span>
              <input
                type="text"
                placeholder="room - street - locality"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </div>
            <div className="inputBox">
              <span>phone :</span>
              <input
                type="text"
                placeholder="0905485884"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>
        </div>
        <input
          type="submit"
          defaultValue="proceed to checkout"
          className="submit-btn"
          style={{ marginBottom: 20 }}
        />
      </form>
    </div>
  );
};

export default Payment;
