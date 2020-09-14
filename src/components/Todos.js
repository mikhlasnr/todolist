import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'
import {toggleTodo} from '../actions'

const Todos = ({todos, dispatch}) => (
    <ul>
        {todos.map(todo => (
            <Todo 
                key={todo.id} 
                {...todo} 
                onClick={() => dispatch(toggleTodo(todo.id))}
            />
        ))}
    </ul>
)

const getTodos = (todos, filter) => {
    switch (filter) {
        case "ALL":
            return todos
        case "COMPLETED":
            return todos.filter(item => item.completed)
        case "ACTIVE":
            return todos.filter(item => !item.completed)
        default:
            throw new Error("Filter tidak dikenali : " + filter);
    }
}


const mapStateToProps = (state) => ({
    todos: getTodos(state.todos, state.filter)
})

export default connect(mapStateToProps)(Todos) ;
