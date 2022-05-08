import React from 'react';
import { FaChartBar } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";

const CompanyCulture = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 container py-16 px-8 mx-auto my-8 bg-gray-300 rgba(240,240,240,0.95)'>
           <div className='text-center'>
               <FaChartBar className='text-6xl mx-auto' />
               <h2 className='text-2xl text-red-700 m-2'>Results Driven</h2>
               <p>
               Sed ut perspiciatis unde om nis natus error 
               sit volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai. 
               </p>
           </div>
           <div className='text-center'>
               <FaRoad className='text-6xl mx-auto' />
               <h2 className='text-2xl text-red-700 m-2'>Proven Technology</h2>
               <p>
               Sed ut perspiciatis unde om nis natus error sit volup
               atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.
               </p>
           </div>
           <div className='text-center'>
              <FaFlagCheckered className='text-6xl mx-auto' /> 
               <h2 className='text-2xl text-red-700 m-2'>Winning Culture</h2>
               <p>
                Sed ut perspiciatis unde om nis natus error sit
                volup atem accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.
               </p>
          </div>
          <div className='text-center'>
              <FaDeezer className='text-6xl mx-auto' /> 
               <h2 className='text-2xl text-red-700 m-2'>Top Performance</h2>
               <p>
               Sed ut perspiciatis unde om nis natus error sit volup atem
                accusant dolorem que laudantium. Totam aperiam, eaque ipsa quae ai.
               </p>
         </div> 
        </div>
    );
};

export default CompanyCulture;