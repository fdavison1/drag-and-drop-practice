import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd'
import './reset.css'
import initialData from './initial-data'
import Column from './Column'



// const App = () => 'Hello World'
class App extends React.Component {
    state = initialData

    onDragEnd = result => {
        //TODO: reorder our column
        const { destination, source, draggableId } = result

        //if no destination, nothing we need to do
        if(!destination){
            return
        }

        //check to see if location has changed, if dropped in original location no action required
        if (
            destination.draggableId === source.droppableId &&
            destination.index === source.index
        ){
            return
        }

        const column = this.state.columns[source.droppableId]
        const newTasksIds = Array.from(column.taskIds)
        newTasksIds.splice(source.index, 1)
        newTasksIds.splice(destination.index, 0, draggableId)

        const newColumn = {
            ...column, 
            taskIds: newTasksIds,
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns, 
                [newColumn.id]: newColumn
            }
        }

        this.setState(newState)
    }



    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>

                {this.state.columnOrder.map((columnId) => {
                    const column = this.state.columns[columnId]
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

                    // return column.title
                    return <Column key={column.id} column={column} tasks={tasks} />
                })}
            </DragDropContext>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


