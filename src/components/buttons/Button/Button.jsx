import React from 'react';
import styles from './Button.module.css';
import '../../global.css'

const Button = ({ label, className, ...props}) => {

    if (!label) console.error('label is missing. No label prop has been passed through');

    return(
        <button
            className={`${styles.wrapper} ${className || ''}`}
            {...props}
        >
            {label && <span>{label}</span>}
        </button>
    )
}

export default Button;