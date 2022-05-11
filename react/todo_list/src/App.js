import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';



function App() {

  const [todoList, setTodoList] = useState([
    {task: "Grocery Shopping", status: true},
    {task: "Gym", status: true},
    {task: "Laundry", status: false},
    ])


  const addTask = (newTask) => {
    // const copyTodoList = [...todoList];

    // copyTodoList.push(newTask);

    // setTodoList(copyTodoList);
    

    setTodoList([...todoList, newTask])  //settodos to copy of list plus new task
  }

  const updateTask = (taskIndex) => {
    console.log(taskIndex);
    const copyTodoList = [...todoList];
    
    if(copyTodoList[taskIndex].status === true){
      copyTodoList[taskIndex].status = false
    }else{
      copyTodoList[taskIndex].status = true;
    }
    
    setTodoList(copyTodoList);
    

  }


  const deleteTask = (taskIndex) => {

    // Expanded Method
    const filteredList = todoList.filter((task, index) => {
      if ( index === taskIndex) {
        return false
      }else{
        return true
      }
    });

    setTodoList(filteredList);

    // // One - line Method
    // const filteredTasks2 = tasks.filter((task, index) => index === taskIndex)
  }



  return (
    <div className="App">
      {JSON.stringify(todoList)}
      <TodoForm addTask={addTask}  todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} updateTask={updateTask} deleteTask={deleteTask} />

    </div>
  );
}

export default App;
