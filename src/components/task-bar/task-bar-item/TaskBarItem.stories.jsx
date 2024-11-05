import HomeIcon from "../../icons/icons/HomeIcon";
import SmallFolderIcon from "../../icons/icons/SmallFolderIcon";
import TaskBarItem from "./TaskBarItem";

export default{
    title: 'RPCCL/taskbar/item',
    component: TaskBarItem,
    tags: ['autodocs'],
}

export const Default = {
    args: {
        label: 'Start',
        icon: <HomeIcon />,
        onClick: () => {alert('Pressed default')}
    }
}

export const Pinned = {
    args: {
        icon: <SmallFolderIcon />,
        pinned: true,
        onClick: () => {alert('Pressed pinned')}
    }
}