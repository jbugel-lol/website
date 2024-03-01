window.onload = function () {
	var now = new Date();
	var hour = now.getHours();
	var greeting;

	if (hour >= 5 && hour < 9) {
		greeting = "Good Morning";
	} else if (hour >= 9 && hour < 14) {
		greeting = "Good Day";
	} else if (hour >= 14 && hour < 17) {
		greeting = "Good Afternoon";
	} else if (hour >= 17 && hour < 20) {
		greeting = "Good Evening";
	} else {
		greeting = "It's the middle of the night! Get some sleep!";
	}

	document.getElementById("greeting").innerHTML = greeting;
};
