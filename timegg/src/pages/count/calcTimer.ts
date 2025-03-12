function calcTimeDays(timeInSeconds: number): Array<number|string> {
    let days: number = Math.floor(timeInSeconds / 86400);
    let hours: number = Math.floor((timeInSeconds - (days * 86400)) / 3600);
    let minutes: number = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    let seconds: number = timeInSeconds - (days * 86400) - (hours * 3600) - (minutes * 60);

    let daysFormat = days < 10 ? `0${days}` : days
    let hoursFormat = hours < 10 ? `0${hours}` : hours
    let minutesFormat = minutes < 10 ? `0${minutes}` : minutes
    let secondsFormat = seconds < 10 ? `0${seconds}` : seconds

    return [
        daysFormat,
        hoursFormat,
        minutesFormat,
        secondsFormat
    ]
}

export default calcTimeDays