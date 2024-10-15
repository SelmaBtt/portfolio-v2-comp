import CustomDesktopIcon from "./customDesktopIcon/CustomDesktopIcon";
import AvatarIcon from "./icons/AvatarIcon";
import FileIcon from "./icons/FileIcon";
import FolderIcon from "./icons/FolderIcon";
import ClockIcon from './icons/ClockIcon';
import HomeIcon from './icons/HomeIcon';
import InfoIcon from './icons/InfoIcon';
import LeftArrowIcon from './icons/LeftArrowIcon';
import MailIcon from './icons/RightArrowIcon';
import RightArrowIcon from "./icons/RightArrowIcon";

export default {
    title: 'RPCCL/icons'
}

export const Desktop = {
    args: {
        icon: <AvatarIcon />,
        label: "About me",
    },
    render: (args) => <CustomDesktopIcon {...args} />
}

export const Icons = {
    render: () => (
        <div style={{backgroundColor: "#106B61"}}>
            <AvatarIcon />
            <FileIcon />
            <FolderIcon />
            <ClockIcon />
            <HomeIcon />
            <InfoIcon />
            <LeftArrowIcon />
            <RightArrowIcon />
            <MailIcon />
        </div>
    )
}