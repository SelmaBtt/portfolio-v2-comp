import React from "react";
import styles from './TaskBarItem.module.css';
import PropTypes from "prop-types";
import '../../global.css';

const TaskBarItem = ({ 
    label = '',
    icon =  null,
    pinned = false,
    className = '', 
    onClick = () => {}, 
    ...props 
}) => {

    if(!label && !icon) console.warn("Missing both label and icon. Please provide at least one")

    const mode = pinned ? styles.pinnedWrapper : styles.defaultWrapper;

    return(
        <div 
            className={`${styles.wrapper} ${className} ${mode}`}
            onClick={onClick}
            {...props}
        >
            {icon && (
                <div className={`${styles.icon} ${label ? styles.iconWithLabel : ''}`}>
                    {icon}
                </div>
            )}
            {label && <span>{label}</span>}
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