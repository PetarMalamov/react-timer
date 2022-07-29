import React, { useEffect, useState } from 'react'
import { getRemainingTimeMS } from '../../utils'
import "./style.css"

type CountdownTimerProps = {
    countdownTimestampMS: number
}

export type RemainingTime = {
    seconds: string,
    minutes: string,
    hours: string,
    days: string,
}

export const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

export default function CountdownTimer({ countdownTimestampMS }: CountdownTimerProps) {
    const [remainingTime, setRemainingTime] = useState<RemainingTime>(defaultRemainingTime);

    const updateRemainingTime = (countdownMS: number) => {
        const newRemainingTime = getRemainingTimeMS(countdownMS);

        setRemainingTime(newRemainingTime)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMS)
        }, 1000)

        return () => clearInterval(intervalId);
    }, [countdownTimestampMS])

    return (
        <div className='countdown-timer'>
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span className='two-numbers'>{remainingTime.hours}</span>
            <span>hours</span>
            <span className='two-numbers'>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span className='two-numbers'>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    )
}