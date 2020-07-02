"use strict";

class EventController {

  constructor(apihandler = new ApiHandler){
    this._apihandler = apihandler;
  }

// listens for change in selection, sends value to server via apihandler object
  watchForSelection(){
    let object = this;
    var menu = document.getElementById("functionMenu");

    // support routine - eventListener for the function drop down menu
      menu.addEventListener("input", function() {
        var selection = menu.options[menu.selectedIndex].text;
        if(selection == 'choose an option'){
          document.getElementById("message").innerHTML = "Please select the name of a function";
        } else {
          object._apihandler.send(selection);
          document.getElementById("message").innerHTML = "Sit tight, results are on their way!";
        }
      })
  }

}

const eventController = new EventController;
eventController.watchForSelection();
