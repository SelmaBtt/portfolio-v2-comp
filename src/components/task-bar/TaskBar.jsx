import React from "react";
import '../global.css';
import { useState } from "react";
import styles from './Taskbar.module.css';
import TaskBarItem from "./task-bar-item/TaskBarItem";
import ClockIcon from "../icons/icons/ClockIcon";
import BatteryIcon from "../icons/icons/BatteryIcon";
import PropTypes from "prop-types";

const Taskbar = ({ children, className='', ...props }) => {

    // Code for a continous clock
    let now = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(now);

    const UpdateTime=()=>{
        now =  new Date().toLocaleTimeString()
        setCurrentTime(now)
    }
    setInterval(UpdateTime)

    const clickTimeHandler = () => {
        alert('Clicked time')
    }

    return(
        <div className={`${styles.wrapper} ${className}`} {...props}>
            <div className={styles.childrenWrapper}>
                {children || null}
            </div>
            <div className={styles.rightWrapper}>
                <TaskBarItem 
                    label={currentTime}
                    icon={<ClockIcon />}
                    onClick={clickTimeHandler}
                />
                <BatteryIcon />
            </div>

        </div>
    )
}

Taskbar.Proptypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default Taskbar;