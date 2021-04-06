import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useCreationValue} from "../../services/hooks/useCreationValue";

export function CreateTodo({addTodo}){

    const [value, create, changeValue] = useCreationValue(addTodo);

    return (
        <form onSubmit={(event) => {
            create();
            event.preventDefault();
        }}>
            <label>
                <input type="text" value={value} onChange={(event) => changeValue(event)} />
            </label>
            <button type="submit" className="button_submit">
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </form>
    );
}
