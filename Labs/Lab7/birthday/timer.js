var interval = null;
var time = 0;
var record = -1;

function tick() {
	time += 1;
	document.getElementById("timer").innerHTML = ("Current time: " + time/100 + "s");
}

function startTimer() {
	time = 0;
	document.getElementById("timer").innerHTML = ("0.00s");
	interval = setInterval(function() {tick()}, 10);
}

function stopTimer() {
	if (interval)
		clearInterval(interval);
}

function updateRecord() {
	if (time < record || record == -1) {
		record = time;
		document.getElementById("record").innerHTML = ("Your record: " + time/100 + "s");
		document.getElementById("recordnote").innerHTML = ("New time record!!!");
	}
}
