import React from "react";
import { Link } from "react-router-dom";
import "./Navibar.css";
const Navibar: React.FC = () => {
  return (
    <div className="navibar">
      <div className="navibar-down">
        <div className="logo-left">
          <Link to="/home">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/projectshoes-cf747.appspot.com/o/673483.png?alt=media&token=fb222f9d-7894-4adb-80c8-10729ef5b496"
              alt=""
            />
          </Link>
        </div>
        <div
          className="navi-center"
          // style={{ display: isNaviCenterVisible ? "block" : "none" }}
        >
          <ul className="nav nav-underline">
            <Link className="nav-link" to={"/product"}>
              <li
                id="list-nam"
                className=""
                role="button"
                // onClick={() =>
                //   handleFilterByType([
                //     "Men's Shoes",
                //     "Woman's Shoes",
                //     "Kid's Shoes",
                //   ])
                // }
              >
                all shoes
              </li>
              {/* <ul class="dropdown-menu">
                <li className="menu-list">
                  <Menu options={newProducts} />
                </li>
              </ul> */}
            </Link>
            <Link className="nav-link" to="/product">
              <li
                id="list-nam"
                className=""
                // onClick={() => handleFilterByType("Men's Shoes")}
              >
                men
              </li>
            </Link>

            <Link className="nav-link" to="/product">
              <li
                id="list-nam"
                className=""
                // onClick={() => handleFilterByType("Woman's Shoes")}
              >
                women
              </li>
            </Link>

            <Link className="nav-link" to="/product">
              <li
                id="list-nam"
                className=""
                // onClick={() => handleFilterByType("Kid's Shoes")}
              >
                kid
              </li>
            </Link>
          </ul>
        </div>
        <div className="menu-right">
          <div className="right-search">
            <input type="text" placeholder="SEARCH" />
            <i className="fa-solid fa-magnifying-glass fa-fade" />
          </div>
          <Link className="fa-regular fa-heart" to="/favorites"></Link>
          <Link
            className="fa-solid fa-bag-shopping fa-bounce position-relative"
            to="/cart"
          >
            <span className="position-absolute">
              {/* {dataCart ? dataCart.length : 0} */}
            </span>
          </Link>
          <Link
            className="fa-solid fa-list"
            to="/cart"
            // onClick={toggleNaviCenterVisibility}
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default Navibar;
