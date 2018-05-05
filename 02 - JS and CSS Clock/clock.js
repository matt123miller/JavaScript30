
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    
    const now = new Date();
    const secondsDeg = (360 / 60) * now.getSeconds();
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
}
setInterval(setDate, 1000);