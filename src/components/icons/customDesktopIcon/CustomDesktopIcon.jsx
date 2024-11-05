import React from "react";
import styles from './CustomDesktopIcon.module.css';
import PropTypes from "prop-types";
import '../../global.css'

const CustomDesktopIcon = ({ icon = "", label = "", className = "", onClick = () => {}, ...props}) => {
    
    if (!icon) {
        console.error("icon is missing. No icon prop has been sent through");
    } else if (!label) {
        console.error("label is missing. No label prop has been sent through");
    }

    return(
        <div 
            className={`${styles.wrapper} ${className || ''}`}
            onClick={onClick}
            {...props}
        >
            {icon && <div className={styles.icon}>{icon}</div>}
            {label && <div>{label}</div>}
        </div>
    )
}

CustomDesktopIcon.protoTypes = {
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    label: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,  
}

export default CustomDesktopIcon;