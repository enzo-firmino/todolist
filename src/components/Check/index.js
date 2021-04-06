import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

export function Check(props) {
    if (props.checked) {
        return (
            <div className={props.className}>
                <FontAwesomeIcon icon={faCheckSquare}/>
            </div>
        );
    } else {
        return (
            <div className={props.className}>
                <FontAwesomeIcon icon={faSquare}/>
            </div>
        );
    }

}

Check.defaultProps = {
    checked: false,
    className: "Check",
}