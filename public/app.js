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
// document.getElementById("start").disabled = true;
 start.onclick = timer;
 if (document.getElementById("timer").value.length >= 1) {
    document.getElementById("start").disabled = true;
}
function stop() {
     clearTimeout(t);
}
stop.onclick = stop;
if (document.getElementById("timer").value.length == 0) {
document.getElementById("stop").disabled = true;
} else {
    document.getElementById("stop").disabled = false;
}

function reset() {
     clearInterval(t);
     document.getElementById("timer").innerHTML = "00:00:00";
     sec = 00; min = 00; hour = 00;  
}
reset.onclick = reset;

if (document.getElementById("timer").value.length == 0) {
document.getElementById("reset").disabled = true;
} else {
    document.getElementById("reset").disabled = false;
}