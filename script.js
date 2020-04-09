/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar */

var dateToday = moment().format("dddd MMM do YYYY");
$("#currentDay").text(dateToday);
/* console.log(moment().format(h:mm:ss:)); */

/* WHEN I scroll down
THEN I am presented with timeblocks for standard business hours (9-5)
 */
var hours = ["9AM", "10AM","11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//make a row for every hour from 9 am to 5pm
hours.map((hour) => {
  var hourRow = $("<div>");
  hourRow.attr("class", "row hour");
  hourRow.text(hour);
  $(".time-block").append(hourRow);

  /* var timeNow = parseInt(moment().format("h"));
  var hourNow = parseInt(hour);
  //console.log(timeNow);


  if (hour === timeNow) {
      hourRow.attr("class", "hour past");
  } */

});

/* WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */