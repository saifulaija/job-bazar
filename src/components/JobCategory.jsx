import React from 'react';

const JobCategory = ({job}) => {

    const {category, image, jobsAvailable } = job;
     
     
    return (
        <div className=' flex-col space-y-2 border bg-gray-200 rounded-lg  border-white shadow-lg  '>
            <img className='w-30 h-30 items-start object-cover' src={image} alt="" />
            <h1 className='text-xl font-semibold mt-6'>{category}</h1>
            <p className='font-light'>{jobsAvailable} jobs Available</p>
        </div>
    );
};

export default JobCategory;