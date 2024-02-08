import {React, useState} from 'react'
import { FaTrash } from "react-icons/fa";
import AddItem from './AddItem';
import SearchItem from './searchItem';

const TodoList = () => {
    const defaultTodoList = [
        {
            id:1,
            checked:true,
            todoName: "Learing Html",
        },
        {
            id:2,
            checked:true,
            todoName: "Learing CSS",
        },
        {
            id:3,
            checked:true,
            todoName: "Learing Javascript",
        },

    ];
    const LocalTodoList = localStorage.getItem("todoListLocal");
    // console.log(JSON.parse(LocalTodoList).length);
    const ListItem = JSON.parse(LocalTodoList).length >0 ?  JSON.parse(LocalTodoList) : defaultTodoList;
    
    const [todoItems, setTodoItems]  = useState(ListItem);
    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');
    
    const addItem = (todoName) =>{
       
        const id = todoItems.length ? todoItems[todoItems.length -1 ].id+1 : 1
        const addNewItem = {id,checked:false,todoName};
        const listItems = [...todoItems, addNewItem];
       
        setTodoItems(listItems);
        localStorage.setItem("todoListLocal",JSON.stringify(listItems));


    }
    
    function CheckChange(id){
        const lists = todoItems.map((item) =>  ( item.id === id ? {...item, checked:!item.checked} : item))
        setTodoItems(lists);
        localStorage.setItem("todoListLocal",JSON.stringify(lists));
           
    }
    function handleDelete(id){
        const lists = todoItems.filter((item) => ( item.id !== id ))
        setTodoItems(lists);
        localStorage.setItem("todoListLocal",JSON.stringify(lists));
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
       
       
        if(!newItem) return;
      
        addItem(newItem);
        setNewItem('')
    } 
  return (
    <section>
        <AddItem
        newItem={newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
        />
       
         {todoItems.length ? 
        <ul>
           
            {todoItems.map((item) => { return(
                <li className="item" key={item.id}>
                    <input type="checkbox" id={item.id} onChange={()=>CheckChange(item.id)} checked={item.checked} />
                    <label  style={(item.checked) ? { textDecoration: 'line-through' } : null} htmlFor={item.id}>{item.todoName}</label>
                    <FaTrash role='button' tabIndex="0" onClick={()=>handleDelete(item.id)}/>
                </li>
            )})}
 
        </ul>
        : <li className='item'>No Todo list Found</li> 
    }
        
    </section>
  )
}

export default TodoList