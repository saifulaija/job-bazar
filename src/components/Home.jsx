import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCategory from "./JobCategory";

const Home = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center  my-4">
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
        <h1 className="text-center text-4xl font-semibold">Job Category List</h1>
        <p className="text-center font-normal mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
         <div className="flex items-center justify-between space-x-4">
         {
            data.map(job=><JobCategory job={job} key={job.id}></JobCategory>)
          }
         </div>
       </div>
    </div>
  );
};

export default Home;
