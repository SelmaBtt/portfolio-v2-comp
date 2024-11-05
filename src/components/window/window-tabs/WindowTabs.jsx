import React from "react";
import styles from './WindowTabs.module.css';
import PropTypes from "prop-types";
import '../../global.css';

const WindowTabs = ({ 
    labels = "", 
    onClick = () => {}, 
    className = "", 
    ...props 
}) => {

    if (!labels) console.warn(`Missing labels. The "labels" prop isn't being passed through and must be an array.`);
    if (labels && !onClick) console.warn('No click handler function provided. The "onTabClick" prop is required.');

    return (
        <div className={`${styles.wrapper} ${className || ''}`} {...props}>
            {labels && labels.length > 0 && labels.map((item, idx) => (
                <div 
                    key={idx} 
                    className={styles.itemWrapper}
                    onClick={() => onClick(item, idx)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

WindowTabs.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
}

export default WindowTabs;
