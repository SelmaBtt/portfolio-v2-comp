import React from "react";
import styles from './WindowHeader.module.css';
import CloseBtn from "../../buttons/CloseBtn/CloseBtn";

const WindowHeader = ({ title, }) => {

    if (!title) console.error("Missing title. No title prop has been passed through");

    return(
        <div className={styles.wrapper}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <CloseBtn className={styles.btn} />
        </div>
    )
}

export default WindowHeader;