function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/ 60) * 360)+90;
    const secondHand = document.querySelector('.second-hand');

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    
    const mins = now.getMinutes();
    const minsDegree = ((mins/60) * 360) + 90;
    const minsHand = document.querySelector('.min-hand');

    minsHand.style.transform = `rotate(${minsDegree}deg)`;

    const hour = now.getMinutes();
    const hourDegree = ((hour/12) * 360) + 90;
    const hourHand = document.querySelector('.min-hand');
    
    hourHand.style.transform = `rotate(${hourDegree}deg)`;



    
    console.log(seconds);
}

setInterval(setDate, 1000);
