import React from "react";
import styles from './ExtraBtn.module.css';

const ExtraBtn = ({ label, ...props }) => {
    return(
        <button
            className={styles.wrapper}
            {...props}
        >
            {label}
        </button>
    )
}

export default ExtraBtn;