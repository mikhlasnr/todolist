let initialState = {
    todos : [],
    error : false,
    loading : false
}

const list = (state = initialState, action) => {
    switch (action.type) {

        case "INIT_DATA" :
            return {
                ...state,
                todos : [...state.todos, ...action.payload.todos],
                loading : false
            }

        case "INIT_DATA_STARTED" :
            return {
                ...state,
                loading : true
            }

        case "INIT_DATA_FAILED" :
            return {
                ...state,
                loading : false,
                error : true
            }

        case "ADD_TODO":
            return {
                ...state, 
                todos : [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        completed: false
                    }
                ]
            }

        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map(
                        todo => (
                            todo.id === action.payload.id
                                ? {...todo, completed : !todo.completed}
                                : todo
                        ))
                
            }
            
        default:
            return state
    }
}

export default list;