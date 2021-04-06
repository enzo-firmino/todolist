import React from 'react';
import Todo from './index';

export default {
    title: 'components/Todo',
    component: Todo,
}

export const default_value = () => <Todo todo={ {id: 2, text: "Next task", done: true} }/>;
export const initialized = () => <Todo todo={ {id: 2, text: "Next task", done: true} }/>;