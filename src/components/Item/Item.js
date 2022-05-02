import React from 'react';

const Item = ({item}) => {
    const {id, name, picture, description} = item
    return (
      
          <div className='shadow-2xl border-2'>
          <img className='h-60 w-full' src={picture} alt="" />
            <p>{name}</p>
            <p>{description}</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
           </button>
          </div>
      
    );
};

export default Item;