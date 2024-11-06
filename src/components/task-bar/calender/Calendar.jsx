import React from "react";
import styles from './Calendar.module.css';
import { useState, useEffect } from "react";

const Calendar = () => {
    const [date] = useState(new Date())
    const [daysInMonth, setDaysInMonth] = useState([]);
    
    // daysInMonth.find((day) => day === date.getDate())

    // Calender
    useEffect(() => {
        const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        setDaysInMonth(Array.from({ length: days }, (_, i) => i + 1));
    }, [new Date().getDay()]);
    
    // Current weekday
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const displayWeekday = weekdays[date.getDay()];
    
    // Current month
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const displayMonth = months[date.getMonth()];
    
    return(
        <div>
            <div>
                <span>Today: {displayWeekday} {displayMonth} {date.getDate()}</span>
            </div>
            <hr />
            <div>
                <span>{displayMonth} {date.getFullYear()}</span>
                <div className={styles.datesWrapper}>
                    {daysInMonth.length > 0 && daysInMonth.map((day) => (
                        <div
                            key={day}
                            className={day === date.getDate() ? styles.todayWrapper : styles.dayWrapper}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calendar;