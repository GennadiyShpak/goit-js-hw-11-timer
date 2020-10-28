'use strict';

const refs = {
  dayCounter: document.querySelector('[data-value="days"]'),
  hoursCounter : document.querySelector('[data-value="hours"]'),
  minutesCounter: document.querySelector('[data-value="mins"]'),
  secondsCounter: document.querySelector('[data-value="secs"]'),
  };

class CountdownTimer {
  constructor({selector='',targetDate=''}={}) {
   this.selector=selector;
   this.targetDate=targetDate;
}

  start() {
    const z = document.querySelector(this.selector);
console.log(z);
    const finalDate = this.targetDate.getTime();
    const timerId = setInterval(()=>{
    const date = Date.now();
    const time = finalDate-date;
    const timerTime = getTimeComponents(time);
    updateClockFace(timerTime);
  },1000);}

  stop() {
    clearInterval(this.timerId)
  }
};


function updateClockFace ({days, hours, mins, secs}) {
  refs.dayCounter.textContent = days;
  refs.hoursCounter.textContent = hours;
  refs.minutesCounter.textContent = mins;
  refs.secondsCounter.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2,'0');
}

function getTimeComponents(time) {
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  return {days, hours, mins, secs}
}

const timerCounter = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 30, 2020'),
  }
);

timerCounter.start()