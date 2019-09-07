export const TaskStates = {
    'Open': 0,
    'In Progress': 1,
    'Done': 2,
    'Deleted': 3
}
 
export const Priority  = {
  'P0': 0,
  'P1': 1,
  'P2': 2,
  'P3': 3
}
export class Task {
    constructor( dueDate, priority, description, status = 0,  createdAt = new Date()) {
        this.dueDate = dueDate
        this.priority = priority
        this.description = description
        this.status = status
        this.createdAt = createdAt
    }   

    markAsComplete = ( isDelete = false) => {
        this.status = isDelete ? TaskStates.Deleted : TaskStates.Done
    }

    getPriority = () => {
        return Object.keys(Priority).filter( p => Priority[p] === this.priority)
    }

    getState = () => {
        return Object.keys(TaskStates).filter( k => TaskStates[k] === this.status)[0]
    }
}