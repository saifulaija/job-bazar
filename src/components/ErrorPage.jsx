import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
   const {error, status}=useRouteError()

    return (
        <div className='bg-yellow-200 w-1/2 flex items-center p-20 justify-center relative'>
        <div>
        <h1 className='text-2xl font-semibold text-yellow-900'>{error.message}</h1>
            <p className='text-7xl text-red-500'>{status}</p>
           <Link to='/' className='absolute bottom-0'> <button className="text-white font-semibold  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md ">Back To Home</button></Link>
        </div>
        </div>
    );
};

export default ErrorPage;