import React from 'react'
import styles from './CloseBtn.module.css'
import '../../global.css'
import PropTypes from 'prop-types'

const CloseBtn = ({ className = "", onClick = () => {}, ...props }) => {

    if(!onClick) console.error('Missing onClick function for close button')

    return(
        <button 
            className={`${styles.btnWrapper} ${className || ''}`}
            onClick={onClick}
            {...props}
        >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H1.57143V1.57143H0V0ZM3.14286 3.14286H1.57143V1.57143H3.14286V3.14286ZM4.71429 4.71429H3.14286V3.14286H4.71429V4.71429ZM6.28571 4.71429H4.71429V6.28571H3.14286V7.85714H1.57143V9.42857H0V11H1.57143V9.42857H3.14286V7.85714H4.71429V6.28571H6.28571V7.85714H7.85714V9.42857H9.42857V11H11V9.42857H9.42857V7.85714H7.85714V6.28571H6.28571V4.71429ZM7.85714 3.14286V4.71429H6.28571V3.14286H7.85714ZM9.42857 1.57143V3.14286H7.85714V1.57143H9.42857ZM9.42857 1.57143V0H11V1.57143H9.42857Z" fill="#270D3F"/>
            </svg>
        </button>
    )
}
CloseBtn.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default CloseBtn;