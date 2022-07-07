// Parameters
document.getElementById("fuel").innerHTML = "Fuel: " + Math.floor(Math.random() * 300) + " million liters";
document.getElementById("throttle").innerHTML = "Throttle: " + Math.floor(Math.random() * 100) + "%";
document.getElementById("speed").innerHTML = "Speed: " + (Math.floor(Math.random() * 60) + 500) + " * 10^3 km/h";
var gforce = Math.random() + 9.3;
document.getElementById("gforce").innerHTML = "G-force: " + gforce.toFixed(2) + " 9.807 m/s²";

// Metrics
function gravity() {
    document.getElementById("gravity").innerHTML = Math.floor(Math.random() * 50) + " m/s";
}
function atmosphere() {
    document.getElementById("atmosphere").innerHTML = "Oxygen level: " + Math.floor(Math.random() * 100) + " %";
}

// Supplies
function foodSupplies() {
    var food = parseFloat(document.getElementById("food").value);
    if (Number.isNaN(food) === true) { 
        alert("This is not a number.");
        return;
    }
    else {
        var days = food * 0.75;
        document.getElementById("foodLeft").innerHTML = food + " KG food will take " + days.toFixed(2) + " days";
    }
}
function waterSupplies() {
    var water = parseFloat(document.getElementById("water").value);
    if (Number.isNaN(water) === true) { 
        alert("This is not a number.");
        return;
    }
    else {
        var days = water * 0.6;
        document.getElementById("waterLeft").innerHTML = water + " L water will take " + days.toFixed(2) + " days";
    }
}

// Metrics
function gravityMars() {
    document.getElementById("gravity").innerHTML = "The gravity on Mars is 3.721 m/s²";
}
function gravityEarth() {
    document.getElementById("gravity").innerHTML = "The gravity on Earth is 9.807 m/s²";
}

function convertKm() {
    var earthKilometers = parseFloat(document.getElementById("earth_kilometers").value);
    var marsKilometers = earthKilometers * 0.333;
    if (Number.isNaN(earthKilometers) === true) {
        alert("This is not a number.");
        return;
    }
    else {
        document.getElementById("marsKilometers").innerHTML = earthKilometers + " kilometres " + marsKilometers.toFixed(2) + " mars km";
    }
}