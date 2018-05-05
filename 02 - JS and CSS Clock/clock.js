
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

    const now = new Date();
    const secondsDeg = (360 / 60) * now.getSeconds() + 90;
    const minutesDeg = (360 / 60) * now.getMinutes() + 90;
    const hoursDeg = (360 / 12) * now.getHours() + 90;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);