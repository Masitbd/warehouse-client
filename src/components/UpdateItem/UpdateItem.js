import React, { useEffect, useState } from 'react';
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      width:'400px',
      backgroundColor: 'rgba(255, 191, 71, 0.5)',
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");

  export default function UpdateItem({ id, setIsReload, isReload }) {
  
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [item, setItem] = useState({})

  useEffect(()=>{
    const uri = `https://limitless-caverns-64590.herokuapp.com/item/${id}`
    fetch(uri)
    .then(res => res.json())
    .then(data => setItem(data))
  },[])

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log("hello");
    const name = event.target.name.value;
    const description = event.target.textData.value;
  
    console.log(name, description);
    const uri = `https://limitless-caverns-64590.herokuapp.com/item/${id}`
    //const uri=`http://localhost:5000/item/${id}`
    fetch(uri, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    })
      .then((res) => res.json())
      .then((data) => setIsReload(!isReload));
      event.target.name.value=''
      event.target.textData.value=''
  };

    return (
        <div>
             <button onClick={openModal} className="relative -top-[47px] left-[120px]  bottom-0  color-801336 btn-sm btn
             bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
             ">
    
            {/*  position: relative;
               left: 120px;
             top: -30px; */}
        Update
      </button>
      <Modal
       isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className=''>
        
              <FaWindowClose className='-w-16 -mt-6' />
        </button>
        <div className='text-blue-500 font-bold text-2xl'>Update Record Form</div>
        <div className=" ">
          <form className="container " onSubmit={handleUpdate}>
            <div className="input-group mb-3 mt-5">
              <input
                type="text"
                className="form-control border border-red-500"
                placeholder="name"
                aria-label="name"
                name="name"
                defaultValue={item.name}
              />
            </div>

            <div className="input-group">
              <textarea
                className="form-control border border-red-500 w-60 h-60"
                aria-label="With textarea"
                placeholder='description'
                name="textData"
                defaultValue={item.description}
              ></textarea>
            </div>
            <div className="mt-4">
              <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" />
            </div>
          </form>
        </div>
      </Modal>
        </div>
    );
};

