import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { Task } from './../../entities/Task';
import dummyTasks from './../../configuration/init';
import { getLocalNode, setLocalNode } from '../../service/local';





class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            tasks: []
         }
    }

    processTasks = (tasks) => {
        let taskList = []
        tasks.forEach( t => {
            let task = null
            if(t.status && t.createdAt ) task = new Task( t.dueDate, t.priority, t.description, t.status, t.createdAt)
            else task = new Task(t.dueDate, t.priority, t.description)

            taskList.push(task)
        })

        return taskList
    }

    componentDidMount() {
        let node = 'tasks'
      let tasks = getLocalNode(node)

        if(!tasks) {
            tasks = this.processTasks(dummyTasks)
            setLocalNode(node, tasks)
        } else {
           tasks = this.processTasks(tasks)
        }

      this.setState({tasks:tasks})
 
    }

    _updateList  = () => {
        
    }


    render() { 
        return ( 
            <div>
                {this.state.tasks.map( (task, index) => 
                    <TaskItem task={task} key={index} />
                )}
            </div>
         );
    }
}
 
export default TaskList;