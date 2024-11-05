import React from "react";
import '../global.css';
import { useState } from "react";
import styles from './Taskbar.module.css';
import TaskBarItem from "./task-bar-item/TaskBarItem";
import HomeIcon from "../icons/icons/HomeIcon";
import ClockIcon from "../icons/icons/ClockIcon";
import BatteryIcon from "../icons/icons/BatteryIcon";
import StartMenu from "./menu/StartMenu"
import MailIcon from "../icons/icons/MailIcon";
import PropTypes from "prop-types";

const Taskbar = ({ children, className='' }) => {
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
        <div className={`${styles.wrapper} ${className}`}>
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
}

export default Taskbar;