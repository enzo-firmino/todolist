import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import * as PropTypes from "prop-types";
import {Check} from "../Check";
import {update, remove} from "../../services/fetch/todos";

function Todo({updateTodo, removeTodo, ...props}) {

    return (
        <li id={props.todo.id} className={props.className + " " + props.todo.done}>
            <div className={"changeDone"} onClick={() => update(props.todo).then((json) =>
                updateTodo(json))}>
                <Check checked={props.todo.done}/>
                <div> {props.todo.text}</div>
            </div>
            <button onClick={() => remove(props.todo).then(() =>
                removeTodo(props.todo))}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        </li>
    );
}

Todo.defaultProps = {
    className: "Todo",
}

Todo.propTypes = {
    className: PropTypes.string,
};

export default Todo;
