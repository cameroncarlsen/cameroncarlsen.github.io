//console.log('My javascript is being read.');

// Variables
console.log
const temp = 31;
const speed = 5;
buildWC(speed, temp);

const direction = "WSW";
windDial(direction);


// Calculate
function buildWC(speed, temp) {
    const feelTemp = document.getElementById('feels-like');

    //Compute
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round
    wc = Math.floor(wc);


    wc = (wc > temp) ? temp : wc;

    // Display windchill
    console.log(wc);
    wc = 'Feels like ' + wc + '&deg;F';
    feelTemp.innerHTML = wc;
}



function windDial(direction) {

    const dial = document.getElementById("dial");
    console.log(direction);


    switch (direction) {
        case "North":
        case "N":
            dial.setAttribute("class", "n");
            break;

        case "NE":
        case "NNE":
        case "ENE":
            dial.setAttribute("class", "ne");
            break;

        case "NW":
        case "NNW":
        case "WNW":
            dial.setAttribute("class", "nw");
            break;

        case "South":
        case "S":
            dial.setAttribute("class", "s");
            break;

        case "SE":
        case "SSE":
        case "ESE":
            dial.setAttribute("class", "se");
            break;

        case "SW":
        case "SSW":
        case "WSW":
            dial.setAttribute("class", "sw");
            break;

        case "East":
        case "E":
            dial.setAttribute("class", "e");
            break;

        case "West":
        case "W":
            dial.setAttribute("class", "w");
            break;
    }
}


const CURWEATHER = "raining";
let weatherImage = getCondition(CURWEATHER);

changeSummaryImage(weatherImage);



function getCondition(CURWEATHER) {
    if (CURWEATHER.includes("cloud") || CURWEATHER.includes("overcast")) {
        return 'cloud';
    }

    else if (CURWEATHER.includes('rain') || CURWEATHER.includes('damp')) {
        return 'rain';
    }

    else if (CURWEATHER.includes('sun') || CURWEATHER.includes('clear')) {
        return 'clear';
    }

    else if (CURWEATHER.includes('snow') || CURWEATHER.includes('cold')) {
        return 'snow';
    }

    else(CURWEATHER.includes('fog') || CURWEATHER.includes('hazy'))
    return 'fog';

}

function changeSummaryImage(weatherImage) {
    // Get image
    const summaryImage = document.getElementById("curWeather");
    console.log(weatherImage);


    switch (weatherImage) {
        case "cloud":
            summaryImage.setAttribute("class", "cloud");
            break;

        case "rain":
            summaryImage.setAttribute("class", "rain");
            break;

        case "clear":
            summaryImage.setAttribute("class", "clear");
            break;

        case "snow":
            summaryImage.setAttribute("class", "snow");
            break;

        case "fog":
            summaryImage.setAttribute("class", "fog");
            break;
    }
}
