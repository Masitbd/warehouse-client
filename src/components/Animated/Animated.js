import React, { useState } from 'react';
import AnimatedNumber from "react-animated-number";

const Animated = () => {
  const [sold, setSold] = useState(0)
  const [amountSold, setAmountSold] = useState(0)
  const [oilChange, setOilChange] = useState(0)


    return (
        <div className=' container px-8 mx-auto bg-slate-200 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
     <div>
     <AnimatedNumber
        value={sold}
        style={
          {
            fontSize: 80
          }
        }
        formatValue={n => n.toFixed(0)}
        />
        <div onMouseMove={() => setSold(2100)} className=''><span className='text-red-600 text-2xl'>Cars Sold</span></div>
     </div>
     <div>
       <AnimatedNumber
        value={amountSold}
        style={
          {
            fontSize: 80
          }
        }
        formatValue={n => n.toFixed(0)}
        />
        <div onMouseMove={() => setAmountSold(75000)} className=''><span className='text-red-600 text-2xl'>Amount Sold</span></div>
     </div>
     
     <div>
       <AnimatedNumber
        value={oilChange}
        style={
          {
            fontSize: 80
          }
        }
        formatValue={n => n.toFixed(0)}
        />
        <div onMouseMove={() => setOilChange(3600)} className=''><span className='text-red-600 text-2xl'>Oil Change</span></div>
        
     </div> 
    
      
    </div>
    );
};

export default Animated;