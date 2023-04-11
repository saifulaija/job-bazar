import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./FeaturedJobs";
import { addToDb } from "../utility/FakeData";

const Home = () => {
  const jobsData = useLoaderData();

  const [data, setData] = useState([]);

  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      let response = await fetch("/jobcategory.json");
      let dataOne = await response.json();
      setData(dataOne);
    };

    getUsers();
  }, []);

  const showAllData = () => {
    setShowAll(false);
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto">
        <div className=" md:flex justify-between items-center md:px-0 p-4  my-4">
          <div>
            <h1 className="text-6xl tracking-wider font-semibold ">
              One Step <br /> Closer To Your <br />{" "}
              <span className="animate-text bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-black">
                Dream Job
              </span>
            </h1>
            <p className="py-8">
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all{" "}
              <br /> your job application from start to finish.
            </p>
            <button className="text-white font-semibold  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md ">
              Get Started
            </button>
          </div>
          <div>
            <img src="banner.png" alt="" />
          </div>
        </div>

        <div className=" my-20">
          <h1 className="text-center text-4xl font-semibold">
            Job Category List
          </h1>
          <p className="text-center font-normal mt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="md:flex  items-center justify-between space-x-4 mt-8">
            {data?.map((job) => (
              <JobCategory job={job} key={job.id}></JobCategory>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-center text-4xl font-semibold">Featured Jobs</h1>
          <p className="text-center font-normal my-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="grid md:grid-cols-2 nd:mb-5">
            {jobsData.slice(0, showAll ? 4 : jobsData.length).map((job) => (
              <FeaturedJobs job={job} key={job.id}></FeaturedJobs>
            ))}
          </div>

          {showAll && (
            <div className="text-center">
              <button
                onClick={showAllData}
                className="text-white font-semibold  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md "
              >
                Show All Jobs
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
