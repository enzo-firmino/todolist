import {useState} from "react";


export function useCreationValue(addTodo) {

    const [value, setValue] = useState('');

    function create() {
        if(!value || /^\s*$/.test(value)) {
            alert("Value ne doit pas être nulle")
        } else {
            addTodo(value);
        }
        setValue('');
    }


    function changeValue(event) {
        setValue(event.target.value)
    }

    return [value, create, changeValue];
}
