import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'


const AddItem = () => {
   const { register, handleSubmit } = useForm();
  const onSubmit = data => {
   fetch(`http://localhost:5000/item`,{
       method: 'POST',
       headers: {
          'content-type': 'application/json'
   },
   body: JSON.stringify(data)
})
.then(res=>res.json())
.then(result=>{
    
})

    console.log(data)

  };
    return (
    <div className='w-48 mx-auto mt-8'>
       <form onSubmit={handleSubmit(onSubmit)}>
        <input className='input-border my-2' placeholder='Enter item name' {...register("name", { required: true, maxLength: 20 })} />
        <input className='input-border' placeholder='Enter image url link' {...register("picture")} />
        <textarea className='w-64 input-border my-2' placeholder='Enter description' {...register("description", { required: true, maxLength: 200 })} />
        <input className='bg-red-300' type="submit" value='Add item' />
    </form>
   
   </div>
    );
};

export default AddItem;