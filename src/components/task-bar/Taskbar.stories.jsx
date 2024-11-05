import Taskbar from "./TaskBar";
import TaskBarItem from "./task-bar-item/TaskBarItem";
import HomeIcon from "../icons/icons/HomeIcon";
import MailIcon from "../icons/icons/MailIcon";
import StartMenu from "./menu/StartMenu";
import { useState } from "react";
import styles from './TaskBar.module.css';
import SmallFolderIcon from "../icons/icons/SmallFolderIcon";

export default {
    title: 'RPCCL/taskbar',
    component: Taskbar,
}

export const Default = {
    render: () => {

        const [isStartMenuTrue, setIsStartMenuTrue] = useState(false);
        
        const clickStartHandler = () => setIsStartMenuTrue(!isStartMenuTrue);
        const StartMenuItemArr = [
            {label: 'Mail', icon: <MailIcon />},
            {label: 'GitHub' },
            {label: 'LinkedIn' }
        ]

        return(
            <>
                <Taskbar>
                    <TaskBarItem
                        label="Start"
                        icon={<HomeIcon />}
                        onClick={clickStartHandler}
                    />
                    <TaskBarItem 
                        icon={<SmallFolderIcon />}
                        pinned={true}
                        onClick={() => {alert('Pressed folder')}}
                    />
                </Taskbar>
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
}