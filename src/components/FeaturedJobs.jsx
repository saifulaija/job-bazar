import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FeaturedJobs = ({ job }) => {
  const {
    jobTitle,
    CompanyAddress,
    companyName,
    salary,
    companyLogo,
    jobType,
    id,
  } = job;

  return (
    <div className=" border space-x-3 mb-4 p-6 w-[500px] h-[300px]">
      <img className="w-40 h-20 bg-cover" src={companyLogo} alt="" />
      <h1>{jobTitle}</h1>
      <h1>{companyName}</h1>
      <p>{jobType}</p>
      <div>
        <p>{CompanyAddress}</p>
        <p>{salary}</p>
      </div>

      <Link to={`/job/${id}`}>
        <button className="text-white font-semibold  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md ">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
