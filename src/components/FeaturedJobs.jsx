import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const FeaturedJobs = ({ job }) => {
  const {
    jobTitle,
    companyAddress,
    companyName,
    salary,
    companyLogo,
    jobType,
    id,
  } = job;

  return (
    <div className=" border space-x-3 mb-4 p-6 md:w-[500px] h-[300px]">
      <img className="w-40 h-20 bg-cover" src={companyLogo} alt="" />
      <h1 className="text-xl font-bold">{jobTitle}</h1>
      <h1 className="text-gray-500">{companyName}</h1>
      <p>{jobType}</p>
      <div className="my-4">
        <button className="border border-blue-300 px-1 text-blue-400 font-semibold ">
          {job.jobCategory[0]}
        </button>
        <button className="border border-blue-300 px-1 text-blue-400 font-semibold ml-5 ">
          {job.jobCategory[1]}
        </button>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <p>
            <MapPinIcon className="w-4 text-gray-400"></MapPinIcon>
          </p>
          <p className="text-xs"> {companyAddress}</p>
        </div>
        <div className="flex items-center">
          <CurrencyDollarIcon className="w-4 text-gray-400"></CurrencyDollarIcon>
          <p className="text-xs">{salary}</p>
        </div>
      </div>

      <Link to={`/job/${id}`}>
        <button className="text-white font-semibold  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md mt-3 ">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
