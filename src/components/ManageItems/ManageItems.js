import React, { useEffect, useState } from 'react';
import { BsTrash } from "react-icons/bs";

const ManageItems = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
       fetch('http://localhost:5000/item')
        //fetch('items.json')
        .then(response=>response.json())
        .then(data => setItems(data))
    },[])

    const handleDeleteItem=(id)=>{
        const proced = window.confirm('Are you sure')
        if(proced){
            fetch(`http://localhost:5000/item/${id}`,{
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
       <div>
           {
               items.map(item=>{
                return <table className="table-fixed container px-8 mx-auto">
                   <tbody>
                        <tr>
                            <td className="border  w-1/4">{item.name}</td>
                            <td className="border w-2/4">{item.description}</td>
                            <td onClick={()=>handleDeleteItem(item._id)} className="border cursor-pointer  w-1/4"><BsTrash /></td>
                        </tr>
                       
                    </tbody>
                </table>  
               })
           }
        </div>
    );
};

export default ManageItems;



