// Global Variables for DOM Elements
var displayCurrentTime = $(`#currentDay`);

// PSEUDOCODE

// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentTime = dayjs().format(`dddd, MMMM D, YYYY`);
displayCurrentTime.append(currentTime);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    // Complete the rest of the timeblocks from the three that were given to us in the HTML file
    // Remove static past, present and future classes
    // find a way to programmatically add or remove the appropriate class
    // Note: Colors need to shift at the START of a new hour. No worries about minutes. If hour = hour then color.

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
