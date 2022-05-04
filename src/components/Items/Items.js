import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
       fetch('http://localhost:5000/item')
        //fetch('items.json')
        .then(response=>response.json())
        .then(data => setItems(data))
    },[])

    return (
       <div className='container px-8 mx-auto'>
           <h2 className='text-3xl text-center my-5 font-bold text-orange-600'>Items List</h2>
            <div className="grid grid-cols-3 gap-4">
           {
               items.map(item=><Item key={item._id} item={item} />)
           }
        </div>
       </div>
    );
};

export default Items;