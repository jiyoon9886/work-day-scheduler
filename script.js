/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar */

var dateToday = moment().format("dddd MMM do YYYY");
$("#currentDay").text(dateToday);
/* console.log(moment().format(h:mm:ss:)); */

/* WHEN I scroll down
THEN I am presented with timeblocks for standard business hours (9-5)
 */
var hours = [
  {stringTime: "9AM", numTime: 0900},
  {stringTime: "10AM", numTime: 1000},
  {stringTime: "11AM", numTime: 1100},
  {stringTime: "12PM", numTime: 1200},
  {stringTime: "1PM", numTime: 1300},
  {stringTime: "2PM", numTime: 1400},
  {stringTime: "3PM", numTime: 1500},
  {stringTime: "4PM", numTime: 1600},
  {stringTime: "5PM", numTime: 1700}
];



//function(){return()}
//()=>()
//make a row for every hour from 9 am to 5pm
hours.map((hour) => {
  var hourRow = $("<div>");
  //hourRow.attr("class", "row hour");
  var hourSpan = $("<span>");
  hourSpan.attr("class", "hour col-1");
  hourSpan.text(hour.stringTime);
  //hourRow.text(hour.stringTime);
  var textBox = $("<textarea>");
  textBox.attr("class", "description col-10");
  var storeVal = localStorage.getItem(hour.stringTime);
  if (storeVal) {
    textBox.val(storeVal);
  }
  var saveButton = $("<button>");
  saveButton.attr("class", "saveBtn col-1");
  saveButton.text("Save");
  saveButton.on("click", function() {
    localStorage.setItem(hour.stringTime, textBox.val());
  });
  hourRow.append(hourSpan);
  hourRow.append(textBox);
  hourRow.append(saveButton);
  $(".container").append(hourRow);
  

  


  /* WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future*/ 

  var timeNow = parseInt(moment().format("HH") + "00");
  console.log("THE PRESENT", timeNow);
  console.log("CALENDAR TIME",hour.numTime)

  if (hour.numTime === timeNow) {
      hourRow.attr("class", "row time-block present");
  } 
  if (hour.numTime < timeNow) {
    hourRow.attr("class", "row time-block past");
  } 
  if (hour.numTime > timeNow) {
  hourRow.attr("class", "row time-block future");
  } 
});


//WHEN I click into a timeblock

//THEN I can enter an event

//WHEN I click the save button for that timeblock


//THEN the text for that event is saved in local storage

//WHEN I refresh the page
//THEN the saved events persist 