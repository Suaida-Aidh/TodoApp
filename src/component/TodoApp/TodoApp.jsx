import React, { useState } from 'react';
import "./TodoApp.css";

function TodoApp() {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)
  const count = 3
  const addInput = e => setInput(e.target.value)
  

  const storeItems = e => {
    e.preventDefault();
    if (input.trim()) {
      if (editingIndex !== null) {

        const updatedList = [...items];
        updatedList[editingIndex] = input;
        setItems(updatedList);
        setEditingIndex(null); 
      } else if (items.length < count){
            setItems([...items, input]);
        }else{
            alert('add only 3 item')
        }


        
      
      setInput('');
    }
  };

  const deleteItem = index => {
    const updatedList = [...items];
    updatedList.splice(index, 1);
    setItems(updatedList);
  };

  const editItem = index => {
    setEditingIndex(index); 
    setInput(items[index]);
  };
//   const count => (){

//   }

  return (
    <div className="todo-container">
      <form className="input-section" onSubmit={storeItems}>
        <h1>TodoApp</h1>
        <input type="text" placeholder="Enter Items..." value={input} onChange={addInput}  />
      </form>

      <ul>
        {items.map((data, index) => (
          <li key={index}>
            <span>{data}</span>
            <span>
              <i className="fas fa-trash" onClick={() => deleteItem(index)}></i>
              <i className="far fa-edit" onClick={() => editItem(index)}></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;