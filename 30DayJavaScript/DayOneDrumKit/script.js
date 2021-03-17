window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all together

    key.classList.add('playing');
    audio.currentTime = 0; //rewind from the start
    audio.play();
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip it if it is not a transform
    console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

