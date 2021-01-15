// from data.js
var tableData = data;

// Select button and form
var button = d3.select("#filter-btn");
var form = d3.select("form");

function ufo_filter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var input_date = d3.select("#datetime");
    var input_city = d3.select("#city");
    var input_state = d3.select("#state");
    var input_country = d3.select("#country");
    var input_shape = d3.select("#shape");

    // Get the value property of the input element
    var date_value = input_date.property("value");
    var city_value = input_city.property("value");
    var state_value = input_state.property("value");
    var country_value = input_country.property("value");
    var shape_value = input_shape.property("value");


    // View input on console
    console.log(date_value);
    console.log(city_value);
    console.log(state_value);
    console.log(country_value);
    console.log(shape_value);

    // Filter data by multiple criteria
    var filter_data = tableData.filter(sighting => (sighting.datetime == date_value && 
        sighting.city == city_value && 
        sighting.state == state_value &&
        sighting.country == country_value &&
        sighting.shape == shape_value));

    console.log(filter_data);
    console.log(filter_data.length);

    // Select table body
    var body = d3.select("tbody");

    // Remove any old table rows
    body.html("");

    var no_sighting = `No Sightings with those criteria. Try again :)`

    if (filter_data.length === 0) {
        body.append("tr");
        body.append("td").text(no_sighting);
    } else {
        // Create table 
        filter_data.forEach((sight) => {
          // Add row into the table
          var row = body.append("tr");

          // Add value in row
          Object.entries(sight).forEach( ([key, value]) => {
               var cell = row.append("td");
               cell.text(value);
           });
        });    
    }
};

button.on("click", ufo_filter);
form.on("submit", ufo_filter);