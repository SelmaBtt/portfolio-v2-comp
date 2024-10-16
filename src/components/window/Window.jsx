import React from "react";
import styles from './Window.module.css';
import WindowHeader from './window-header/WindowHeader';
import WindowTabs from './window-tabs/WindowTabs';
import PropTypes from 'prop-types';

const Window = ({ tabs, title, onTabClick, onCloseClick, className, children }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <WindowHeader title={title} onCloseClick={onCloseClick} />
            {tabs.length > 0 && <WindowTabs className={styles.tabs} labels={tabs} onTabClick={onTabClick} />}
            <div className={styles.contentWrapper}>
                {children || null}
            </div>
        </div>
    );
};

Window.defaultProps = {
    tabs: [],
    title: '',
    className: '',
    onTabClick: () => {},
};


Window.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                label: PropTypes.string.isRequired, 
                icon: PropTypes.element,
            })
        ])
    ),
    title: PropTypes.string.isRequired,
    onTabClick: PropTypes.func,
    onCloseClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
};


export default Window;
