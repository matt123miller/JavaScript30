console.log('hello world');


function playSound(event) {
    const keycode = event.keyCode;
    
    const sound = document.querySelector(`audio[data-key="${keycode}"]`);
    const key = document.querySelector(`.key[data-key="${keycode}"]`);
    if(!sound) { return };

    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if (e.propertyName === 'transform'){
        e.target.classList.remove('playing');
    }
}

const keys = document.querySelectorAll('.key');

keys.forEach(k => k.addEventListener('transitionend', removeTransition))

document.addEventListener('keydown', playSound);
