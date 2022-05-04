import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const [item, setitem] = useState({})
    const {itemid} = useParams()
   
    useEffect(()=>{
        fetch(`http://localhost:5000/item/${itemid}`)
        .then(response =>response.json())
        .then(data=> setitem(data))
    },[])
    return (
        <div>
            <h2>this is item details page{itemid}</h2>
            <p>{item.name}</p>
        </div>
    );
};

export default ItemDetails;