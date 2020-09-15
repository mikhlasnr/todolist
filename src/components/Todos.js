import React, { Component } from 'react'
import Todo from './Todo'
import {fetchTodos, toggleTodo} from '../actions'

class Todos extends Component{

    componentDidMount(){
        this.props.dispatch(fetchTodos())
    }

    render(){
        const {todos, dispatch, loading, error} = this.props
        
        if(loading) return <div>Loading ...</div>;

        if(error) return <div>Something's wrong...</div>;
        
        return(
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
    }
}

export default Todos