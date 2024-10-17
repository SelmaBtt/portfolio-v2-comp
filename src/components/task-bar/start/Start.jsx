import React from "react";
import styles from './Start.module.css';
import HomeIcon from "../../icons/icons/HomeIcon";
import PropTypes from "prop-types";

const Start = ({ className, onClick, ...props }) => {
    return(
        <div 
            className={`${styles.wrapper} ${className}`}
            onClick={onClick}
            {...props}
        >
            <HomeIcon />
            Start
        </div>
    )
}

Start.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
}

Start.defaultProps = {
    className: '',
    onClick: () => {},
}

export default Start