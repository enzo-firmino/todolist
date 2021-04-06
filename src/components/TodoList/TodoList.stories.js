import React from 'react';
import {TodoList} from './index';

export default {
    title: 'components/TodoList',
    component: TodoList,
}

export const default_value = () => <TodoList todos={[
    {id: 1, text: "First task"},
    {id: 2, text: "Next task", done: true},
    {id: 4, text: "An other lengthy task"},
]}/>;
export const initialized = () => <TodoList/>;