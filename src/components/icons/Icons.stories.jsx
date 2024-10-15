import CustomDesktopIcon from "./customDesktopIcon/CustomDesktopIcon";

export default {
    title: 'RPCCL/icons'
}

export const Custom = {
    args: {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M6 3H54M6 57H54" stroke="#A53131" stroke-width="2"/>
                <path d="M2 30H58" stroke="#A53131" stroke-width="52"/>
                <path d="M23 47H42M21 45H44M19 43H44M19 41H44M17 39H44M21 37H44M21 35H44M23 33H44M32 31H40M34 29H38M34 27H36" stroke="#D9C69D" stroke-width="2"/>
                <path d="M20 11H38M42 13H20H18M44 15H42H18H16M46 17H44H16H14M49 20V30M48 19H46H14H12M48 31H40M45 32V46V50M44 47H42M16 49H42H44M14 47H16H21M12 45H14H19M11 44V20M38 29H40H48M36 27H38H48M12 25H36H48M33 26V30M32 31H23H12M32 29H12M23 33H21H12M20 34V38M19 37H17M16 36V40M18 40V44M22 46V48M20 44V46M47 32V34M41 37V41M28 37V41M44 36H40M25 36H29M37 44H33M46 23H43M39 23H26M48 21H12M32 27H12M19 35H12M15 37H12M15 39H12M17 41H12M17 43H12M22 23H12" stroke="black" stroke-width="2"/>
                <path d="M4.11311 1H56M59 4V56M58 57H54M56 59H4M6 57H2M1 56V4M2 3H6M54 3H58" stroke="black" stroke-width="2"/>
                <path d="M22 23H26M39 23H43M46 23H48" stroke="white" stroke-width="2"/>
                <path d="M2 51H4M2 53H10M2 55H58M6 57H54M58 53H50M58 51H56" stroke="#5A2C4F" stroke-width="2"/>
            </svg>
        ),
        label: "About me",
    },
    render: (args) => <CustomDesktopIcon {...args} />
}