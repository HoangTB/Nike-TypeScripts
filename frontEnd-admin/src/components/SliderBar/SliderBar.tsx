import React from "react";
import "./SliderBar.css";
import { Link, useLocation } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
const SliderBar: React.FC = () => {
  const router = useLocation();
  return (
    <div className="sidebar-wrappers">
      <div className="logo">
        <Link className="logo-admin" to="/home">
          <img
            className="sidenav-logo-admin"
            src="https://firebasestorage.googleapis.com/v0/b/projectshoes-cf747.appspot.com/o/673483.png?alt=media&token=fb222f9d-7894-4adb-80c8-10729ef5b496"
          />
        </Link>
      </div>
      <div className="group-btn">
        <ul className="list-manager">
          <li className={router.pathname === "/user-manager" ? "active" : ""}>
            <Link
              to={"/user-manager"}
              className={router.pathname === "/user-manager" ? "active" : ""}
            >
              <span>User Manager</span>
            </Link>
          </li>
          <li
            className={router.pathname === "/product-manager" ? "active" : ""}
          >
            <Link
              to={"/product-manager"}
              className={router.pathname === "/product-manager" ? "active" : ""}
            >
              <span>Product Manager</span>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/order-manager"
                ? "active position-relative"
                : "position-relative"
            }
          >
            <Link
              to={"/order-manager"}
              className={router.pathname === "/order-manager" ? "active" : ""}
            >
              <span className="position-absolute quantity-history fa-bounce">
                {/* {quantityHistory ? quantityHistory.length : 0} */}
              </span>

              <span>Order Manager</span>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/revenue-manager"
                ? "active position-relative"
                : "position-relative"
            }
          >
            <Link
              to={"/revenue-manager"}
              className={router.pathname === "/revenue-manager" ? "active" : ""}
            >
              <span>Revenue</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sign-out">
        <button className="btn-sign-out">
          <BiLogOut />
          <span>Logout</span>
        </button>
        <b>
          <span>{/* {admin.lastName} {admin.firstName} */}</span>
        </b>
      </div>
    </div>
  );
};

export default SliderBar;
