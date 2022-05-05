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
    return (
        <div>
           {
               items.map(item=>{
                return <table className="table-fixed container px-8 mx-auto">
                   <tbody>
                        <tr>
                            <td className="border  w-1/4">{item.name}</td>
                            <td className="border w-2/4">{item.description}</td>
                            <td className="border w-1/4"><BsTrash /></td>
                        </tr>
                       
                    </tbody>
                </table>  
               })
           }
        </div>
    );
};

export default ManageItems;



