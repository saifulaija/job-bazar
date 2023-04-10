import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

    const params=useParams();
    console.log(params.id);
    // const dynamic = useParams();
    //  console.log(dynamic);
    //  const [job, setJob]=useState({});

    //  useEffect(()=>{

    //     fetch(`/jobsData.json/${id}`)
    //     .then(res=>res.json())
    //     .then(data= console.log(data))

    //  },[])
 
    const jobsData = useLoaderData();
    console.log(jobsData);
    const result = jobsData.filter(pd=> pd.id == params.id);
    console.log(result);


    return (
        <div>
           <div>
           <h1 className="text-center text-4xl font-semibold" >Job Details</h1>
           </div>
        </div>
    );
};

export default JobDetails;