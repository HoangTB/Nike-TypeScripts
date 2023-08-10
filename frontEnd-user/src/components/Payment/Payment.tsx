import React from "react";
import "./Payment.css";
const Payment: React.FC = () => {
  return (
    <div className="container">
      {/* {isShowForm && <Thanks />} */}
      <form action="">
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>
            <div className="inputBox">
              <span>full name :</span>
              <input
                type="text"
                placeholder="Truong Bao Hoang"
                // value={fullName}
                // onChange={(e) => setFullName(e.target.value)}
              />
              {/* {errors.fullName && <p className="error">{errors.fullName}</p>} */}
            </div>
            <div className="inputBox">
              <span>email :</span>
              <input
                type="email"
                placeholder="example@example.com"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              {/* {errors.email && <p className="error">{errors.email}</p>} */}
            </div>
            <div className="inputBox">
              <span>address :</span>
              <input
                type="text"
                placeholder="room - street - locality"
                // value={address}
                // onChange={(e) => setAddress(e.target.value)}
              />
              {/* {errors.address && <p className="error">{errors.address}</p>} */}
            </div>
            <div className="inputBox">
              <span>phone :</span>
              <input
                type="text"
                placeholder="0905485884"
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
              />
              {/* {errors.phone && <p className="error">{errors.phone}</p>} */}
            </div>
          </div>
        </div>
        <input
          type="submit"
          defaultValue="proceed to checkout"
          className="submit-btn"
        />
      </form>
    </div>
  );
};

export default Payment;
