// Global Variables for DOM Elements
var displayCurrentDay = $(`#currentDay`);
var hour9Div = $(`#hour-9`);
var hour10Div = $(`#hour-10`);
var hour11Div = $(`#hour-11`);
var hour12Div = $(`#hour-12`);
var hour13Div = $(`#hour-13`);
var hour14Div = $(`#hour-14`);
var hour15Div = $(`#hour-15`);
var hour16Div = $(`#hour-16`);
var hour17Div = $(`#hour-17`);
var saveButtonEl = $(`.saveBtn`);
var description = $(`.description`);

var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 13;
var hour14 = 14;
var hour15 = 15;
var hour16 = 16;
var hour17 = 17;
var currentHour = dayjs().hour();

// PSEUDOCODE

// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDay = dayjs().format(`dddd, MMMM D, YYYY`);
displayCurrentDay.append(currentDay);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    // find a way to programmatically add or remove the appropriate class
    // Note: Colors need to shift at the START of a new hour. No worries about minutes. If hour = hour then color.

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // Hiding and showing the pre-defined classes
    // If time is >=< current time, then those classes get applied
    // Do we need to set standard business hours?


if (dayjs(currentHour).isAfter(hour9)) {
    hour9Div.addClass(`past`);
} else if (dayjs(currentHour).isBefore(hour9)) {
    hour9Div.addClass(`future`);
} else if (dayjs(currentHour).isSame(hour9))
    hour9Div.addClass(`present`);

if (dayjs(currentHour).isAfter(hour10)) {
    hour10Div.addClass(`past`);
} else if (dayjs(currentHour).isBefore(hour10)) {
    hour10Div.addClass(`future`);
} else if (dayjs(currentHour).isSame(hour10))
    hour10Div.addClass(`present`);

if (dayjs(currentHour).isAfter(hour11)) {
    hour11Div.addClass(`past`);
} else if (dayjs(currentHour).isBefore(hour11)) {
    hour11Div.addClass(`future`);
} else if (dayjs(currentHour).isSame(hour11))
    hour11Div.addClass(`present`);

if (dayjs(currentHour).isAfter(hour12)) {
    hour12Div.addClass(`past`);
} else if (dayjs(currentHour).isBefore(hour12)) {
    hour12Div.addClass(`future`);
} else if (dayjs(currentHour).isSame(hour12))
    hour12Div.addClass(`present`);

if (dayjs(currentHour).isAfter(hour13)) {
    hour13Div.addClass(`past`);
} else if (dayjs(currentHour).isBefore(hour13)) {
    hour13Div.addClass(`future`);
} else if (dayjs(currentHour).isSame(hour13))
    hour13Div.addClass(`present`);

if (dayjs(currentHour).isAfter(hour14)) {
    hour14Div.addClass(`past`);
} else if (dayjs(currentHour).isBefore(hour14)) {
    hour14Div.addClass(`future`);
} else if (dayjs(currentHour).isSame(hour14))
    hour14Div.addClass(`present`);

if (dayjs(currentHour).isAfter(hour15)) {
    hour15Div.addClass(`past`);
} else if (dayjs(currentHour).isBefore(hour15)) {
    hour15Div.addClass(`future`);
} else if (dayjs(currentHour).isSame(hour15))
    hour15Div.addClass(`present`);

if (dayjs(currentHour).isAfter(hour16)) {
    hour16Div.addClass(`past`);hour
} else if (dayjs(currentHour).isBefore(hour16)) {
    hour16Div.addClass(`future`);
} else if (dayjs(currentHour).isSame(hour16))
    hour16Div.addClass(`present`);

if (dayjs(currentHour).isAfter(hour17)) {
    hour17Div.addClass(`past`);
} else if (dayjs(currentHour).isBefore(hour17)) {
    hour17Div.addClass(`future`);
} else if (dayjs(currentHour).isSame(hour17))
    hour17Div.addClass(`present`);


// WHEN I click into a timeblock
// THEN I can enter an event
    //Grab text input (text areas)
function textInput(event) {
    event.preventDefault();

// Grabs text input of .description class

    var hourlyDescription = $(this).siblings('.description').val().trim();
    console.log(hourlyDescription)

// Returns the ID of the DIV, in which the text & save button are clicked, in order to save to local storage

    var savedTimeBlock = $(this).parent().attr('id');
    console.log(savedTimeBlock);
    
// Save the key as the hour and the value as the input and store in local storage

    var schedule = localStorage.setItem(savedTimeBlock, hourlyDescription); 
    
    var schedule = localStorage.getItem(savedTimeBlock);
    console.log(schedule);
    description.text(schedule);



    // var scheduleInputs = {
    //     hour: savedTimeBlock,
    //     value: hourlyDescription,
    // };

    // add project to local storage
    // var schedule = readScheduleFromStorage();
    // schedule.push(scheduleInputs);
    // saveScheduleToStorage();

  // print project data
    // printScheduleData();

}

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    // EventListener on the save button
    // Create variable (can be global), get the value
    // Set it to local storage (what will this data look like?)
    
saveButtonEl.on(`click`, textInput);

// WHEN I refresh the page
// THEN the saved events persist (confirms that data was entered into LocalStorage)
    // Getting from Local storage
    // Parse the data from LocalStorage to turn it back into an object that can be read (If the data was stored as a JSON)
    // To have it display as the string it was entered as
    // Input above the hours to confirm, that when the save button is pushed it is stored in localStorage

// Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.
// projects = schedule


// function readScheduleFromStorage() {
//     var schedule = localStorage.getItem(savedTimeBlock);
//     console.log(schedule);
//     description.text(schedule);

//     var schedule = JSON.parse(localStorage.getItem(savedTimeBlock, hourlyDescription));
//     console.log(schedule);
//     var schedule = localStorage.getItem('schedule');
//     if (schedule) {
//       schedule = JSON.parse(schedule);
//     } else {
//       schedule = [];
//     }
//     return schedule;
// }

// Takes an array of schedules and saves them in localStorage.
// function saveScheduleToStorage() {
//     localStorage.setItem('savedTimeBlock', JSON.stringify(schedule));
// }

// Gets schedule data from local storage and displays it
function printScheduleData() {

    // clear current schedules on the page
    description.empty();
  
    // get schedule from localStorage
    readScheduleFromStorage();
}

// printScheduleData();
// Key value pair: key = hour & value = input
// Refer to mini project
// Activity 10, multiple save buttons - event delegation on each button needs to be unique, to know which to save it to
// Activity 2
// Activity 8

// ** v CODE INSTRUCTIONS v **

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function init () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
