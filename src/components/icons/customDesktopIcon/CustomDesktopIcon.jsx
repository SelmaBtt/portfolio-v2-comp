import React from "react";
import styles from './CustomDesktopIcon.module.css';

const CustomDesktopIcon = ({ icon, label, className, ...props}) => {
    
    if (!icon) {
        console.error("icon is missing. No icon prop has been sent through");
    } else if (!label) {
        console.error("label is missing. No label prop has been sent through");
    }

    return(
        <div 
            className={`${styles.wrapper} ${className || ''}`}
            {...props}
        >
            {icon && <div className={styles.icon}>{icon}</div>}
            {label && <div>{label}</div>}
        </div>
    )
}

export default CustomDesktopIcon;