import React from "react";
import styles from './WindowTabs.module.css';

const WindowTabs = ({ labels, onTabClick, className, ...props }) => {

    if (!labels) console.warn(`Missing labels. The "labels" prop isn't being passed through and must be an array.`);
    if (labels && !onTabClick) console.error('No click handler function provided. The "onTabClick" prop is required.');

    return (
        <div className={`${styles.wrapper} ${className || ''}`} {...props}>
            {labels && labels.length > 0 && labels.map((item, idx) => (
                <div 
                    key={idx} 
                    className={styles.itemWrapper}
                    onClick={() => onTabClick(item, idx)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default WindowTabs;
