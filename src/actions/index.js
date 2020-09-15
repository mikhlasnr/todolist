import axios from 'axios'

let nexTodoid = 0

export const addTodo = text => ({
    type: "ADD_TODO", 
    payload : {
        id : nexTodoid++, 
        text 
    }
})

export const toggleTodo = id => ({
    type : "TOGGLE_TODO",
    payload : {id}
})

export const setFilter = filter => ({type : "SET_FILTER", filter})

export const fetchTodos = () => {
    return dispatch => {
        dispatch(initDataStarted())

        axios.get("https://my-json-server.typicode.com/mikhlasnr/fakeapi/todos")
            .then((res) => {
                console.log(res)
                dispatch(initData(res.data))
                nexTodoid = res.data[res.data.length - 1].id + 1
            })
            .catch((err) => {
                console.log(err)
                dispatch(initDataFailed())
            })
    }
}

const initData = todos => ({
    type : "INIT_DATA",
    payload : {todos}
})

const initDataStarted = () => ({
    type : "INIT_DATA_STARTED",
})

const initDataFailed = () => ({
    type : "INIT_DATA_FAILED",
})