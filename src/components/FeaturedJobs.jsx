import React, { useEffect, useState } from 'react';

const FeaturedJobs = ({job, showDetails}) => {
    const {jobTitle, CompanyAddress,companyName, salary, companyLogo, jobType} = job
  
        
 
    return (
        <div className='shadow-md border border-blue-200 p-6 w-[500px] h-[300px]'>
           <img className='w-40 h-20' src={companyLogo} alt="" />
           <h1>{jobTitle}</h1>
           <h1>{companyName}</h1>
           <p>{jobType}</p>
           <div>
             <p>{CompanyAddress}</p>
             <p>{salary}</p>
           </div>
           <button onClick={()=> showDetails(job) } className="text-white font-semibold  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md ">View Details</button>
           

        </div>
    );
};

export default FeaturedJobs;