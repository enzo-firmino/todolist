import React from 'react';
import * as PropTypes from "prop-types";

export function Footer(props) {
    let errorText = '';
    if (props.error !== undefined) {
        errorText = props.error.toString();
    }

    return (
        <div className = {props.className}>
            {errorText}
        </div>
    );
}

Footer.defaultProps = {
    className: "Footer"
}

Footer.propTypes = {
    className: PropTypes.string,
};


export default Footer;
