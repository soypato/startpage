let motivationText = ''

const startTime = () => {
    let today = new Date();
    let hourNow = today.getHours();
    let minutesNow = today.getMinutes();
    let secondsNow = today.getSeconds();
    h = checkTime(hourNow);
    m = checkTime(minutesNow);
    s = checkTime(secondsNow);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function() {
        startTime()
    }, 500);

    if (hourNow > 0 && hourNow < 10) {
        motivationText = '¡Buenos días! Hoy será una gran jornada. 🌅'
    }
    if (hourNow > 10 && hourNow < 12) {
        motivationText = '¡Hermosa mañana! El día está arrancando ¡será genial! 🌞'
    }
    if (hourNow > 12 && hourNow < 14) {
        motivationText = '¡Provecho! Recordá alimentarte bien y tomar agüita 💧.'
    }
    if (hourNow > 14 && hourNow < 19) {
        motivationText = '¡Buenas tardes! #StayFocused en tus objetivos 📚'
    }
    if (hourNow > 19 && hourNow <= 23) {
        motivationText = '¡Buenas noches! Recordá alimentarte y descansar bien. 🌙'
    }
}

const body = document.querySelector('body').addEventListener('load', startTime())


const motivationDiv = document.querySelector('#motivationDiv')
motivationDiv.innerHTML = motivationText

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}