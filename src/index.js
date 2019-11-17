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


