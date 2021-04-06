import {CreateTodo} from '../components/CreateTodo'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'
import {append} from "../services/fetch/todos";

const mapDispatchToProps = dispatch => ({
    addTodo: text => {
        append(text, new AbortController().signal)
            .then(json => dispatch(addTodo(json)))
            // .catch(error => setLastError(error));
    },
})

export default connect(null, mapDispatchToProps)(CreateTodo)
