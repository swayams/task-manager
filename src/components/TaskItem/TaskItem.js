import React from 'react';
import './TaskItem.css'


function TaskItem (props) {
    let {task, ...rest} = {...props}
    console.log(task)
    return (
     <div className="taskItem">     
        <div>Description: {task.description}</div> 
        <div>State: {task.getState()}</div>
        <div>Priority: {task.getPriority()}</div>
        <div>Due Date : {task.dueDate.toString()}</div>
        <div>Created At: {task.createdAt.toString()}</div>
        <button onClick={(event) => task.markAsComplete(true)}> Delete </button>
        <button onClick={(event) => task.markAsComplete()}> Complete </button>
     </div>   
    )
}
export default TaskItem;
