$(document).ready(function () {

    var cities = [""];

    $("#button-addon2").on("click", function (event) {

        $("#cityName").val("");
        var city;
        var apiKey = "&appid=e5c684f0981af39e88d0e294778b62f6";


        event.preventDefault();
        city = $("#citySearch").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + apiKey;

        cities.push(city);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // This function looks up the city data object
            var lat = response.coord.lat;
            var lon = response.coord.lon;
            let latLon = "&lat=" + lat + "&lon=" + lon;

            event.preventDefault();
            console.log(response);
            // I want to add each city name to the bootstrap class = "list-group"
            $("#city-view").append('<li>').append(city).text();

            // I want to add the City Name, Temperature, Humidity, Wind Speed, and UV Index to the card body

            // The cityName keeps adding to the list and I want to make it refresh with a new city name

            $("#cityName").html(city).text();

            $("#temp").html('<p>').append("Temperature: " + Math.floor(response.main.temp) + " °F").text();

            // $("#temp").append("<p>").append("Temperature:" + temp)).text;
            $("#humidity").html('<p>').append("Humidity: " + Math.floor(response.main.humidity) + " %").text();


            // $("#humidity").append('<p>').append("Humidity: " + humidity).text;
            $("#windSpeed").html('<p>').append("Wind Speed: " + Math.floor(response.wind.speed) + " MPH").text();


            // $("#windSpeed").append('<p>').append("Wind Speed: " + windSpeed).text;

            $.ajax({

                url: "https://api.openweathermap.org/data/2.5/onecall?" + apiKey + latLon,
                method: "GET"

            }).then(function (response) {

                event.preventDefault();



                // var uvIndex = lat + lon;
                // I can get the correct information, but I can't append it to the UV Index <p>
                var uvi = console.log(response.current.uvi);
                // $("#uvIndex").html('<p>').append("UV Index: " + (uvi).text());

                // var iconcode = a.weather[0].icon;
                // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                // $('#wicon').attr('src', iconurl);


            })

            $.ajax({

                url: queryURL,  //iconcode +".png",
                method: "GET"

            }).then(function (response) {

                var iconcode = response.weather[0].icon;
                var iconnurl = queryURL + iconcode + ".png";
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                var fiveDay = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + apiKey + '&q=' + city + '&count=10';
                var d = new Date();
                var dat = d.getDate();
                var mon = d.getMonth();

                event.preventDefault();

                //$("#fiveDay").append("<div>").append(
                $("#date").html("<h5>").append(Date()).text;
                console.log(response.weather[0].icon);
                $('#wicon').append("<img>").attr('src', iconurl);
                $("#temperature").html('<p>').append("Temp: " + Math.floor(response.main.temp) + " °F").text();
                $("#humid").html('<p>').append("Humidity: " + Math.floor(response.main.humidity) + " %").text();

            })


            // $.each(response, function (index, val) {
            //     $("#date").append("<b>Day" + index + "</b>: ").text() // Day
            //     $('#wicon').append("<img>").attr('src', iconurl);
            //     $("#temperature").html('<p>').append("Temp: " + Math.floor(response.main.temp) + " °F").text();
            //     $("#humid").html('<p>').append("Humidity: " + Math.floor(response.main.humidity) + " %").text();
            // });
        })

    })

})



