'use strict';


const QUERY = document.getElementById("query");


QUERY.addEventListener("keyup", function () {
    let value = QUERY.value;


    const SCRIPT_ELEMENT = document.createElement('script');


    SCRIPT_ELEMENT.src = "https://autocomplete.wunderground.com/aq?query=" + value + "&cb=processJSON";


    document.getElementsByTagName('head')[0].appendChild(SCRIPT_ELEMENT);

});


function processJSON(json) {

    console.log(json);


    let list = "<ul>";
    for (let i = 0, n = json.RESULTS.length; i < n; i++) {
        list += "<li><a data-location='zmw:"+ json.RESULTS[i].zmw +"' href='https://wunderground.com/" + json.RESULTS[i].l + "' title='See weather information for " + json.RESULTS[i].name + "' target='_blank' onclick='event.preventDefault()'>" + json.RESULTS[i].name + "</a></li>";
    };
    list += "</ul>";


    searchResults.innerHTML = list;
}

let search = document.getElementById("searchResults");

search.addEventListener("click", function (event) {
    let loc = event.target.dataset.location;
    event.preventDefault();

    console.log(loc);

    getData(loc);

});


