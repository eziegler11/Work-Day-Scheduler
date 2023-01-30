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

// Global variables for hours/time
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

// GIVEN I am using a daily planner to create a schedule

    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar

var currentDay = dayjs().format(`dddd, MMMM D, YYYY`);
displayCurrentDay.append(currentDay);

    // WHEN I scroll down
    // THEN I am presented with timeblocks for standard business hours

$(function init () {

    // WHEN I view the timeblocks for that day
    // THEN each timeblock is color coded to indicate whether it is in the past, present, or future

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

    function textInput(event) {
        event.preventDefault();
    
        // Grabs text input of .description class
    
        var hourlyDescription = $(this).siblings('.description').val().trim();
        console.log(hourlyDescription)
    
        // Returns the ID of the DIV, in which the text & save button are clicked, in order to save to local storage
    
        var savedTimeBlock = $(this).parent().attr('id');
        console.log(savedTimeBlock);
        
        // Save the key as the hour and the value as the input and store in local storage
    
        localStorage.setItem(savedTimeBlock, hourlyDescription);
    
        var pEl = $(`<p>Saved to local storage 💾!</p>`);
        pEl.css({"padding-top": "25px", "color": "green"});
        pEl.addClass("timeout");
        displayCurrentDay.append(pEl);
        setTimeout(function() { $(".timeout").hide(); }, 3000);
    }

    // WHEN I click the save button for that timeblock
    // THEN the text for that event is saved in local storage

    saveButtonEl.on(`click`, textInput);

    // WHEN I refresh the page
    // THEN the saved events persist (confirms that data was entered into LocalStorage)

    for(let i = 9;i <= 17; i++){
        var storedData = localStorage.getItem("hour-"+i)
        $("#hour-"+i).children("textarea").val(storedData)
}
});
