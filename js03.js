/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */

// days of the week
let weekDays = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

window.addEventListener("load", addWeekDays);

function addWeekDays() {  
  let i = 0;

  let headingCells = document.getElementsByTagName("th");
  while (i<7) {
    headingCells[i].innerHTML = weekDays[i];
    i++;
  }
}

