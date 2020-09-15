import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import Todos from '../components/Todos'

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

const mapDispatchToProps = dispatch => ({
    toggleTodo : id => dispatch(toggleTodo(id))
})

const mapStateToProps = state => ({
    todos: getTodos(state.todos, state.filter)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos) ;