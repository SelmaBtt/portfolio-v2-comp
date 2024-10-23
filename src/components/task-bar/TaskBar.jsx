import React from "react";
import '../global.css';
import { useState } from "react";
import styles from './Taskbar.module.css';
import TaskBarItem from "./task-bar-item/TaskBarItem";
import HomeIcon from "../icons/icons/HomeIcon";
import ClockIcon from "../icons/icons/ClockIcon";
import BatteryIcon from "../icons/icons/BatteryIcon";
import StartMenu from "./start/StartMenu"
import MailIcon from "../icons/icons/MailIcon";

const Taskbar = () => {
    let now = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(now);
    const [isStartMenuTrue, setIsStartMenuTrue] = useState(false);
    // console.log(`Boolean: ${isStartMenuTrue}, Current Time: ${currentTime}`)
    const StartMenuItemArr = [
        {label: 'Mail', icon: <MailIcon />},
        {label: 'GitHub' },
        {label: 'LinkedIn' }
    ]

    const UpdateTime=()=>{
        now =  new Date().toLocaleTimeString()
        setCurrentTime(now)
    }
    setInterval(UpdateTime)

    const clickStartHandler = () => setIsStartMenuTrue(!isStartMenuTrue);

    const clickTimeHandler = () => {
        alert('Clicked time')
    }

    return(
        <>
            <div className={styles.wrapper}>
                <TaskBarItem
                    label="Start"
                    icon={<HomeIcon />}
                    onClick={clickStartHandler}
                />
                <div className={styles.rightWrapper}>
                    <TaskBarItem 
                        label={currentTime}
                        icon={<ClockIcon />}
                        onClick={clickTimeHandler}
                    />
                    <BatteryIcon />
                </div>

            </div>
            {/* Modal window */}
            <div 
                onClick={clickStartHandler}
                className={isStartMenuTrue && styles.modalBackground}
            ></div>
            <div className={isStartMenuTrue ? `${styles.startMenu} ${styles.openStartMenu}` : `${styles.startMenu} ${styles.closedStartMenu}`}>
                <StartMenu 
                    items={StartMenuItemArr}
                />
            </div>
        </>
    )
}

export default Taskbar;