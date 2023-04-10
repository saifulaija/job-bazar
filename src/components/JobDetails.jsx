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
        <div className='m-20'>
           <div>
           <h1 className="text-center text-4xl font-semibold" >Job Details</h1>
           </div>

           <div>
            <div>
                <h4 className='text-xl font-bold'>Job Description : <small className='font-normal'>{result[0].jobDescription}</small></h4>
                <h4 className='text-xl font-bold my-6'>Job Resposiblities : <small className='font-normal'> {result[0].jobResponsibility}</small> </h4>
                <h4 className='text-xl font-bold'>Educational Requirement : <small className='font-normal'> {result[0].educationRequirements}</small> </h4>
                <h4 className='text-xl font-bold mb-6'>Experience : <small className='font-normal'>{result[0].experience}</small> </h4>
            </div>
            <div>

            </div>
           </div>
        </div>
    );
};

export default JobDetails;