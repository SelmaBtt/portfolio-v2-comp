import React from "react";
import styles from './StartMenu.module.css';
import PropTypes from "prop-types";
import RightArrowIcon from "../../icons/icons/RightArrowIcon";

const StartMenu = ({ items }) => {
    return(
        <div className={styles.wrapper}>
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
    ),
}

StartMenu.defaultProps = {
    items: [],
}

export default StartMenu;
