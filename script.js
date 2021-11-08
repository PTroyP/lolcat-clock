var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var partyButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function()
{
var messageText;
var timeEventJS = document.getElementById("timeEvent");
var lolcat = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";


if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";

} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";

} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://images.unsplash.com/photo-1589028844256-885b4e46a2dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
    image = "https://images.pexels.com/photos/2528320/pexels-photo-2528320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
	messageText = "Good Evening!";
} else {
   messageText = "Good afternoon!";
	image = "https://images.pexels.com/photos/3472158/pexels-photo-3472158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
}

timeEventJS.innerText = messageText;
lolcat.src = image;

var showCurrentTime = function ()
{
	// display the string on the webpage
	var clock = document.getElementById('clock');

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	// Set hours
	if (hours >= noon)
	{
		meridian = "PM";
	}
	if (hours > noon)
	{
		hours = hours - 12;
	}

	// Set Minutes
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}

	// Set Seconds
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}

	// put together the string that displays the time
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

	clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyButton.innerText = "Party Over";
	  partyButton.style.backgroundColor = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyButton.innerText = "Party Time!";
	  partyButton.style.backgroundColor = "#222";
   }
};

var wakeUpEvent = function()
{
	wakeupTime = wakeUpTimeSelector.value;
};
var lunchEvent = function()
{
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function()
{
	napTime = napTimeSelector.value;
};

partyButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
