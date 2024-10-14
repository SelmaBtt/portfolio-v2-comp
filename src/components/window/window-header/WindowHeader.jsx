import React from "react";
import styles from './WindowHeader.module.css';
import CloseBtn from "../../buttons/CloseBtn/CloseBtn";

const WindowHeader = ({ title, }) => {
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <CloseBtn className={styles.btn} />
        </div>
    )
}

export default WindowHeader;