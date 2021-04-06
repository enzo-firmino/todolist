import {useEffect, useState} from "react";
import {useNextId} from "./useNextId";
import {append, getAll, remove, update} from "../fetch/todos";


export function useTodos({setTodos}) {


    // const [todos, setTodos] = useState([]);
    const [id, nextId] = useNextId(3);
    let controller = new AbortController();
    const [abordController, setAbortController] = useState(controller);
    const [lastError, setLastError] = useState();

    useEffect( () => {
        getAll().then( (todos) => setTodos(todos));
        return () => {
            abordController.abort();
            let controller = new AbortController();
            setAbortController(controller);
        };
    }, [abordController]);

    function removeTodo (todoToRemove) {
        remove(todoToRemove.id, abordController.signal)
            .then(json => {
                let index = todos.findIndex( todo => todo.id === json.id);
                let newTodos = [...todos];
                newTodos.splice(index, 1);
                setTodos(newTodos);
            })
            .catch( (error) => setLastError(error));
    }

    function updateTodo (todoToChange) {
        update(todoToChange, abordController.signal)
            .then(json => {
                let newTodos = [...todos];
                let index = todos.findIndex( todo => todo.id === json.id);
                newTodos[index] = json;
                setTodos(newTodos);
            })
            .catch(error => setLastError(error));
    }

    function addTodo(text) {
        append(id, text, abordController.signal)
            .then(json => setTodos([...todos, json]))
            .catch(error => setLastError(error));
        nextId(id+1);
    }

    return [todos, lastError, removeTodo, updateTodo, addTodo];
}
