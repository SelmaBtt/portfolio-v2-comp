import React from "react";
import styles from './TaskBarItem.module.css';

const TaskBarItem = ({ 
    label = '',
    icon =  null,
    className = '', 
    onClick = () => {}, 
    ...props 
}) => {
    return(
        <div 
            className={`${styles.wrapper} ${className}`}
            onClick={onClick}
            {...props}
        >
            {icon && (
                <div className={styles.icon}>
                    {icon}
                </div>
            )}
            <span>{label}</span>
        </div>
    )
}

export default TaskBarItem;