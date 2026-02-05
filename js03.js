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

window.addEventListener("load", showGames);
function showGames() {  
  for (let i = 0; i < gameDates.length; i++) {
    let gameInfo = "";

    gameInfo += "<p>";
    
    if (gameLocations[i] === "h") {
      gameInfo += "vs. ";
     } else if (gameLocations[i] === "a") {
        gameInfo += "at ";
    }

    gameInfo += gameOpponents[i] + "<br>";

    gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

    gameInfo += "</p>";

    let tableCell = document.getElementById(gameDates[i]);
    tableCell.insertAdjacentHTML("beforeend", gameInfo);
  }
}
