import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../utility/FakeData";
import { cartAndProductData } from "../loader/getCart";
import AppliedItem from "./AppliedItem";

const AppliedJobs = () => {
  const array = useLoaderData();

  const [menuItem, setMenuItem] = useState(array);
  const [buttons, setButtons] = useState([]);

  const filter = (button) => {
    const filterData = array.filter((item) => item.jobCategory[0] === button);

    setMenuItem(filterData);
  };

  const filterTwo = (buttonTwo) => {
    const filterDataTwo = array.filter(
      (item) => item.jobCategory[0] === buttonTwo
    );
    setMenuItem(filterDataTwo);
    console.log(buttonTwo);
  };
  console.log(menuItem);

  return (
    <div className="my-10">
      <h1 className="font-semibold text-xl text-center">Applied Jobs</h1>

      <div className="flex min-h-screen items-start justify-center  text-gray-900">
        <ul className="flex-col  space-y-8  m-3 gap-y-4 p-5">
          <div className=" text-end">
            <button
              onClick={() => filterTwo("Part Time")}
              className="border border-green-300 px-2 font-semibold me-3"
            >
              Part Time
            </button>
            <button
              onClick={() => filter("Remote")}
              className="border border-green-300 px-2 font-semibold me-3"
            >
              Remote
            </button>
          </div>

          {menuItem.map((product) => (
            <AppliedItem
              key={product.id}
              product={product}
              filter={filter}
              filterTwo={filterTwo}
            ></AppliedItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppliedJobs;
