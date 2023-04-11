import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import {
  GlobeAsiaAustraliaIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { addToDb, getStoredCart } from "../utility/FakeData";

const JobDetails = () => {
  const params = useParams();
  
  // const dynamic = useParams();
  //  console.log(dynamic);
  //  const [job, setJob]=useState({});

  //  useEffect(()=>{

  //     fetch(`/jobsData.json/${id}`)
  //     .then(res=>res.json())
  //     .then(data= console.log(data))

  //  },[])

  const jobsData = useLoaderData();
 
  const result = jobsData.filter((pd) => pd.id == params.id);
 

  const addToLocalStorage = () => {
    addToDb(params.id);
  };

  
  return (
    <div className="m-20 bg-[url('/src/images/vector.png')] object-cover bg-no-repeat ">
      <div>
        <h1 className="text-center text-4xl font-semibold">Job Details</h1>
      </div>

      <div className="grid grid-cols-2 space-x-28 mt-10">
        <div className=" auto-cols-max">
          <h4 className="text-xl font-bold">
            Job Description :{" "}
            <small className="font-normal">{result[0].jobDescription}</small>
          </h4>
          <h4 className="text-xl font-bold my-6">
            Job Resposiblities :{" "}
            <small className="font-normal">
              {" "}
              {result[0].jobResponsibility}
            </small>{" "}
          </h4>
          <h4 className="text-xl font-bold">
            Educational Requirement :{" "}
            <small className="font-normal">
              {" "}
              {result[0].educationRequirements}
            </small>{" "}
          </h4>
          <h4 className="text-xl font-bold mb-6">
            Experience :{" "}
            <small className="font-normal">{result[0].experience}</small>{" "}
          </h4>
        </div>

        <div className=" p-6 bg-yellow-100">
          <h1 className=" text-xl font-semibold">Job Details</h1>
          <div className=" text-red my-6">
            {" "}
            <hr />
          </div>

          <p> Salary : {result[0].salary} </p>
          <p>Job Title:{result[0].jobTitle}</p>
          <h1 className=" text-xl font-semibold">Contact Information</h1>
          <hr className="my-6" />

          <div className="flex  gap-3 justify-start items-center">
            <p>
              <span>
                {" "}
                <PhoneIcon className="w-4"></PhoneIcon>{" "}
              </span>{" "}
            </p>
            <p>Phone :{result[0].phoneNumber}</p>
          </div>
          <div className="flex  gap-3 justify-start items-center">
            <p>
              <span>
                {" "}
                <EnvelopeIcon className="w-4"></EnvelopeIcon>{" "}
              </span>{" "}
            </p>
            <p>Email : {result[0].email}</p>
          </div>

          <div className="flex  gap-3 justify-start items-center">
            <p>
              <span>
                {" "}
                <MapPinIcon className="w-4"></MapPinIcon>{" "}
              </span>{" "}
            </p>
            <p>Address : {result[0].companyAddress}</p>
          </div>
          <button onClick={addToLocalStorage} className="text-white font-semibold mt-10 w-[60%] bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md ">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
