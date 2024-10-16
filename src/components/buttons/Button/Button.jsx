import React from 'react';
import styles from './Button.module.css';
import '../../global.css'
import PropTypes from 'prop-types';

const Button = ({ primary, label, className, onClick, ...props}) => {

    if (!label) console.warn('label is missing. No label prop has been passed through');

    const mode = primary ? styles.buttonPrimary : styles.buttonExtra;

    return(
        <button
            className={`${styles.wrapper} ${className} ${mode}`}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    )
}

Button.defaultProps = {
    primary: true,
    label: '',
    className: '',
    onClick: () => {},
}

Button.propTypes = {
    primary: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;