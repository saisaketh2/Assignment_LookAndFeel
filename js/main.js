/**
 * Your JS code here
 */

/**
 * Sample code
 */
//document.addEventListener('DOMContentLoaded', function() {
//  var ulElement = document.getElementById('links');
//  var liElement = document.createElement('li');
//  liElement.appendChild(document.createTextNode('created by main.js'));

//  ulElement.appendChild(liElement);
//});

$.getJSON("https://api.fda.gov/food/enforcement.json?search=distribution_pattern:%22nationwide%22&limit=5",
    function (data) {
        console.log(data);

        var country = data.country;

        $(".c2").append(country);
    });