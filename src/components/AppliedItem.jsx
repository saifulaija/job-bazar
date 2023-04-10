import React from "react";
import { MapPinIcon,BriefcaseIcon } from '@heroicons/react/24/solid'

const AppliedItem = ({ product }) => {
  return (
    <div>
      <li className="flex flex-col p-6 sm:flex-row sm:justify-between w-[700px] border">
        <div className="flex w-full space-x-4 items-center sm:space-x-4">
          <img
            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
            src={product.companyLogo}
            alt="Polaroid camera"
          />
          <div className="flex  justify-around w-full items-center pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                  {product.jobTitle}
                </h3>
                <p>{product.companyName}</p>
               <div className="flex space-x-3">
               <div className="flex items-center">
                    <p><span><MapPinIcon className="w-4 text-gray-400"></MapPinIcon></span></p>
                    <p>{product.companyAddress}</p>
                </div>
                <div className="flex items-center my-4">
                    <BriefcaseIcon className="w-4 text-gray-400"></BriefcaseIcon>
                    {product.salary}
                </div>
               </div>
              </div>
            </div>
            <div>
              <button className="text-white font-semibold  bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-md " > Details</button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default AppliedItem;
