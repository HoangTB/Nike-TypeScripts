import React from "react";

const Price = () => {
  return (
    <div className="p-3 d-flex flex-column">
      <h4>Filter by Price</h4>
      <div className="mt-2 mt-4 cursor-pointer btn btn-light">
        <p className="ml-1 m-0">179 $ - 329 $</p>
      </div>
      <div className="mt-4 cursor-pointer btn btn-light">
        <p className="ml-1 m-0">329 $ - 499 $</p>
      </div>

      <div className="mt-2 mt-4 cursor-pointer btn btn-light">
        <p className="ml-1 m-0">Above 499 $</p>
      </div>
    </div>
  );
};

export default Price;
