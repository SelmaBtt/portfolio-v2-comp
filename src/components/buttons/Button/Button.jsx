import React from 'react';
import styles from './Button.module.css';
import '../../global.css'

const Button = ({ label, className, ...props}) => {
    return(
        <button
            className={`${styles.wrapper} ${className || ''}`}
            {...props}
        >
            {label}
        </button>
    )
}

export default Button;