import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Home from '../Home/Home';

const ItemDetails = () => {
    const [item, setitem] = useState({})
    const {itemid} = useParams()
   
    useEffect(()=>{
        fetch(`https://limitless-caverns-64590.herokuapp.com/item/${itemid}`)
        .then(response =>response.json())
        .then(data=> setitem(data))
    },[])

    console.log(item)
    return (
        <div className='w-96 mx-auto mt-16'>
            <div class="p-16 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
           <img src={item.picture} alt=""/>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
      </div>
       <Link to='/' elemement={<Home />}>
       <button className='focus:outline-none mt-2 text-white bg-red-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900' >Back to home page</button>
       </Link>
        </div>
    );
};

export default ItemDetails;