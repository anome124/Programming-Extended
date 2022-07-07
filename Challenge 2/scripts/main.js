// Changes scene with buttons
function sceneMorning() {
    console.log("Morning");
    document.getElementById("scene").innerHTML = '<img class="background" src="images/marsDay.jpg">';
    document.getElementById("buttonEvening").innerHTML = '<img src="images/evening_outline_turquoise.png" class="outline">';
    document.getElementById("buttonMorning").innerHTML = '<img src="images/morning_outline_white.png" class="outline_selected">';
}

function sceneEvening() {
    console.log("Evening");
    document.getElementById("scene").innerHTML = '<img class="background" src="images/marsNight.jpg">';
    document.getElementById("buttonMorning").innerHTML = '<img src="images/morning_outline_turquoise.png" class="outline">';
    document.getElementById("buttonEvening").innerHTML = '<img src="images/evening_outline_white.png" class="outline_selected">';
}

// Rover light
document.getElementById("rover").onmouseenter = function () {
    document.getElementById("rover").innerHTML = '<img src="images/marsRoverLight.png">';
}

document.getElementById("rover").onmouseout = function () {
    document.getElementById("rover").innerHTML = '<img src="images/marsRover.png">';
}


// Date
var currentDate = new Date();
var date = zero(currentDate.getDate());
var year = currentDate.getFullYear() + 10; //extra years for realism
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = monthNames[currentDate.getMonth()];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = dayNames[currentDate.getDay()];

// Display date
document.getElementById("date").innerHTML = day + ", " + date + " " + month + " " + year;


// Time
function clock() {
    var clock = document.getElementById('clock');
    var time = new Date();
    var hours = zero(time.getHours());
    var minutes = zero(time.getMinutes());
    var seconds = zero(time.getSeconds());


    // Display time
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(clock, 1000);

function zero(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}