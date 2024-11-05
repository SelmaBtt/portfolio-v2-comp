import React from "react";
import styles from './WindowHeader.module.css';
import CloseBtn from "../../buttons/CloseBtn/CloseBtn";
import '../../global.css';
import PropTypes from "prop-types";

const WindowHeader = ({ title = "", onClick = () => {}, ...props }) => {

    if (!title) console.warn("Missing title. No title prop has been passed through");

    return(
        <div className={styles.wrapper} {...props}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <CloseBtn className={styles.btn} onClick={onClick} />
        </div>
    )
}

WindowHeader.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
}

export default WindowHeader;