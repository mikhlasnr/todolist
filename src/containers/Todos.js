import {connect} from 'react-redux'
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

const mapStateToProps = state => ({
    todos: getTodos(state.list.todos, state.filter),
    loading : state.list.loading,
    error : state.list.error
})

export default connect(mapStateToProps)(Todos) ;