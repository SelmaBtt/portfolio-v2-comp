import React from "react";
import styles from './TaskBarItem.module.css';
import PropTypes from "prop-types";

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

TaskBarItem.propTypes = {
    label:  PropTypes.string,
    icon: PropTypes.element,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default TaskBarItem;