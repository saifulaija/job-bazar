import React, { useEffect, useState } from 'react';

const FeaturedJobs = ({job}) => {
    const {jobTitle, CompanyAddress,companyName, salary, companyLogo} = job
  
        
 
    return (
        <div>
           <img src={companyLogo} alt="" />
           <h1>{jobTitle}</h1>
           

        </div>
    );
};

export default FeaturedJobs;