function showWeather(){

    let city = document.getElementById("city").value;

    let result = document.getElementById("result");

    result.innerHTML =
        "Weather in " + city + " is Sunny";
}