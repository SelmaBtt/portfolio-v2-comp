import React from 'react';
import styles from './Button.module.css';
import '../../global.css'
import PropTypes from 'prop-types';

const Button = ({ label, className, ...props}) => {

    if (!label) console.warn('label is missing. No label prop has been passed through');

    return(
        <button
            className={`${styles.wrapper} ${className}`}
            {...props}
        >
            {label && <span>{label}</span>}
        </button>
    )
}

Button.defaultProps = {
    label: '',
    className: ''
}

Button.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    className: PropTypes.string,
}

export default Button;