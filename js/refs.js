export default function getRefs () {
    return {
    dayCounter: document.querySelector('[data-value="days"]'),
    hoursCounter : document.querySelector('[data-value="hours"]'),
    minutesCounter: document.querySelector('[data-value="mins"]'),
    secondsCounter: document.querySelector('[data-value="secs"]'),
    };
}