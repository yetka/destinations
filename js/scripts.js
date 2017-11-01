function Destination(name, country, time, notes) {
  this.name = name;
  this.country = country;
  this.time = time;
  this.notes = notes;
}





$(document).ready(function() {
  var collections = [];
  $("#destinations").submit(function(event) {
    event.preventDefault();

    var name = $("#destinationName").val();
    $("#destinationName").val("");
    var country = $("#destinationCountry").val();
    $("#destinationCountry").val("");
    var time = $("#destinationTime").val();
    $("#destinationTime").val("");
    var notes = $("#destinationNotes").val();
    $("#destinationNotes").val("");

    var newDestination = new Destination(name, country, time, notes);
    collections.push(newDestination)
    $(".display").append('<div class="show-destination">' +
                        '<li>' +
                         newDestination.name +
                        '</li>' +
                        '</div>')


    $(".show-destination").last().click(function() {
      $(".name").text(newDestination.name);
      $(".country").text(newDestination.country);
      $(".time").text(newDestination.time);
      $(".notes").text(newDestination.notes);
      $("#display-destination").show();
    });
  });
});
