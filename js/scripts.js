$(document).ready(function() {
  $(".list").hide();
  $("form#smurf-form").submit(function() {
    event.preventDefault();



    var a = $("#item1").val();
    var b = $("#item2").val();
    var c = $("#item3").val();
    var d = $("#item4").val();

    var items = [a, b, c, d];


    items.sort();

    var capItems = items.map(function(items) {
      return item.toUpperCase();
    });

    capItems.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $(".story").show();

  });
});










/* This site will take in "strings" via inputs and jQuery will
take the strings, display them in a div while using .sort() to alphabatize them
and .toUpperCase(); to make them uppercase when displayed.

When shopping list is displayed the form will .hide();


$(document).ready(function() {
  $(".list").hide();
  $("#button").on("click",function() {
    var blanks = ["item1", "item2", "item3", "item4"];

    blanks.sort();

    var capBlanks = blanks.map(function(blank) {
      return blank.toUpperCase();
    });

    capBlanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });


    $(".story").show();

    event.preventDefault();
  });
});
