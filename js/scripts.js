


$(document).ready(function() {
  $("#count").submit(function(event) {
    var count = parseInt($("input#number").val());
    var diviser = parseInt($("input#diviser").val());
    var result = [];
    if (count === NaN) {
      alert("Please enter a number")
    } else {
      for (var i = diviser; i <= count; i += diviser) {
        result.push(i);
    }
    }
    result.forEach(function(result) {
    $(".results").append("<li>" + result + "</li>");
  });
    $(".output").show();
    $("#count").hide();



    event.preventDefault();
 });

});
// function howMany(selectObject) {
//   var numberSelected = 0;
//   for (var i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
