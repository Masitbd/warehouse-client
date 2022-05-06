import React, { useEffect, useState } from 'react';
import Modal from "react-modal";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
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
    const uri = `http://localhost:5000/item/${id}`
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
    const uri = `http://localhost:5000/item/${id}`
    fetch(uri, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    })
      .then((res) => res.json())
      .then((data) => setIsReload(!isReload));
  };

    return (
        <div>
             <button onClick={openModal} className="color-801336 btn-sm btn">
    
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
        <button onClick={closeModal} className="btn btn-sm btn-warning">
          close
        </button>
        <div>Please insert your text</div>
        <div className=" p-3 color-4D4C7D">
          <form className="container " onSubmit={handleUpdate}>
            <div className="input-group mb-3 mt-5">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                aria-label="name"
                name="name"
                defaultValue={item.name}
              />
            </div>

            <div className="input-group">
              <textarea
                className="form-control"
                aria-label="With textarea"
                placeholder='description'
                name="textData"
                defaultValue={item.description}
              ></textarea>
            </div>
            <div className="mt-4">
              <input type="submit" value="submit" className="btn btn-info" />
            </div>
          </form>
        </div>
      </Modal>
        </div>
    );
};

