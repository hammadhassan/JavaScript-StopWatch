var sec = 00;
var min = 00;
var hour = 00;
var t;
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
function timer() {
    setTimeout(time, 1000);
} 
start.onclick = timer;
if (timer >= 1) {
 	document.getElementsByID("start").disabled = true;  
}
function stop() {
     clearTimeout(timer);
}
function reset() {
     document.getElementsByTagName("h2") = "00:00:00";
     sec = 00; min = 00; hour = 00; 
}