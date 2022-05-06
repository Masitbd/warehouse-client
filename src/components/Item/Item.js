import React from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateItem from '../UpdateItem/UpdateItem'

const Item = ({item, setIsReload, isReload}) => {
    const {_id, name, picture, description} = item
    const navigate = useNavigate()

    const handleItemDetails =(id)=>{
     navigate(`/itemdetails/${id}`)
    }
    return (
      
          <div className='shadow-2xl border-2 h-96'>
          <img className='h-60 w-full' src={picture} alt="" />
            <p>{name}</p>
            <p>{description.substr(0,200)}</p>
            <button onClick={()=>handleItemDetails(_id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Details
           </button>
          {/*  <button onClick={()=>handleItemDetails(_id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
           </button> */}
           <UpdateItem setIsReload={setIsReload} isReload={isReload} id={item._id}/>
          </div>
      
    );
};

export default Item;