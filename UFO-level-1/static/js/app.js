// from data.js
var tableData = data;

// Select button and form
var button = d3.select("#filter-btn");

function ufo_filter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // View input on console
    console.log(inputValue);

    // Filter data by date
    var filter_data = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filter_data);
    console.log(filter_data.length);

    // Select table body
    var body = d3.select("tbody");

    // Remove any old table rows
    body.html("");

    var no_sighting = `No Sightings on ${inputValue}. Try a different date. :)`

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