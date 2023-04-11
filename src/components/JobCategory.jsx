import React from "react";

const JobCategory = ({ job }) => {
  const { category, image, jobsAvailable } = job;

  return (
    <div className=" flex-col  border bg-gray-100 rounded-lg shadow-md p-8 my-4  md:w-48 h-48   ">
      <img className="w-10 h-10 items-start object-cover" src={image} alt="" />
      <h1 className="text-xl font-semibold mt-6">{category}</h1>
      <p className="font-light">{jobsAvailable} jobs Available</p>
    </div>
  );
};

export default JobCategory;
