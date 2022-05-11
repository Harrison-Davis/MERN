import React, {useState} from 'react';

const TodoList = (props) => {
    

    const handleDelete = (delIndex) => {
        // const filteredTodoList = props.todoList.filter((task, index) => {
        //     return index !== delIndex;
        // });
        // props.setTodoList(filteredTodoList)
        props.deleteTask(delIndex)
    }



    return(

        <div>
            <h1>To-Do List</h1>
            {/* <p>{JSON.stringify(props.todoList)}</p> */}
            {
            props.todoList.map((task, index) => {
                return(
                <div key={index}><span>{task.task}</span>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <input type="checkbox" defaultChecked={task.status} 
                onChange={() => props.updateTask(index)} />
                </div>
                )
            })}
            {/* <input type="checkbox" checked={props.task.status}
            onChange={() => props.updatedBox()} /> */}
        </div>
    )
}

export default TodoList;