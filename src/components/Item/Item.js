import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const {_id, name, picture, description} = item
    const navigate = useNavigate()

    const handleItemDetails =(id)=>{
     navigate(`/itemdetails/${id}`)
    }
    return (
      
          <div className='shadow-2xl border-2'>
          <img className='h-60 w-full' src={picture} alt="" />
            <p>{name}</p>
            <p>{description}</p>
            <button onClick={()=>handleItemDetails(_id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
           </button>
          </div>
      
    );
};

export default Item;