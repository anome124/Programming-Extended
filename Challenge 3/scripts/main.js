
// Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYm95a29saWxrb3YiLCJhIjoiY2w1OXJkdW13MDE0aDNjbnh3a2x1Y24xOSJ9.ayv-MaZ8MtN-AlO8mghrYA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/boykolilkov/cl59sf6jx001d15qs2zvglcq2',
    center: [5.0000, 40.0000],
    zoom: 0
});

// OpenWeather
var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
var openWeatherMapUrlApiKey = '5c5e209cb30b998d74ca1f5ade3c719e';

var cities = [
	{
		name: 'The Hague',
		coordinates: {

			lat: 52.0706,
			lon: 4.3129
		} 
	},
	{
		name: 'Plovdiv',
		coordinates: {
			lat: 42.1354,
			lon:  24.7453
		}
	},
]

window.onload=function() {
	cities.forEach(function(city, index) {
		var request = openWeatherMapUrl + "?" + "appid=" + openWeatherMapUrlApiKey + "&lon=" + city.coordinates.lon + "&lat=" + city.coordinates.lat;

		fetch(request)
			.then(function(response) {
				if(!response.ok) throw Error(response.statustext);
				return response.json();
			})
			.then(function(response) {
				console.log(response.weather[0].icon, city);
				var icon = response.weather[0].icon;
				var description = response.weather[0].description;
				var temperature = Math.floor(response.main.temp - 273.25);
				var imageSrc = 'http://openweathermap.org/img/w/' + icon + '.png';
				document.getElementById(`city${index+1}-img`).setAttribute('src', imageSrc);
				document.getElementById(`description${index+1}`).innerHTML=description;
				document.getElementById(`temperature${index+1}`).innerHTML=temperature + " °C";
			})
			.catch(function (error) {
				console.log('There was an error:', error);
			});
	});
};