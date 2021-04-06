import React from 'react';
import * as PropTypes from "prop-types";

export function Header(props) {
    return (
        <div className = {props.className}>
            <h1> My Todo List</h1>
        </div>
    );
}

Header.defaultProps = {
    className: "Header"
}

Header.propTypes = {
    className: PropTypes.string,
};


export default Header;
