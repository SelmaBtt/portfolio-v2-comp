import React from "react";
import styles from './WindowHeader.module.css';
import CloseBtn from "../../buttons/CloseBtn/CloseBtn";

const WindowHeader = ({ title, onCloseClick }) => {

    if (!title) console.warn("Missing title. No title prop has been passed through");

    return(
        <div className={styles.wrapper}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <CloseBtn className={styles.btn} onClick={onCloseClick} />
        </div>
    )
}

export default WindowHeader;