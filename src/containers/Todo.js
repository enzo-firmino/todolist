import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { removeTodo, editTodo } from '../actions/todos'

const mapDispatchToProps = dispatch => {
    return {
        updateTodo: (todo) => dispatch(editTodo(todo)),
        removeTodo: (todo) => dispatch(removeTodo(todo)),
    }
};

export default connect(null, mapDispatchToProps)(Todo)
