window.onload = function() {
    var seconds = 00;
    var minute = 00;
    var hour = 00;
    var milliSec = 000;
    var appendSeconds = document.getElementById("Seconds")
    var appendMi = document.getElementById("Minute")
    var appendHo = document.getElementById("Hour")
    var appendMill = document.getElementById("MilliSec")
    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");
    var btnReset = document.getElementById("btnReset");
    var Interval;
    btnStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    btnStop.onclick = function() {
        clearInterval(Interval);
    }
    btnReset.onclick = function() {
        clearInterval(Interval);
        hour = '00';
        minute = '00';
        seconds = '00';
        milliSec = '000';
        appendHo.innerHTML = hour;
        appendMi.innerHTML = minute;
        appendSeconds.innerHTML = seconds;
        appendMill.innerHTML = milliSec;
    }

    function startTimer() {
        milliSec++;

        if (milliSec <= 9) {
            appendMill.innerHTML = "00" + milliSec;
        }

        if (milliSec > 9) {
            appendMill.innerHTML = "0" +
                milliSec;

        }

        if (milliSec > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            milliSec = 0;
            appendMill.innerHTML = "00" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59) {
            console.log("minute");
            minute++;
            appendMi.innerHTML = "0" + minute;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if (minute > 9) {
            appendMi.innerHTML = minute;
        }
        if (minute > 59) {
            console.log("hour");
            hour++;
            appendHo.innerHTML = "0" + hour;
            minute = 0;
            appendMi.innerHTML = "0" + 0;
        }
    }
}