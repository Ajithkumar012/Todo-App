import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react'; 
import './App.css'; 
import AddTask from './AddTask';
import SearchTask from './SearchTask';


//Parrent Container
function App() {
  const [item, setItem] = useState([]);
  const API_URL = "http://localhost:3500/items"
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const fetchItems = async () =>{
    try{
      const response = await fetch(API_URL)
      if (!response.ok) throw Error("Data Not Received");
      const listItems = await response.json()
      console.log(listItems)
      setItem(listItems)
      setFetchError(null)
    }
    catch(err){
      setFetchError(err.message)
    }
    finally{   //if No problem is Occurs finally will executes
      setIsLoading(false)
    }
  }
  setTimeout(() =>{
    (async () => await fetchItems())()
  }, 2000)
  
  
},[] )



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
       
      <SearchTask
       search = {search}
       setSearch = {setSearch}
      /> 

       <AddTask 
       newItem = {newItem}
       setNewItem = {setNewItem}
       handleSubmit = {handleSubmit}
       />

      <main >
        {isLoading && <p>{`Loading Tasks.....`}</p>}
      {fetchError && !fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && <Content                 
          item = {item.filter(task => ((task.task).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          deleteTask={deleteTask}
        />}
      </main>
       
       
       <Footer 
       itemLength={item.length}
       />
    </div>
   );
}
  

export default App;
