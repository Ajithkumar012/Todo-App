import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'; 
import './App.css'; 
import AddTask from './AddTask';
import SearchTask from './SearchTask';


//Parrent Container
function App() {
  const [item, setItem] = useState(
   
    JSON.parse(localStorage.getItem('todo_list'))
  );
  
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setItems = (listItems)=>{
    setItem(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const addTasks = (task) => {
    const id = item.length ? item[item.length - 1].id + 1 : 1
    const addNewTask = {id, checked:false, task}
    const listItems = [...item, addNewTask]
    setItems(listItems)
  }

  const handleCheck = (id)=>{
    const listItems = item.map((item) => 
    item.id===id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
  
  }

  const deleteTask = (id) =>{
    const listItems = item.filter((item) => 
    item.id!==id )
    console.log(listItems)
    setItems(listItems)
  
    
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    
    if(!newItem){
      return;
    }
    console.log(newItem);
    //add Task
    addTasks(newItem)
    setNewItem('')

  }

  return (
    //propsDrilling
    <div className='App'>
       <Header title = "My ToDo's"/>
       
      {/* <SearchTask
       search = {search}
       setSearch = {setSearch}
      /> */}

       <AddTask 
       newItem = {newItem}
       setNewItem = {setNewItem}
       handleSubmit = {handleSubmit}
       />

       <Content                 
        item = {item}
        handleCheck={handleCheck}
        deleteTask={deleteTask}
       />
       
       <Footer 
       itemLength={item.length}
       />
    </div>
   );
}
  
  


export default App;
