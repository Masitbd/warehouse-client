import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([])
    const [isReload, setIsReload] = useState(false);

    useEffect(()=>{
        const uri = 'https://limitless-caverns-64590.herokuapp.com/item'
        //const uri=`http://localhost:5000/item`
       fetch(uri)
       
        //fetch('items.json')
        .then(response=>response.json())
        .then(data => setItems(data))
    },[isReload])

    return (
       <div className='container px-8 mx-auto'>
           <h2 className='text-5xl text-center my-8 font-bold text-orange-600'>New Arrivals In Our Showroom</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
           {
               items.map(item=><Item key={item._id} item={item} setIsReload={setIsReload}
                isReload={isReload} />)
           }
        </div>
       </div>
    );
};

export default Items;