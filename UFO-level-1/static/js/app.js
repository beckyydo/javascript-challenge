// from data.js
var tableData = data;

// Select button and form
var button = d3.select("#filter-btn");

function ufo_filter() {
  
    // Select the input element and get the raw HTML node
    var input_date = d3.select("#datetime").text();

    console.log(input_date);
    console.log(tableData);
};

button.on("click", ufo_filter);