import HomeIcon from "../../icons/icons/HomeIcon";
import TaskBarItem from "./TaskBarItem";

export default{
    title: 'RPCCL/taskbar/item',
    component: TaskBarItem,
}

export const Default = {
    args: {
        label: 'Start',
        icon: <HomeIcon />,
        onClick: () => {alert('Pressed start')}
    }
}