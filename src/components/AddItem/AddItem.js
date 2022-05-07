import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'


const AddItem = () => {
   const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const uri=`http://localhost:5000/item`
    //const uri=`https://limitless-caverns-64590.herokuapp.com/item`
   fetch(uri,{
       method: 'POST',
       headers: {
          'content-type': 'application/json'
   },
   body: JSON.stringify(data)
})
.then(res=>res.json())
.then(result=>{
    
})
   handleSubmit({})
    console.log(data)

  };
    return (
    <div className='w-80 mx-auto mt-8  border border-blue-500 bg-slate-300'>
       <form className='pl-2' onSubmit={handleSubmit(onSubmit)}>
        <input className=' w-64 input-border my-2' placeholder='Enter item name' {...register("name", { required: true, maxLength: 20 })} />
        <input className='w-64 input-border' placeholder='Enter image url link' {...register("picture")} />
        <textarea className='w-64 h-48 input-border my-2' placeholder='Enter description' {...register("description", { required: true, maxLength: 200 })} />
        <input className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2' type="submit" value='Add item' />
    </form>
   
   </div>
    );
};

export default AddItem;