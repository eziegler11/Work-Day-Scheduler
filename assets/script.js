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

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = 0; i < hours.length; i++) {
    var hour = hours[i];
    var currentHour = dayjs().hour();
    if (hour === currentHour) {
        hour9Div.addClass(`present`);
        hour10Div.addClass(`present`);
        hour11Div.addClass(`present`);
        hour12Div.addClass(`present`);
        hour13Div.addClass(`present`);
        hour14Div.addClass(`present`);
        hour15Div.addClass(`present`);
        hour16Div.addClass(`present`);
        hour17Div.addClass(`present`);
    } else if (hour < currentHour) {
        hour9Div.addClass(`past`);
        hour10Div.addClass(`past`);
        hour11Div.addClass(`past`);
        hour12Div.addClass(`past`);
        hour13Div.addClass(`past`);
        hour14Div.addClass(`past`);
        hour15Div.addClass(`past`);
        hour16Div.addClass(`past`);
        hour17Div.addClass(`past`);
    }
    else if (hour > currentHour)
        hour9Div.addClass(`future`);
        hour10Div.addClass(`future`);
        hour11Div.addClass(`future`);
        hour12Div.addClass(`future`);
        hour13Div.addClass(`future`);
        hour14Div.addClass(`future`);
        hour15Div.addClass(`future`);
        hour16Div.addClass(`future`);
        hour17Div.addClass(`future`);
}

console.log(hours);

// if (projectDate.isBefore(today)) {
//     rowEl.addClass('project-late');
//   } else if (projectDate.isSame(today)) {
//     rowEl.addClass('project-today');
//   }

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // Hiding and showing the pre-defined classes
    // If time is >=< current time, then those classes get applied
    // Do we need to set standard business hours?

// WHEN I click into a timeblock
// THEN I can enter an event
    //Grab text input (text areas)

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    // EventListener on the save button
    // Create variable (can be global), get the value
    // Set it to local storage (what will this data look like?)
        // 

// WHEN I refresh the page
// THEN the saved events persist (confirms that data was entered into LocalStorage)
    // Getting from Local storage
    // Parse the data from LocalStorage to turn it back into an object that can be read (If the data was stored as a JSON)
    // To have it display as the string it was entered as
    // Input above the hours to confirm, that when the save button is pushed it is stored in localStorage

// Key value pair: key = hour & value = input
// Refer to mini project
// Activity 10, multiple save buttons - event delegation on each button needs to be unique, to know which to save it to
// Activity 2
// Activity 8

// ** v CODE INSTRUCTIONS v **

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
