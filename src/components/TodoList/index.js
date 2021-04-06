import React from 'react';
import * as PropTypes from "prop-types";
import Todo from "../../containers/Todo";

export function TodoList({todos}) {
    let test = [];

    todos.forEach( (todoElement) => {
        if (todoElement.done === undefined) {
            todoElement.done = false;
        }
        test.push(<Todo key={todoElement.id} todo={todoElement} />);
    })
    return (
        <ul className='Todos'>
            {test}
        </ul>
    );
}

TodoList.defaultProps = {
    className: "Todos"
}

TodoList.propTypes = {
    className: PropTypes.string,
};



export default TodoList;
