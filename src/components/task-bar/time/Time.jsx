import React from "react";
import styles from './Time.module.css';
import ClockIcon from "../../icons/icons/ClockIcon";

const Time = () => {
    return(
        <div className={styles.wrapper}>
            <ClockIcon />
        </div>
    )
}

export default Time;