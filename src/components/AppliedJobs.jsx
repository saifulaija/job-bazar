import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../utility/FakeData";
import { cartAndProductData } from "../loader/getCart";
import AppliedItem from "./AppliedItem";

const AppliedJobs = () => {
  const array = useLoaderData();

  return (
    <div className="my-10">
      <h1 className="font-semibold text-xl text-center">Applied Jobs</h1>
      <div className="flex min-h-screen items-start justify-center  text-gray-900">
        <ul className="flex-col  space-y-8  m-3 gap-y-4 p-5">
          {array.map((product) => (
            <AppliedItem key={product.id} product={product}></AppliedItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppliedJobs;
