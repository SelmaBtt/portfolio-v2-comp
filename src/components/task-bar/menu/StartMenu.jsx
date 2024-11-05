import React from "react";
import '../../global.css';
import styles from './StartMenu.module.css';
import PropTypes from "prop-types";
import RightArrowIcon from "../../icons/icons/RightArrowIcon";

const StartMenu = ({ items = [], className = "", ...props }) => {

    if (!Array.isArray(items) || items.length === 0) {
        console.error('Missing "items", "items" prop must be a non-empty array');
    }
    items.forEach((item, index) => {
        if (typeof item !== 'string' && item.icon && !item.label) {
            console.error(`item at index ${index} is missing a "label" property.`);
        }
    });

    return(
        <div className={`${styles.wrapper} ${className}`} {...props}>
            {items && items.length > 0 && items.map((item, idx) => (
                <div key={idx}>
                    {typeof item === 'string' ? (
                        <div className={styles.itemWrapper}>
                            <span className={styles.leftSide}>{item}</span>
                            <RightArrowIcon />
                        </div>
                    ) : (
                        <div className={styles.itemWrapper}>
                            <div className={styles.leftSide}>
                                {item.icon && <span className={styles.icon}>{item.icon}</span>}
                                <span>{item.label}</span>
                            </div>
                            <RightArrowIcon />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

StartMenu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                label: PropTypes.string.isRequired, 
                icon: PropTypes.element,
            })
        ])
    ).isRequired,
    className: PropTypes.string,
}

export default StartMenu;
