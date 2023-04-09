import React from 'react';

const JobCategory = ({job}) => {

    const {category, image, jobsAvailable } = job;
     
     
    return (
        <div className='px-6 border bg-gray-200 rounded-lg pt-4 border-white shadow-lg w-[300px] h-[290px] mt-10 '>
            <img className='w-30 h-30 items-start' src={image} alt="" />
            <h1 className='text-xl font-semibold mt-6'>{category}</h1>
            <p className='font-light'>{jobsAvailable} jobs Available</p>
        </div>
    );
};

export default JobCategory;