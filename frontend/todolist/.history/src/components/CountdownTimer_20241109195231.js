// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import '../styles/CountdownTimer.css';

function CountdownTimer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else if (hours > 0) {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [hours, minutes, seconds]);

    const handleHoursChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setHours(value >= 0 ? value : 0);
    };

    const handleMinutesChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setMinutes(value >= 0 && value < 60 ? value : 0);
    };

    const handleSecondsChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setSeconds(value >= 0 && value < 60 ? value : 0);
    };

    return (
        <Draggable>
            <div className="countdown-timer">
                <div className="time-input">
                    <button onClick={() => setHours(hours + 1)}>▲</button>
                    <input
                        type="number"
                        value={hours}
                        onChange={handleHoursChange}
                        className="time-field"
                    />
                    <button onClick={() => setHours(hours > 0 ? hours - 1 : 0)}>▼</button>
                </div>
                <span>:</span>
                <div className="time-input">
                    <button onClick={() => setMinutes(minutes + 1)}>▲</button>
                    <input
                        type="number"
                        value={minutes}
                        onChange={handleMinutesChange}
                        className="time-field"
                    />
                    <button onClick={() => setMinutes(minutes > 0 ? minutes - 1 : 0)}>▼</button>
                </div>
                <span>:</span>
                <div className="time-input">
                    <button onClick={() => setSeconds(seconds + 1)}>▲</button>
                    <input
                        type="number"
                        value={seconds}
                        onChange={handleSecondsChange}
                        className="time-field"
                    />
                    <button onClick={() => setSeconds(seconds > 0 ? seconds - 1 : 0)}>▼</button>
                </div>
            </div>
        </Draggable>
    );
}

export default CountdownTimer;