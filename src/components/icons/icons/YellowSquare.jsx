import React from "react";

const YellowSquare = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <g filter="url(#filter0_ii_359_1091)">
            <rect width="22" height="22" fill="#EBD247"/>
        </g>
        <path d="M4 5.5V7H7V5.5M4 5.5V4H7V5.5M4 5.5H7" stroke="white" stroke-opacity="0.7" stroke-width="2"/>
        <defs>
            <filter id="filter0_ii_359_1091" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="3" dy="3"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_359_1091"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-3" dy="-3"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.833333 0 0 0 0 0.607407 0 0 0 0 0.409722 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="effect1_innerShadow_359_1091" result="effect2_innerShadow_359_1091"/>
            </filter>
        </defs>
        </svg>
    )
}

export default YellowSquare;