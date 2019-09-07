import React from 'react';
import { Priority } from '../../entities/Task';
import { getLocalNode, setLocalNode } from '../../service/local';
import { Task } from './../../entities/Task';


class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dueDate: '', description: '', priority: Priority.P0 }
    }

    setDueDate = (val) => {
        this.setState({ dueDate: val})
    }
    setDescription = (val) => {
        this.setState({ description: val})
    }
    setPriority = (val) => {

        console.log(val)
        this.setState({ priority: val})
    }

    addTask = () => {
        let tasks  = getLocalNode('tasks') 
        let { dueDate, description, priority} = {...this.state}
        console.log(this.state)
        let task = new Task(dueDate, priority, description)
        tasks.push(task)
        setLocalNode('tasks', tasks)
        this.props.onUpdate()
    }
    render() { 
        return ( 
            <div>
               <div> Due Date :<input type='text' onChange={(event) => this.setDueDate( event.target.value)} /></div>
                <div>Description :<input type='text' onChange={(event) => this.setDescription( event.target.value)} /></div>
                <div>
                    Priority: 
                    <select
                     value={this.state.priority} 
                     onChange={ e => this.setPriority(e.target.value)}>
                        {Object.keys(Priority).map((p, index) => 
                            <option value={index} key={index}>{p}</option>
                        )}
                    </select>

                    <button onClick={() => this.addTask()}> Add </button>
                </div>
            </div>  
        );
    }
}
 
export default NewTask;
