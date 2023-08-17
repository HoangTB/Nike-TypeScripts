import React, { useMemo } from "react";
import "./Thanks.css";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { OrderDetail } from "../../../models/OrderDetail";
import { useNavigate } from "react-router-dom";

const Thanks: React.FC<any> = ({ dataArr, handleCloseForm }) => {
  const navigate = useNavigate();
  const userValue = localStorage.getItem("user");
  const user = userValue ? JSON.parse(userValue) : undefined;
  const resultValue = useMemo(() => {
    const cartItems = dataArr.map((item: any) => {
      return {
        name: item.Product.name,
        quantity: item.quantity,
        unit_amount: {
          currency_code: "USD",
          value: item.Product.price,
        },
      };
    });
    console.log(cartItems);
    const total = cartItems?.reduce(
      (pre: any, urr: any) =>
        pre + Number(urr.unit_amount?.value * urr.quantity),
      0
    );
    console.log(total);
    return total;
  }, [dataArr]);
  const handlePaymentSuccess = () => {
    OrderDetail.deleteOrderDetailByHistory(user.id);
    navigate("/");
  };
  return (
    <div className="modal">
      <div className="modal-null" style={{ position: "relative" }}>
        <i
          className="fa-solid fa-xmark"
          style={{ right: 5, top: 5, position: "absolute", cursor: "pointer" }}
          onClick={() => handleCloseForm()}
        ></i>
        <p>Click here to pay !</p>

        <div className="modal-null-button">
          <PayPalButtons
            style={{
              layout: "horizontal",
              height: 48,
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: resultValue, // Sử dụng giá trị totalAmount ở đây
                    },
                    description: `Purchase at ${new Date().toLocaleString()}`,
                  },
                ],
              });
            }}
            onApprove={(_, actions): any => {
              return actions.order?.capture().then(handlePaymentSuccess);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
