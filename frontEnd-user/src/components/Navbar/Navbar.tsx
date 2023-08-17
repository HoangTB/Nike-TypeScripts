import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Products } from "../../models/Product";
import { INavibarProps } from "../../types/Types";
const Navbar: React.FC<INavibarProps> = ({ onFilteredOptions }) => {
  const location = useLocation();
  const update = useSelector((state: any) => state.update);
  const [dataCart, setDataCart] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [isNaviCenterVisible, setIsNaviCenterVisible] = useState<boolean>(true);
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : undefined;
  useEffect(() => {
    if (user && user.id) {
      Products.getProductMerger(user.id)
        .then((product: any) => {
          setDataCart(product[0]?.OrderDetails);
        })
        .catch();
    }
  }, [update, location.pathname]);

  useEffect(() => {
    Products.getProduct().then((data: any) => setCardData(data)).catch;
  }, []);

  const handleFilterByType = async (types: any) => {
    const filteredOptions = cardData?.filter((option: any) =>
      types.includes(option.type)
    );
    console.log(filteredOptions);

    await onFilteredOptions(filteredOptions);
  };

  const toggleNaviCenterVisibility = () => {
    setIsNaviCenterVisible((prevState) => !prevState);
  };

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
          style={{ display: isNaviCenterVisible ? "block" : "none" }}
        >
          <ul className="nav nav-underline">
            <Link className="nav-link" to={"/product"}>
              <li
                id="list-nam"
                className=""
                role="button"
                onClick={() =>
                  handleFilterByType([
                    "Men's Shoes",
                    "Woman's Shoes",
                    "Kid's Shoes",
                  ])
                }
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
                onClick={() => handleFilterByType("Men's Shoes")}
              >
                men
              </li>
            </Link>

            <Link className="nav-link" to="/product">
              <li
                id="list-nam"
                className=""
                onClick={() => handleFilterByType("Woman's Shoes")}
              >
                women
              </li>
            </Link>

            <Link className="nav-link" to="/product">
              <li
                id="list-nam"
                className=""
                onClick={() => handleFilterByType("Kid's Shoes")}
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
              {user && dataCart ? dataCart.length : 0}
            </span>
          </Link>
          <Link
            className="fa-solid fa-list"
            to=""
            onClick={toggleNaviCenterVisibility}
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
