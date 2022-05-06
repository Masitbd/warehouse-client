import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([])
    const [isReload, setIsReload] = useState(false);

    useEffect(()=>{
       fetch('https://limitless-caverns-64590.herokuapp.com/item')
        //fetch('items.json')
        .then(response=>response.json())
        .then(data => setItems(data))
    },[isReload])

    return (
       <div className='container px-8 mx-auto'>
           <h2 className='text-3xl text-center my-5 font-bold text-orange-600'>New Arrivals In Our Showroom</h2>
            <div className="grid grid-cols-3 gap-4">
           {
               items.map(item=><Item key={item._id} item={item} setIsReload={setIsReload}
                isReload={isReload} />)
           }
        </div>
       </div>
    );
};

export default Items;