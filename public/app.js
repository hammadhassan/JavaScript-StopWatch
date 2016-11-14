var sec = 00;
var min = 00;
var hour = 00;
var t;
function timer() {
    t = setTimeout(time, 1000);
}
function time() {
    if (sec >= 60) {
        sec = 00;
        min++;
        if (min >= 60) {
            min = 00;
            hour++;
        }
    }
    document.getElementById("timer").innerHTML = (hour + ":" + min + ":" + sec++ );
    timer();
}
 start.onclick = timer;
if (document.getElementById("stop").disabled == true && document.getElementById("reset").disabled == true) {
    document.getElementById("start").disabled = false;
 } else { 
     document.getElementById("start").disabled = false;
     document.getElementById("stop").disabled = false;
     document.getElementById("reset").disabled = false;
}

function stop() {
     clearTimeout(t);
}
stop.onclick = stop;

function reset() {
     clearInterval(t);
     document.getElementById("timer").innerHTML = "00:00:00";
     sec = 00; min = 00; hour = 00;  
}
reset.onclick = reset;
/*
start
if (document.getElementById("stop").disabled = true && document.getElementById("reset").disabled = true) {
    document.getElementById("start").disabled = false;
 } else { 
     document.getElementById("start").disabled = true;
     document.getElementById("stop").disabled = false;
     document.getElementById("reset").disabled = false;
}

stop
if (document.getElementById("start").disabled = false) {
    document.getElementById("stop").disabled = true;
} else {
    document.getElementById("stop").disabled = true;
}

reset
if (document.getElementById("start").disabled = false) {
document.getElementById("reset").disabled = true;
} else {
    document.getElementById("reset").disabled = false;
}*/