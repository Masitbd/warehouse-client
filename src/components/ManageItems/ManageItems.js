import React, { useEffect, useState } from 'react';
import { BsTrash } from "react-icons/bs";

const ManageItems = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
       fetch('https://limitless-caverns-64590.herokuapp.com/item')
        //fetch('items.json')
        .then(response=>response.json())
        .then(data => setItems(data))
    },[])

    const handleDeleteItem=(id)=>{
        const proced = window.confirm('Are you sure')
        if(proced){
            fetch(`https://limitless-caverns-64590.herokuapp.com/item/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                   const newItem = items.filter(item=>item._id !==id)
                   setItems(newItem) 
            })
        }
      }
    return (
       <div className='my-6 px-8'>
           {
               items.map(item=>{
                return <table className="table-fixed container px-8 mx-auto">
                   <tbody>
                        <tr className='bg-slate-300'>
                            <td className="border pl-2 w-1/4">{item.name}</td>
                            <td className="border pl-2 w-2/4">{item.description}</td>
                            <td onClick={()=>handleDeleteItem(item._id)}
                            className="border px-2 text-red-500 cursor-pointer  w-1/4"><BsTrash /></td>
                        </tr>
                       
                    </tbody>
                </table>  
               })
           }
        </div>
    );
};

export default ManageItems;



