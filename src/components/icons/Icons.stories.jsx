import CustomDesktopIcon from "./customDesktopIcon/CustomDesktopIcon";
import AvatarIcon from "./icons/AvatarIcon";
import FileIcon from "./icons/FileIcon";
import FolderIcon from "./icons/FolderIcon";
import ClockIcon from './icons/ClockIcon';
import HomeIcon from './icons/HomeIcon';
import InfoIcon from './icons/InfoIcon';
import LeftArrowIcon from './icons/LeftArrowIcon';
import MailIcon from './icons/MailIcon';
import RightArrowIcon from "./icons/RightArrowIcon";
import AnimatedDots from "./icons/AnimatedDots";
import YellowSquare from "./icons/YellowSquare";
import BatteryIcon from "./icons/BatteryIcon";
import SmallFolderIcon from "./icons/SmallFolderIcon";

export default {
    title: 'RPCCL/icons',
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            default: 'Dark',
            values: [
                { name: 'Dark', value: '#333333' },
            ],
        },
    },
}

export const Desktop = {
    args: {
        icon: <AvatarIcon />,
        label: "About me",
    },
    render: (args) => <CustomDesktopIcon {...args} />
}

// export const OtherIcons = {
//     render: () => (
//         <div>
//             <AvatarIcon />
//             <FileIcon />
//             <FolderIcon />
//             <ClockIcon />
//             <HomeIcon />
//             <InfoIcon />
//             <LeftArrowIcon />
//             <RightArrowIcon />
//             <MailIcon />
//             <YellowSquare />
//             <BatteryIcon />
//             <SmallFolderIcon />
//             <AnimatedDots />
//         </div>
//     )
// }

export const OtherIcons = {
    render: () => (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", color: "#ffffff", textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
                <AvatarIcon />
                <p>AvatarIcon</p>
            </div>
            <div>
                <FileIcon />
                <p>FileIcon</p>
            </div>
            <div>
                <FolderIcon />
                <p>FolderIcon</p>
            </div>
            <div>
                <ClockIcon />
                <p>ClockIcon</p>
            </div>
            <div>
                <HomeIcon />
                <p>HomeIcon</p>
            </div>
            <div>
                <InfoIcon />
                <p>InfoIcon</p>
            </div>
            <div>
                <LeftArrowIcon />
                <p>LeftArrowIcon</p>
            </div>
            <div>
                <RightArrowIcon />
                <p>RightArrowIcon</p>
            </div>
            <div>
                <MailIcon />
                <p>MailIcon</p>
            </div>
            <div>
                <YellowSquare />
                <p>YellowSquare</p>
            </div>
            <div>
                <BatteryIcon />
                <p>BatteryIcon</p>
            </div>
            <div>
                <SmallFolderIcon />
                <p>SmallFolderIcon</p>
            </div>
            <div>
                <AnimatedDots />
                <p>AnimatedDots</p>
            </div>
        </div>
    ),
};
