let hrhand = document.getElementById('hour');
let mmhand = document.getElementById('min');
let sechand = document.getElementById('sec');

function showTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hrhand.style.transform =`rotate(${hRotation}deg)`;
    mmhand.style.transform = `rotate(${mRotation}deg)`;
    sechand.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(showTime,1000);