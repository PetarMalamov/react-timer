import dayjs from 'dayjs'
import { defaultRemainingTime, RemainingTime } from '../components/CountdownTimer'

export const getRemainingTimeMS = (timestampMS: number): RemainingTime => {
    const timestampDayjs = dayjs(timestampMS);
    const nowDayjs = dayjs();

    if (timestampDayjs.isBefore(nowDayjs)) return defaultRemainingTime;

    return {
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs),
    }
}

const getRemainingSeconds = (dateNow: dayjs.Dayjs, expectedDate: dayjs.Dayjs): string => {
    const seconds = expectedDate.diff(dateNow, 'seconds') % 60;

    return padWithZeros(seconds, 2);
}
const getRemainingMinutes = (dateNow: dayjs.Dayjs, expectedDate: dayjs.Dayjs): string => {
    const minutes = expectedDate.diff(dateNow, 'minutes') % 60;

    return padWithZeros(minutes, 2);
}
const getRemainingHours = (dateNow: dayjs.Dayjs, expectedDate: dayjs.Dayjs): string => {
    const hours = expectedDate.diff(dateNow, 'hours') % 24;

    return padWithZeros(hours, 2);
}
const getRemainingDays = (dateNow: dayjs.Dayjs, expectedDate: dayjs.Dayjs): string => {
    const days = expectedDate.diff(dateNow, 'days');

    return days.toString()
}

const padWithZeros = (number: number, minLength: number): string => {
    const numberString = number.toString();

    if (numberString.length >= minLength) return numberString;

    return "0".repeat(minLength - numberString.length) + numberString;
}