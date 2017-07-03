// Shorthand for $( document ).ready()
$(function() {
    // let's get started
    var mysvg = d3.select("#myfigure").append("svg");

    mysvg.append("rect")
        .attr("height",600)
        .attr("width",600)
        .attr("fill","black");

    console.log("finished.");
    console.log("finished.");
    

    d3.text("data/my-data.txt",function() {});
});

