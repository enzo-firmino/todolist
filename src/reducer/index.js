import {
    TODOS_ADD,
    TODOS_DELETE,
    TODOS_EDIT,
    TODOS_SET,
} from '../actions/todos'

const initialValues = {
    data: [
        {id: 1, text: 'Mettre en place un reducer'}
    ],
}

function reducers(state=initialValues, action) {
    switch (action.type) {
        case TODOS_SET:
            return {...state, data: action.todos}
        case TODOS_ADD:
            return {...state, data:[...state.data, action.todo]}
        case TODOS_DELETE:
            return {...state, data: state.data.filter(todo => todo !== action.todo)}
        case TODOS_EDIT:
            return {
                ...state, data: state.data.map(todo =>
                    action.todo.id === todo.id ? action.todo : todo
                )}
        default:
            return state
    }
}

export default reducers
