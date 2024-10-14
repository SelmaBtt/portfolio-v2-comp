import React from "react";
import styles from './ExtraBtn.module.css';

const ExtraBtn = ({ label, className, ...props }) => {
    return(
        <button
            className={`${styles.wrapper} ${className || ''}`}
            {...props}
        >
            {label}
        </button>
    )
}

export default ExtraBtn;