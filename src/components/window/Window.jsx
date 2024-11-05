import React from "react";
import styles from './Window.module.css';
import WindowHeader from './window-header/WindowHeader';
import WindowTabs from './window-tabs/WindowTabs';
import PropTypes from 'prop-types';
import '../global.css'

const Window = ({ 
    tabs = [], 
    title = "", 
    onTabClick = () => {}, 
    onCloseClick = () => {}, 
    className = "", 
    children, 
    ...props
}) => {

    if(!onCloseClick) console.error('Missing "onCloseClick" prop. The prop is required to provide functionality for closing the window')

    return (
        <div className={`${styles.wrapper} ${className}`} {...props}>
            <WindowHeader title={title} onClick={onCloseClick} />
            {tabs.length > 0 && <WindowTabs className={styles.tabs} labels={tabs} onClick={onTabClick} />}
            <div className={styles.contentWrapper}>
                {children || null}
            </div>
        </div>
    );
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
    title: PropTypes.string,
    onTabClick: PropTypes.func,
    onCloseClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
};


export default Window;
