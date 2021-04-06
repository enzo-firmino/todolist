import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import CreateTodo from "./containers/CreateTodo";
import Footer from "./components/Footer";
import TodoList from "./containers/TodoList";
import {getAll} from "./services/fetch/todos";

function App({setTodos}) {
    const [abordController] = useState(new AbortController());

    useEffect( () => {
        getAll(abordController.signal).then( (todos) => setTodos(todos));

        return () => {
            abordController.abort();
        };
    }, [abordController]);


    return(
        <div className={"content"}>
          <Header/>
          <CreateTodo />
            <TodoList/>
            <Footer > </Footer>
        </div>
    );
}

export default App;
