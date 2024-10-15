import React from "react";
import styles from './CustomIcon.module.css';

const CustomIcon = ({ icon, label, className, ...props}) => {
    return(
        <div 
            className={`${styles.wrapper} ${className || ''}`}
            {...props}
        >
            <div className={styles.icon}>
                {icon}
            </div>
            {label}
        </div>
    )
}

export default CustomIcon;