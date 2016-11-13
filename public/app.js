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
// if (timer >= 1) {
//  	document.getElementByID("start").disabled = true;  
// }
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